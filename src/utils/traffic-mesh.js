const path = require('path')

const execa = require('execa')
const waitPort = require('wait-port')

const { getPathInProject } = require('../lib/settings')

const { NETLIFYDEVERR } = require('./logo')

const EXEC_NAME = 'traffic-mesh'

const EDGE_HANDLERS_BUNDLER_CLI_PATH = path.resolve(require.resolve('@netlify/plugin-edge-handlers'), '..', 'cli.js')

const getForwardProxyPath = () => {
  let platform
  switch (process.platform) {
    case 'darwin':
      platform = 'x86_64-apple-darwin'
      break
    case 'linux':
      platform = 'x86_64-unknown-linux-gnu'
      break
    case 'win32':
      platform = 'x86_64-pc-windows-msvc'
      break
    default:
      throw new Error(`There is no traffic-mesh binary for ${process.platform}.`)
  }

  return path.resolve(require.resolve('@netlify/traffic-mesh-agent'), platform, EXEC_NAME)
}

const startForwardProxy = async ({ port, frameworkPort, functionsPort, publishDir, log, debug }) => {
  const args = [
    'start',
    'local',
    '--port',
    port,
    '--forward-proxy',
    `http://localhost:${frameworkPort}`,
    '--watch',
    publishDir,
    '--bundler',
    EDGE_HANDLERS_BUNDLER_CLI_PATH,
    '--log-file',
    getPathInProject(['logs', 'traffic-mesh.log']),
  ]

  if (functionsPort) {
    args.push('--local-services-uri', `http://localhost:${functionsPort}`)
  }

  if (debug) {
    args.push('--debug')
  }

  const { subprocess } = runProcess({ log, args })

  subprocess.on('close', process.exit)
  subprocess.on('SIGINT', process.exit)
  subprocess.on('SIGTERM', process.exit)
  ;['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP', 'exit'].forEach((signal) => {
    process.on(signal, () => {
      const sig = signal === 'exit' ? 'SIGTERM' : signal
      subprocess.kill(sig, {
        forceKillAfterTimeout: PROXY_EXIT_TIMEOUT,
      })
    })
  })

  try {
    const open = await waitPort({ port, output: 'silent', timeout: PROXY_READY_TIMEOUT })
    if (!open) {
      throw new Error(`Timed out waiting for forward proxy to be ready on port '${port}'`)
    }
    return `http://localhost:${port}`
  } catch (error) {
    log(`${NETLIFYDEVERR}`, error)
  }
}

// 30 seconds
const PROXY_READY_TIMEOUT = 3e4
// 2 seconds
const PROXY_EXIT_TIMEOUT = 2e3

const runProcess = ({ args }) => {
  const subprocess = execa(getForwardProxyPath(), args, { stdio: 'inherit' })
  return { subprocess }
}

module.exports = { runProcess, startForwardProxy }
