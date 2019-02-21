# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Generated by [`auto-changelog`](https://github.com/CookPete/auto-changelog).

## [v2.8.0](https://github.com/netlify/cli/compare/v2.7.4...v2.8.0) - 2019-02-21

### Merged

- Update netlify's js-client and semver ranges [`#250`](https://github.com/netlify/cli/pull/250)
- Update addons commands [`#251`](https://github.com/netlify/cli/pull/251)

### Commits

- Update semver deps [`ce9578d`](https://github.com/netlify/cli/commit/ce9578dd8ad9881ce61779ad97b49d13ecc6db7f)
- fix site build [`4ef6331`](https://github.com/netlify/cli/commit/4ef6331f4ae0a06377c17d37d985666b6a614e76)
- Keep addons command hidden [`712458d`](https://github.com/netlify/cli/commit/712458d5c74d4f3812f52d290375b8c8321ba625)

## [v2.7.4](https://github.com/netlify/cli/compare/v2.7.3...v2.7.4) - 2019-02-20

### Merged

- Update netlify and other dependencies [`#247`](https://github.com/netlify/cli/pull/247)

### Commits

- add addon:config & update addon:create command [`8adfa6f`](https://github.com/netlify/cli/commit/8adfa6fa15191e5e40953b9a36cbfe40e7183525)
- add addons:config command [`aa7c6ac`](https://github.com/netlify/cli/commit/aa7c6ac7508fe7211c71f6d49b4d111c1c5caea1)
- remove show and update addon command [`eadea85`](https://github.com/netlify/cli/commit/eadea8565fcbce7f1d052d89da345f4bf29fc029)

## [v2.7.3](https://github.com/netlify/cli/compare/v2.7.2...v2.7.3) - 2019-02-20

### Commits

- Removed unused cpx devdep [`7a12f2d`](https://github.com/netlify/cli/commit/7a12f2dcd5cd9b7c1d6cbcd79eef05a6ed99ceca)
- Fix shrinkwrap file when publishing [`0a42bed`](https://github.com/netlify/cli/commit/0a42bed2292720ad5eb3d92005d88835540379c5)

## [v2.7.2](https://github.com/netlify/cli/compare/v2.7.1...v2.7.2) - 2019-02-19

### Commits

- Only ship js files in the src folder [`c79c3fc`](https://github.com/netlify/cli/commit/c79c3fca15001601761f5bdfb083c60f355df1e4)

## [v2.7.1](https://github.com/netlify/cli/compare/v2.7.0...v2.7.1) - 2019-02-19

### Merged

- Fix octokit [`#245`](https://github.com/netlify/cli/pull/245)

### Fixed

- Update Octokit to fix authentication [`#243`](https://github.com/netlify/cli/issues/243)

### Commits

- Bump semver [`6672b52`](https://github.com/netlify/cli/commit/6672b521c68f33443746dc44f116bdcd9ed6fe74)

## [v2.7.0](https://github.com/netlify/cli/compare/v2.6.6...v2.7.0) - 2019-02-08

### Merged

- Dep chores [`#241`](https://github.com/netlify/cli/pull/241)
- Fix log PATH to be cross-platform [`#208`](https://github.com/netlify/cli/pull/208)
- Minor cleanup to addons:create [`#220`](https://github.com/netlify/cli/pull/220)
- Update js-client providing zip-n-ship capabilities [`#239`](https://github.com/netlify/cli/pull/239)
- Fix function config lookup in netlify.toml [`#240`](https://github.com/netlify/cli/pull/240)
- Restore original package-lock.json after packing [`#237`](https://github.com/netlify/cli/pull/237)

### Fixed

- Fix function config lookup in netlify.toml [`#209`](https://github.com/netlify/cli/issues/209)

### Commits

- Run `npm up` [`29f16fa`](https://github.com/netlify/cli/commit/29f16fa376a55093b09d0c14a67e6ab68a5718f7)
- Update js-client providing zip-n-ship capabilities  [`f9774a2`](https://github.com/netlify/cli/commit/f9774a29781c37d10875563c6221c2b92d2d7800)
- Update deps [`985e8da`](https://github.com/netlify/cli/commit/985e8da37e162fefabfd27ac5bf6e567ba7ea790)

## [v2.6.6](https://github.com/netlify/cli/compare/v2.6.5...v2.6.6) - 2019-01-31

### Merged

- Run prune before shrink-wrap [`#236`](https://github.com/netlify/cli/pull/236)

### Commits

- Run prune before shrink-wrap  [`761fcc5`](https://github.com/netlify/cli/commit/761fcc5660c8ac2a293afde661a129a0c8fbee84)

## [v2.6.5](https://github.com/netlify/cli/compare/v2.6.4...v2.6.5) - 2019-01-31

### Merged

- Publish with a shrink-wrap file again [`#235`](https://github.com/netlify/cli/pull/235)

### Fixed

- Publish with a shrink-wrap file again [`#234`](https://github.com/netlify/cli/issues/234)

### Commits

- Minor cleanup to addons:create [`6440ed3`](https://github.com/netlify/cli/commit/6440ed310439d6c3ad3baf6a72862679a07f1bbb)
- Update package-lock.json [`fc58e40`](https://github.com/netlify/cli/commit/fc58e40e30e2e0fa608eedfc90d0eeaab39da7ca)

## [v2.6.4](https://github.com/netlify/cli/compare/v2.6.3...v2.6.4) - 2019-01-23

### Merged

- Even more upload fixes [`#218`](https://github.com/netlify/cli/pull/218)

### Commits

- Improve error message priting [`3b2c54a`](https://github.com/netlify/cli/commit/3b2c54ae0afb31266e150f2fa0f4a54005011a8f)
- Update lock file [`ad54af3`](https://github.com/netlify/cli/commit/ad54af32fbf869c4ec6c4536cb382ba6ffb406fa)
- Update js-client to fix upload failures [`296bc9b`](https://github.com/netlify/cli/commit/296bc9b99ab72651396f4641d83a8af47752245c)

## [v2.6.3](https://github.com/netlify/cli/compare/v2.6.2...v2.6.3) - 2019-01-20

### Merged

- Update js-client to fix rate limit handling [`#217`](https://github.com/netlify/cli/pull/217)

### Commits

- Update js-client to fix rate limit handling  [`32590eb`](https://github.com/netlify/cli/commit/32590ebf2aa9788733908afee3aefd87f21e9bb8)

## [v2.6.2](https://github.com/netlify/cli/compare/v2.6.1...v2.6.2) - 2019-01-19

### Merged

- Fix rate limiting handing [`#215`](https://github.com/netlify/cli/pull/215)

### Commits

- Fix log PATH to be cross-platform [`64c175a`](https://github.com/netlify/cli/commit/64c175acae470d0dd8c695a821835d23f0765194)

## [v2.6.1](https://github.com/netlify/cli/compare/v2.6.0...v2.6.1) - 2019-01-09

### Merged

- Remove autocomplete plugin [`#207`](https://github.com/netlify/cli/pull/207)

### Fixed

- Remove autocomplete plugin [`#204`](https://github.com/netlify/cli/issues/204)

## [v2.6.0](https://github.com/netlify/cli/compare/v2.5.1...v2.6.0) - 2018-12-18

### Merged

- Update dependencies [`#203`](https://github.com/netlify/cli/pull/203)
- Add @oclif/plugin-autocomplete plugin [`#191`](https://github.com/netlify/cli/pull/191)
- Exit with status 1 on directory errors [`#202`](https://github.com/netlify/cli/pull/202)

### Commits

- Use prepublishOnly only hook [`aff28c4`](https://github.com/netlify/cli/commit/aff28c4e2c9acd1fc3c5732bdcd961d1a2a526c1)

## [v2.5.1](https://github.com/netlify/cli/compare/v2.5.0...v2.5.1) - 2018-12-13

### Merged

- fix(auth): due to api change in @octokit/rest [`#200`](https://github.com/netlify/cli/pull/200)

### Fixed

- fix(auth): due to api change in @octokit/rest [`#199`](https://github.com/netlify/cli/issues/199)

### Commits

- Add @oclif/plugin-autocomplete plugin [`6051ad8`](https://github.com/netlify/cli/commit/6051ad82454bf3a46e301c251254fc6d12d8f02b)
- Fix depcheck [`53bc97c`](https://github.com/netlify/cli/commit/53bc97cfc8ef509e0c290dfba28279e47adbb2e5)

## [v2.5.0](https://github.com/netlify/cli/compare/v2.4.0...v2.5.0) - 2018-12-06

### Merged

- Add addons:show command [`#190`](https://github.com/netlify/cli/pull/190)
- Add simple JSON parsing to parse raw for addons commands [`#189`](https://github.com/netlify/cli/pull/189)
- Output and feedback enhancements [`#169`](https://github.com/netlify/cli/pull/169)
- Improve init flow in various manual depoy states [`#186`](https://github.com/netlify/cli/pull/186)
- Allow CI setup without a local clone from sites:create command [`#178`](https://github.com/netlify/cli/pull/178)
- Update check improvements [`#188`](https://github.com/netlify/cli/pull/188)

### Commits

- Allow CI setup without a local site [`a01455f`](https://github.com/netlify/cli/commit/a01455f1c904bfa48ab1498f6b04fcd5000bb627)
- A few init improvements [`fdf0723`](https://github.com/netlify/cli/commit/fdf072343f9cb9dd3b6b3b28d99c6bc158897545)
- Check for updates more frequently [`e4fcbe8`](https://github.com/netlify/cli/commit/e4fcbe8a9f66df2fd61f5cc86ca337f89cf4f478)

## [v2.4.0](https://github.com/netlify/cli/compare/v2.2.3...v2.4.0) - 2018-12-05

### Merged

- Add a plugin system [`#132`](https://github.com/netlify/cli/pull/132)
- Add oclif help and plugins plugin. [`#187`](https://github.com/netlify/cli/pull/187)
- Fix renamed GitHub method [`#185`](https://github.com/netlify/cli/pull/185)
- Chore: Updates [`#184`](https://github.com/netlify/cli/pull/184)
- Use a package-lock file instead of shrink-wrap strategy [`#183`](https://github.com/netlify/cli/pull/183)

### Fixed

- Remove color highlights from description and help text [`#137`](https://github.com/netlify/cli/issues/137)

### Commits

- Update Ava [`bef0e76`](https://github.com/netlify/cli/commit/bef0e760d6b1b839ee47e617911449f144e3489f)
- Automate release process [`3949872`](https://github.com/netlify/cli/commit/39498728c9ad2e4aef02e0e34e7a1a350082fea9)
- Update octokit to 16.1.0 [`2e88945`](https://github.com/netlify/cli/commit/2e88945817838cd628ec270d92bddfe5ebbb2803)

## [v2.2.3](https://github.com/netlify/cli/compare/v2.2.2...v2.2.3) - 2018-11-26

### Commits

- Fix missing dependencies  [`4dd06ad`](https://github.com/netlify/cli/commit/4dd06ad5bf53d62355e2f126bcc641786dba4139)

## [v2.2.2](https://github.com/netlify/cli/compare/v2.2.1...v2.2.2) - 2018-11-26

### Commits

- Bump dependencies [`fc2305e`](https://github.com/netlify/cli/commit/fc2305eebe723ab1264dc9ae25146e308156492a)

## [v2.2.1](https://github.com/netlify/cli/compare/v2.2.0...v2.2.1) - 2018-11-06

### Merged

- Update Netlify API client to 2.2.1 [`#176`](https://github.com/netlify/cli/pull/176)

### Commits

- style(addons): use oclif builtin log() [`035a93c`](https://github.com/netlify/cli/commit/035a93c6ffcc32babad809cd0ec96bbece49d019)
- perf(sites:list): add loading message [`5b19fc5`](https://github.com/netlify/cli/commit/5b19fc5d151ca242d57c9d570b7d638db04c1d96)

## [v2.2.0](https://github.com/netlify/cli/compare/v2.1.3...v2.2.0) - 2018-11-02

### Merged

- Allow users to set the login url in the auth flow [`#172`](https://github.com/netlify/cli/pull/172)
- Remove package-lock from site [`#173`](https://github.com/netlify/cli/pull/173)
- Update CLI prompts for more consistent style [`#171`](https://github.com/netlify/cli/pull/171)

### Commits

- Document NETLIFY_WEB_UI [`26d5196`](https://github.com/netlify/cli/commit/26d5196afa5bda9b178abdacc0135506be278173)
- feat(init): shorthand flag for --manual [`452e014`](https://github.com/netlify/cli/commit/452e014562cd6c5a5b5e7a5443211bfeda82ca3b)

## [v2.1.3](https://github.com/netlify/cli/compare/v2.1.2...v2.1.3) - 2018-10-29

### Merged

- Update ESLint plugin [`#168`](https://github.com/netlify/cli/pull/168)
- Handle GitHub error better when user lacks perms [`#167`](https://github.com/netlify/cli/pull/167)
- Fix missing site_id error [`#165`](https://github.com/netlify/cli/pull/165)
- Fix typos [`#160`](https://github.com/netlify/cli/pull/160)

### Fixed

- Handle GitHub error better when user lacks perms [`#151`](https://github.com/netlify/cli/issues/151)

### Commits

- fix(deploy): missing siteId error [`1bd224a`](https://github.com/netlify/cli/commit/1bd224a2f847f7451725864db39953cce0fb5a2e)

## [v2.1.2](https://github.com/netlify/cli/compare/v2.1.1...v2.1.2) - 2018-10-19

### Merged

- Fix config path [`#159`](https://github.com/netlify/cli/pull/159)
- fix minor typo [`#152`](https://github.com/netlify/cli/pull/152)

### Fixed

- fix https://github.com/netlify/cli/issues/156 [`#156`](https://github.com/netlify/cli/issues/156)

### Commits

- add configPath back to site [`7e9e5a9`](https://github.com/netlify/cli/commit/7e9e5a9b6f5d561779caee9d96ea948ffd45aada)
- fix deploy config lookup [`002fd07`](https://github.com/netlify/cli/commit/002fd07ea6ca35f97c723f2f9b4916dcb8fe7442)
- Fix link [`57b553f`](https://github.com/netlify/cli/commit/57b553f5ff0871ba8f80b6ced8c3084c16a37244)

## [v2.1.1](https://github.com/netlify/cli/compare/v2.1.0...v2.1.1) - 2018-10-15

### Merged

- Handle type error in project-root algorithm [`#148`](https://github.com/netlify/cli/pull/148)

### Fixed

- Handle type error in project-root algorithm [`#145`](https://github.com/netlify/cli/issues/145)

### Commits

- Update eslint-plugin-prettier [`396e11b`](https://github.com/netlify/cli/commit/396e11ba9126295ac1e2593199fd65091d1fbc46)

## [v2.1.0](https://github.com/netlify/cli/compare/v2.1.0-beta.2...v2.1.0) - 2018-10-15

### Merged

- Add flags and ENV var support to deploy and fix bugs [`#147`](https://github.com/netlify/cli/pull/147)

## [v2.1.0-beta.2](https://github.com/netlify/cli/compare/v2.1.0-beta.1...v2.1.0-beta.2) - 2018-10-15

### Commits

- Site info lookup bug [`dab85dd`](https://github.com/netlify/cli/commit/dab85dd3b022c73b6b66b0f8acae9d9398ad01e5)

## [v2.1.0-beta.1](https://github.com/netlify/cli/compare/v2.0.0...v2.1.0-beta.1) - 2018-10-13

### Merged

- Update netlify.toml [`#143`](https://github.com/netlify/cli/pull/143)

### Commits

- Add flags and ENV var support to deploy [`474d843`](https://github.com/netlify/cli/commit/474d843b8343dae2111f66ab3b8544f7c35785a2)
- Improve login flow [`3f2ef54`](https://github.com/netlify/cli/commit/3f2ef543aa60bb632e432b42f38abe9668f4335e)
- update base class [`49d7606`](https://github.com/netlify/cli/commit/49d76068d2ff8d7cefff9429f9dcc8f05e01a5c0)

## [v2.0.0](https://github.com/netlify/cli/compare/v2.0.0-beta.10...v2.0.0) - 2018-10-09

### Merged

- Simplify command reference site [`#140`](https://github.com/netlify/cli/pull/140)
- Hide logout command [`#141`](https://github.com/netlify/cli/pull/141)

### Commits

- Add install and docs sections to README [`3d2aefc`](https://github.com/netlify/cli/commit/3d2aefcc1880270965eeac55fe5df7126865fa8b)
- Note the name of the command in README [`3dade93`](https://github.com/netlify/cli/commit/3dade9388f2ee8f1b9529508aee8335e839d55af)
- Remove logout cmd from list [`41557f5`](https://github.com/netlify/cli/commit/41557f5e42b72ca5b7a82ef564b91283f2b91820)

## [v2.0.0-beta.10](https://github.com/netlify/cli/compare/v2.0.0-beta.9...v2.0.0-beta.10) - 2018-10-09

## [v2.0.0-beta.9](https://github.com/netlify/cli/compare/v2.0.0-beta.8...v2.0.0-beta.9) - 2018-10-09

### Commits

- add root to this.netlify.site [`9104cf2`](https://github.com/netlify/cli/commit/9104cf2df283e19b4565daeb7f9c7a695a5bc419)
- Use dirname, not base name  [`73b594c`](https://github.com/netlify/cli/commit/73b594c1bb8dc024ecca8d1a1c9a42ab0b953317)

## [v2.0.0-beta.8](https://github.com/netlify/cli/compare/v2.0.0-beta.7...v2.0.0-beta.8) - 2018-10-09

### Merged

- Doc strings tweaks [`#138`](https://github.com/netlify/cli/pull/138)
- Implement improved project resolution algorithm [`#139`](https://github.com/netlify/cli/pull/139)
- Copy [`#136`](https://github.com/netlify/cli/pull/136)
- Some docs tweaks [`#135`](https://github.com/netlify/cli/pull/135)
- Doc string site build updates [`#133`](https://github.com/netlify/cli/pull/133)
- Update deploy.md [`#131`](https://github.com/netlify/cli/pull/131)
- Moving the usage docs to the docs website and other docs improvements [`#126`](https://github.com/netlify/cli/pull/126)
- Update js-client [`#125`](https://github.com/netlify/cli/pull/125)

### Commits

- Fix docs build [`02ebb80`](https://github.com/netlify/cli/commit/02ebb80f15adb7af645532cd3cf0ed35b2726ff3)
- Moving the usage docs to the docs website [`85f483a`](https://github.com/netlify/cli/commit/85f483ac8d73e5b565e66d4c6e4d8fb037fbe38e)
- Fix child command descriptions [`cc7d44c`](https://github.com/netlify/cli/commit/cc7d44cac475da7043056c8309ef5d827ea41d64)

## [v2.0.0-beta.7](https://github.com/netlify/cli/compare/v2.0.0-beta.6...v2.0.0-beta.7) - 2018-09-24

### Merged

- Update to netlify@2.0.1-beta.8 [`#124`](https://github.com/netlify/cli/pull/124)

## [v2.0.0-beta.6](https://github.com/netlify/cli/compare/v2.0.0-beta.5...v2.0.0-beta.6) - 2018-09-20

### Merged

- Improve init flow on deploy command [`#122`](https://github.com/netlify/cli/pull/122)
- Bug fixes on sites:create [`#121`](https://github.com/netlify/cli/pull/121)

### Commits

- remove old siteConfig getter [`66241e0`](https://github.com/netlify/cli/commit/66241e0145542e55f4501fb2510bc458fd5273f0)
- update get siteId refs [`656bf61`](https://github.com/netlify/cli/commit/656bf617239f8d4e7f1991dc493a6e42ef0d2d4c)
- update base class with resolved configuration in init [`d2f2367`](https://github.com/netlify/cli/commit/d2f2367e880d5a6a967e6021dba2f1c0470ef681)

## [v2.0.0-beta.5](https://github.com/netlify/cli/compare/v2.0.0-beta.4...v2.0.0-beta.5) - 2018-09-18

### Commits

- Improved error handling around deploys [`2bee51b`](https://github.com/netlify/cli/commit/2bee51b46c2aacd7ad4ec522e67ba2e85350e199)

## [v2.0.0-beta.4](https://github.com/netlify/cli/compare/v2.0.0-beta.3...v2.0.0-beta.4) - 2018-09-17

### Merged

- Add the ability to add deploy messages [`#113`](https://github.com/netlify/cli/pull/113)
- Improve deploy logging [`#112`](https://github.com/netlify/cli/pull/112)
- Use netlify/js-client [`#109`](https://github.com/netlify/cli/pull/109)
- Make form attribute [`#110`](https://github.com/netlify/cli/pull/110)
- Update site [`#108`](https://github.com/netlify/cli/pull/108)

### Commits

- Use js-client module [`cc2ac49`](https://github.com/netlify/cli/commit/cc2ac494e786646884d1eb44dfda23d74585a169)
- Add request form to register addons [`37acb60`](https://github.com/netlify/cli/commit/37acb60c6ff653b299ac9b921879bf581effe398)
- A few more api swap fixes [`b0eb925`](https://github.com/netlify/cli/commit/b0eb9252880988f84da039d6a47c4356674ce543)

## [v2.0.0-beta.3](https://github.com/netlify/cli/compare/v2.0.0-beta.2...v2.0.0-beta.3) - 2018-09-10

### Merged

- Don’t throw on state lookup in a missing folder [`#107`](https://github.com/netlify/cli/pull/107)
- update @next tags [`#102`](https://github.com/netlify/cli/pull/102)

### Fixed

- Don’t throw on state lookup in a missing folder [`#106`](https://github.com/netlify/cli/issues/106)

### Commits

- update tags [`e74d6f1`](https://github.com/netlify/cli/commit/e74d6f10471a317cf69cc682f276ee406d44c832)
- fix "Finisihed" typo [`2770135`](https://github.com/netlify/cli/commit/2770135b13bd80b288850d452886ca5a9b46c358)

## [v2.0.0-beta.2](https://github.com/netlify/cli/compare/v2.0.0-beta.1...v2.0.0-beta.2) - 2018-09-10

## [v2.0.0-beta.1](https://github.com/netlify/cli/compare/v2.0.0-alpha.7...v2.0.0-beta.1) - 2018-09-10

### Merged

- updates beta release [`#101`](https://github.com/netlify/cli/pull/101)
- install base modules [`#100`](https://github.com/netlify/cli/pull/100)
- [WIP] Add use case instructions to docs [`#97`](https://github.com/netlify/cli/pull/97)

### Commits

- update reamde [`6f47a88`](https://github.com/netlify/cli/commit/6f47a8802a76a8fe5649e5ccdb58b63e77b80e31)
- update no-repo flow [`9d20d77`](https://github.com/netlify/cli/commit/9d20d77327279fce40271b8e7de21156d2fd96a5)
- update telemetry [`5f1cf55`](https://github.com/netlify/cli/commit/5f1cf55bf65ebe16a648244c49606a8cf1866b4a)

## [v2.0.0-alpha.7](https://github.com/netlify/cli/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) - 2018-09-08

### Merged

- update token refs [`#99`](https://github.com/netlify/cli/pull/99)
- Update global config [`#96`](https://github.com/netlify/cli/pull/96)
- update main readme [`#95`](https://github.com/netlify/cli/pull/95)
- Update docs [`#94`](https://github.com/netlify/cli/pull/94)
- Automatically use git remote URL to `netlify link` sites [`#92`](https://github.com/netlify/cli/pull/92)
- improve header output [`#93`](https://github.com/netlify/cli/pull/93)
- Update docs site [`#91`](https://github.com/netlify/cli/pull/91)
- Use an alternate open browser lib [`#89`](https://github.com/netlify/cli/pull/89)
- Improve watch copy [`#88`](https://github.com/netlify/cli/pull/88)
- Add draft deploys [`#87`](https://github.com/netlify/cli/pull/87)

### Fixed

- Improve watch copy [`#82`](https://github.com/netlify/cli/issues/82)

### Commits

- move site to site folder [`57b474f`](https://github.com/netlify/cli/commit/57b474f124e52b6e3910011188793b0d8577245e)
- move UI to site [`18487af`](https://github.com/netlify/cli/commit/18487affc9a6ae5a6840e47fa899ebd448d14a91)
- extract and share link prompt [`d07c14c`](https://github.com/netlify/cli/commit/d07c14c03c5dcc6e122d058e11c8c6a3d2f4f21f)

## [v2.0.0-alpha.6](https://github.com/netlify/cli/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) - 2018-08-30

### Merged

- Deploy feedback [`#86`](https://github.com/netlify/cli/pull/86)
- Incorporate some flag design to the deploy command [`#85`](https://github.com/netlify/cli/pull/85)
- Set up our new client id [`#71`](https://github.com/netlify/cli/pull/71)
- Fix Copy [`#64`](https://github.com/netlify/cli/pull/64)
- Create Github deploy notifications on init [`#63`](https://github.com/netlify/cli/pull/63)

### Fixed

- Fix Copy [`#56`](https://github.com/netlify/cli/issues/56)

### Commits

- First pass at deploy progress [`337a0e9`](https://github.com/netlify/cli/commit/337a0e92439e628c3c01e77972ce8052923e3f8f)
- Hooks work [`e41bcc7`](https://github.com/netlify/cli/commit/e41bcc76e6e5ca73a8818a7b0bbccd0c6c03532a)
- update edit link [`4f4d256`](https://github.com/netlify/cli/commit/4f4d25602ccd2ea7c238f6ca202ae681a17756c8)

## [v2.0.0-alpha.5](https://github.com/netlify/cli/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) - 2018-08-28

### Merged

- Upload netlify TOML when deploying [`#61`](https://github.com/netlify/cli/pull/61)
- Add update notifier [`#60`](https://github.com/netlify/cli/pull/60)
- Fix badge links [`#59`](https://github.com/netlify/cli/pull/59)
- 2.0.0 Release [`#51`](https://github.com/netlify/cli/pull/51)
- Fix lint [`#50`](https://github.com/netlify/cli/pull/50)
- [WIP] Update docs [`#99`](https://github.com/netlify/cli/pull/99)
- Use netlify.toml info when linking [`#98`](https://github.com/netlify/cli/pull/98)
- Watch on init, and remove from sites commands [`#97`](https://github.com/netlify/cli/pull/97)
- Improve file filtering [`#95`](https://github.com/netlify/cli/pull/95)
- Remove unneeded quotes on link [`#94`](https://github.com/netlify/cli/pull/94)
- Document base class and reorganize [`#92`](https://github.com/netlify/cli/pull/92)
- Readme tweaks [`#91`](https://github.com/netlify/cli/pull/91)
- s/http/https [`#90`](https://github.com/netlify/cli/pull/90)
- Fix readme name hack [`#89`](https://github.com/netlify/cli/pull/89)
- Appveyor [`#49`](https://github.com/netlify/cli/pull/49)

### Fixed

- Use netlify.toml info when linking [`#74`](https://github.com/netlify/cli/issues/74)
- Watch on init, and remove from sites commands [`#79`](https://github.com/netlify/cli/issues/79)

### Commits

- update docs [`821c9ba`](https://github.com/netlify/cli/commit/821c9bace31a7738b40976afdce89201712f8829)
- add site [`947767c`](https://github.com/netlify/cli/commit/947767cd16e186fccdd9a362dc28a8d1250194f4)
- add doc gen script (will move elsewhere) [`2028b53`](https://github.com/netlify/cli/commit/2028b53d4e5bedc09c2471959de2f0c6e503a1f2)

## [v2.0.0-alpha.4](https://github.com/netlify/cli/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) - 2018-08-22

## [v2.0.0-alpha.3](https://github.com/netlify/cli/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) - 2018-08-22

### Merged

- Fix function deploys [`#48`](https://github.com/netlify/cli/pull/48)
- Init GitHub [`#87`](https://github.com/netlify/cli/pull/87)
- Add Init function [`#47`](https://github.com/netlify/cli/pull/47)
- [WIP] Add `addons` commands [`#85`](https://github.com/netlify/cli/pull/85)
- Initial sites:create command [`#72`](https://github.com/netlify/cli/pull/72)

### Commits

- GitHub init work [`80c2f0a`](https://github.com/netlify/cli/commit/80c2f0af0b03d13f3587dd9602e36eedb5182977)
- add addon commands [`73b2d96`](https://github.com/netlify/cli/commit/73b2d96daa7f7ed9154a24fa116fbdac40246113)
- Checking in progress [`ce88ad6`](https://github.com/netlify/cli/commit/ce88ad6ff7f6dfbed6cdeb87f25491b2ad7581b2)

## [v2.0.0-alpha.2](https://github.com/netlify/cli/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) - 2018-08-17

### Commits

- Fix prod dependencies [`6a462dc`](https://github.com/netlify/cli/commit/6a462dced612e274629483123a1ab1e604190ad3)

## [v2.0.0-alpha.1](https://github.com/netlify/cli/compare/v1.2.3...v2.0.0-alpha.1) - 2018-08-16

### Merged

- update open cmd [`#81`](https://github.com/netlify/cli/pull/81)
- Fix function uploads [`#70`](https://github.com/netlify/cli/pull/70)
- Update status command [`#69`](https://github.com/netlify/cli/pull/69)
- Remove help plugin [`#68`](https://github.com/netlify/cli/pull/68)
- Function deploys [`#62`](https://github.com/netlify/cli/pull/62)
- Add unlink command [`#67`](https://github.com/netlify/cli/pull/67)
- Fix api calls [`#65`](https://github.com/netlify/cli/pull/65)
- Add inquirer prompts [`#45`](https://github.com/netlify/cli/pull/45)
- Swap deps [`#46`](https://github.com/netlify/cli/pull/46)
- Use open-api spec directly [`#44`](https://github.com/netlify/cli/pull/44)
- Deploy Command [`#37`](https://github.com/netlify/cli/pull/37)
- Add status command [`#38`](https://github.com/netlify/cli/pull/38)
- Add whoami command [`#36`](https://github.com/netlify/cli/pull/36)
- Init again [`#31`](https://github.com/netlify/cli/pull/31)
- Site config [`#27`](https://github.com/netlify/cli/pull/27)

### Commits

- Reset Repo [`b62819b`](https://github.com/netlify/cli/commit/b62819bc9e1c05c01ea8c284ce6e1c2586226aea)
- Use r2 API client using open-api derived methods [`080572f`](https://github.com/netlify/cli/commit/080572fdad2e7decd415c1002d3bb55f153bc198)
- Check in function deploy work [`48b7605`](https://github.com/netlify/cli/commit/48b76055061eecb6ee7ed9d2057e0580d3028095)

## v1.2.3 - 2018-07-10

### Merged

- Deploy command [`#26`](https://github.com/netlify/cli/pull/26)
- Fix a bunch of babel and Ava issues [`#25`](https://github.com/netlify/cli/pull/25)
- Add ava test harness [`#23`](https://github.com/netlify/cli/pull/23)
- Use new auth hook [`#22`](https://github.com/netlify/cli/pull/22)
- Only store the auth token [`#21`](https://github.com/netlify/cli/pull/21)
- Add a babel build step [`#19`](https://github.com/netlify/cli/pull/19)
- Env override [`#18`](https://github.com/netlify/cli/pull/18)
- Add login hook [`#16`](https://github.com/netlify/cli/pull/16)
- Promisify api client [`#15`](https://github.com/netlify/cli/pull/15)
- Add login [`#7`](https://github.com/netlify/cli/pull/7)
- Scaffold cmds [`#6`](https://github.com/netlify/cli/pull/6)
- Add prettierrc file [`#5`](https://github.com/netlify/cli/pull/5)
- remove java codegen deps [`#4`](https://github.com/netlify/cli/pull/4)
- Use openapi client module [`#2`](https://github.com/netlify/cli/pull/2)
- Fix authentication prompt typo [`#41`](https://github.com/netlify/cli/pull/41)
- deprecatin' [`#38`](https://github.com/netlify/cli/pull/38)
- Add missing project management files. [`#22`](https://github.com/netlify/cli/pull/22)
- Add "env" command [`#18`](https://github.com/netlify/cli/pull/18)
- Permalink is displayed after deployment (along with the alias URL). [`#5`](https://github.com/netlify/cli/pull/5)

### Fixed

- Fixes #3 - Content-Length was not always correct in post requests [`#3`](https://github.com/netlify/cli/issues/3)

### Commits

- init commit [`041da26`](https://github.com/netlify/cli/commit/041da26dd050b4f51809040ba8cc99e61ba20d10)
- Remove troublesome lock files [`2a43998`](https://github.com/netlify/cli/commit/2a43998fa616b973779a7a2e3f1534eef73c09e4)
- Fix dependencies with shrinkwrap and yarn.lock [`f4f5dc3`](https://github.com/netlify/cli/commit/f4f5dc3de1fa1f33508e4c667dca3d1a7aea7b34)