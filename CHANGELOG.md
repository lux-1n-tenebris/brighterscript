# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [0.69.12](https://github.com/rokucommunity/brighterscript/compare/0.69.11...v0.69.12) - 2025-07-07
### Fixed
 - Fix discovery when `projects` is empty ([#1529](https://github.com/rokucommunity/brighterscript/pull/1529))



## [0.69.11](https://github.com/rokucommunity/brighterscript/compare/0.69.10...v0.69.11) - 2025-07-03
### Added
 - Add `enableProjectDiscovery` language server option ([#1520](https://github.com/rokucommunity/brighterscript/pull/1520), [#1525](https://github.com/rokucommunity/brighterscript/pull/1525))
### Changed
 - chore: add some docs about `ObserveField` namespace caveats ([#1513](https://github.com/rokucommunity/brighterscript/pull/1513))
 - Support `projects` array in settings ([#1521](https://github.com/rokucommunity/brighterscript/pull/1521))
 - Improve `manifest` discovery ([#1518](https://github.com/rokucommunity/brighterscript/pull/1518))
 - Improve `bsconfig.json` auto-discovery ([#1512](https://github.com/rokucommunity/brighterscript/pull/1512))



## [0.69.10](https://github.com/rokucommunity/brighterscript/compare/0.69.9...v0.69.10) - 2025-06-03
### Changed
 - upgrade to [roku-deploy@3.12.6](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3126---2025-06-03). Notable changes since 3.12.5:
     - chore: Upgrade to the undent package instead of dedent ([#196](https://github.com/rokucommunity/brighterscript/pull/196))
     - chore: Shared CI remove merged check on publish releases ([#194](https://github.com/rokucommunity/brighterscript/pull/194))



## [0.69.9](https://github.com/rokucommunity/brighterscript/compare/0.69.8...v0.69.9) - 2025-05-09
### Added
 - Add `bsc0` cli binary name ([#1490](https://github.com/rokucommunity/brighterscript/pull/1490))



## [0.69.8](https://github.com/rokucommunity/brighterscript/compare/0.69.7...v0.69.8) - 2025-05-05
### Changed
 - upgrade to [@rokucommunity/logger@0.3.11](https://github.com/rokucommunity/logger/blob/master/CHANGELOG.md#0311---2025-05-05). Notable changes since 0.3.10:
 - upgrade to [roku-deploy@3.12.5](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3125---2025-05-05). Notable changes since 3.12.4:



## [0.69.7](https://github.com/rokucommunity/brighterscript/compare/0.69.6...v0.69.7) - 2025-04-23
### Added
 - flag incorrect return statements in functions and subs ([#1463](https://github.com/rokucommunity/brighterscript/pull/1463))
### Fixed
 - prevent runtime crash for non-referencable funcs in ternary and null coalescing ([#1474](https://github.com/rokucommunity/brighterscript/pull/1474))
 - fix `removeParameterTypes` compile errors for return types ([#1414](https://github.com/rokucommunity/brighterscript/pull/1414))



## [0.69.6](https://github.com/rokucommunity/brighterscript/compare/v0.69.5...v0.69.6) - 2025-04-09
### Changed
 - Updated the type definition of the `InStr` global callable ([#1456](https://github.com/rokucommunity/brighterscript/pull/1456))



## [0.69.5](https://github.com/rokucommunity/brighterscript/compare/v0.69.4...v0.69.5) - 2025-04-03
### Fixed
 - more safely wrap expressions for template string transpile ([#1445](https://github.com/rokucommunity/brighterscript/pull/1445))



## [0.69.4](https://github.com/rokucommunity/brighterscript/compare/v0.69.3...v0.69.4) - 2025-03-31
### Changed
 - Support plugin factory detecting brighterscript version ([#1438](https://github.com/rokucommunity/brighterscript/pull/1438))
 - (chore) Migration to the new shared CI ([#1440](https://github.com/rokucommunity/brighterscript/pull/1440))
 - upgrade to [@rokucommunity/logger@0.3.10](https://github.com/rokucommunity/logger/blob/master/CHANGELOG.md#0310---2025-03-26). Notable changes since 0.3.9:
     - Added the ability to turn off timestamps in the output and fixed a potental crash if the format string was empty ([logger#11](https://github.com/rokucommunity/logger/pull/11))



## [0.69.3](https://github.com/rokucommunity/brighterscript/compare/v0.69.2...v0.69.3) - 2025-03-20
### Changed
 - Adds `Alias` statement syntax from v1 to v0 ([#1430](https://github.com/rokucommunity/brighterscript/pull/1430))
 - Remove temporary code that was accidentally committed ([#1432](https://github.com/rokucommunity/brighterscript/pull/1432))
### Fixed
 - Fixed `getClosestExpression` bug to return `undefined` when position not found ([#1433](https://github.com/rokucommunity/brighterscript/pull/1433))



## [0.69.2](https://github.com/rokucommunity/brighterscript/compare/v0.69.1...v0.69.2) - 2025-03-13
### Changed
 - Significantly improve the performance of standardizePath ([#1425](https://github.com/rokucommunity/brighterscript/pull/1425))
 - Backport v1 typecast syntax to v0 ([#1421](https://github.com/rokucommunity/brighterscript/pull/1421))



## [0.69.1](https://github.com/rokucommunity/brighterscript/compare/v0.69.0...v0.69.1) - 2025-03-10
### Changed
 - Prevent running the lsp project in a worker thread ([#1423](https://github.com/rokucommunity/brighterscript/pull/1423))



## [0.69.0](https://github.com/rokucommunity/brighterscript/compare/v0.68.5...v0.69.0) - 2025-02-10
### Changed
 - Language Server Rewrite ([#993](https://github.com/rokucommunity/brighterscript/pull/993))



## [0.68.5](https://github.com/rokucommunity/brighterscript/compare/v0.68.4...v0.68.5) - 2025-02-06
### Added
 - Add experimental `validate` flag to ProgramBuilder.run() ([#1409](https://github.com/rokucommunity/brighterscript/pull/1409))



## [0.68.4](https://github.com/rokucommunity/brighterscript/compare/v0.68.3...v0.68.4) - 2025-01-22
### Changed
 - upgrade to [roku-deploy@3.12.4](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3124---2025-01-22). Notable changes since 3.12.3:
     - fixed an issue with 577 error codes ([roku-deploy#182](https://github.com/rokucommunity/roku-deploy/pull/182))



## [0.68.3](https://github.com/rokucommunity/brighterscript/compare/v0.68.2...v0.68.3) - 2025-01-13
### Changed
 - Export more items ([#1394](https://github.com/rokucommunity/brighterscript/pull/1394))
### Fixed
 - Fix class transpile issue with child class constructor not inherriting parent params ([#1390](https://github.com/rokucommunity/brighterscript/pull/1390))



## [0.68.2](https://github.com/rokucommunity/brighterscript/compare/v0.68.1...v0.68.2) - 2024-12-06
### Changed
 - Add more convenience exports from vscode-languageserver ([#1359](https://github.com/rokucommunity/brighterscript/pull/1359))
 - upgrade to [roku-deploy@3.12.3](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3123---2024-12-06). Notable changes since 3.12.2:
     - Fix issues with detecting "check for updates required" ([roku-deploy#181](https://github.com/rokucommunity/roku-deploy/pull/181))
     - Identify when a 577 error is thrown, send a new developer friendly message ([roku-deploy#180](https://github.com/rokucommunity/roku-deploy/pull/180))
     - Bump dependencies to remove audit issues ([roku-deploy#178](https://github.com/rokucommunity/roku-deploy/pull/178))



## [0.68.1](https://github.com/rokucommunity/brighterscript/compare/v0.68.0...v0.68.1) - 2024-11-26
### Added
 - Add Namespace Source Literals ([#1354](https://github.com/rokucommunity/brighterscript/pull/1354))
 - Language server crash fix ([#1353](https://github.com/rokucommunity/brighterscript/pull/1353))
### Fixed
 - Fix bug with ternary transpile for indexed set ([#1357](https://github.com/rokucommunity/brighterscript/pull/1357))
 - Enhance lexer to support long numeric literals with type designators ([#1351](https://github.com/rokucommunity/brighterscript/pull/1351))



## [0.68.0](https://github.com/rokucommunity/brighterscript/compare/v0.67.8...v0.68.0) - 2024-11-21
### Changed
 - Fix issues with the ast walkArray function ([#1347](https://github.com/rokucommunity/brighterscript/pull/1347))
 - Optimize ternary transpilation for assignments ([#1341](https://github.com/rokucommunity/brighterscript/pull/1341))



## [0.67.8](https://github.com/rokucommunity/brighterscript/compare/v0.67.7...v0.67.8) - 2024-10-18
### Changed
 - upgrade to [roku-deploy@3.12.2](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3122---2024-10-18). Notable changes since 3.12.1:
     - fixes #175 - updated regex to find a signed package on `/plugin_package` page ([roku-deploy#176](https://github.com/rokucommunity/roku-deploy/pull/176))
### Fixed
 - namespace-relative transpile bug for standalone file ([#1324](https://github.com/rokucommunity/brighterscript/pull/1324))
 - Prevent crash when `ProgramBuilder.run` called with no options ([#1316](https://github.com/rokucommunity/brighterscript/pull/1316))



## [0.67.7](https://github.com/rokucommunity/brighterscript/compare/v0.67.6...v0.67.7) - 2024-09-25
### Changed
 - Ast node clone ([#1281](https://github.com/rokucommunity/brighterscript/pull/1281))



## [0.67.6](https://github.com/rokucommunity/brighterscript/compare/v0.67.5...v0.67.6) - 2024-09-05
### Added
 - support for `roIntrinsicDouble` ([#1291](https://github.com/rokucommunity/brighterscript/pull/1291))
 - support for resolving `sourceRoot` at time of config load ([#1290](https://github.com/rokucommunity/brighterscript/pull/1290))
### Changed
 - document plugin naming convention ([#1284](https://github.com/rokucommunity/brighterscript/pull/1284))



## [0.67.5](https://github.com/rokucommunity/brighterscript/compare/v0.67.4...v0.67.5) - 2024-07-31
### Fixed
 - templatestring support for `annotation.getArguments()` ([#1264](https://github.com/rokucommunity/brighterscript/pull/1264))



## [0.67.4](https://github.com/rokucommunity/brighterscript/compare/v0.67.3...v0.67.4) - 2024-07-24
### Changed
 - upgrade to [roku-deploy@3.12.1](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3121---2024-07-19). Notable changes since 3.12.0:
     - Fix bug with absolute paths and getDestPath ([roku-deploy#171](https://github.com/rokucommunity/roku-deploy/pull/171))



## [0.67.3](https://github.com/rokucommunity/brighterscript/compare/v0.67.2...v0.67.3) - 2024-06-14
### Changed
 - Flag using devDependency in production code ([#1222](https://github.com/rokucommunity/brighterscript/pull/1222))
### Fixed
 - Fix crash with missing scope ([#1234](https://github.com/rokucommunity/brighterscript/pull/1234))
 - fix: conform bsconfig.schema.json to strict types ([#1205](https://github.com/rokucommunity/brighterscript/pull/1205))



## [0.67.2](https://github.com/rokucommunity/brighterscript/compare/v0.67.1...v0.67.2) - 2024-06-03
### Changed
 - Fix crash with optional chaining in signature help ([#1207](https://github.com/rokucommunity/brighterscript/pull/1207))



## [0.67.1](https://github.com/rokucommunity/brighterscript/compare/v0.67.0...v0.67.1) - 2024-05-16
### Fixed
 - remove ascii color chars in language server logs ([#1189](https://github.com/rokucommunity/brighterscript/pull/1189))
 - crash when diagnostic is missing range ([#1174](https://github.com/rokucommunity/brighterscript/pull/1174))



## [0.67.0](https://github.com/rokucommunity/brighterscript/compare/v0.65.27...v0.67.0) - 2024-05-10
### Changed
 - Fix formatting with logger output ([#1171](https://github.com/rokucommunity/brighterscript/pull/1171))
 - Move function calls to separate diagnostic ([#1169](https://github.com/rokucommunity/brighterscript/pull/1169))
 - resolve the stagingDir option relative to the bsconfig.json file ([#1148](https://github.com/rokucommunity/brighterscript/pull/1148))
 - Upgrade to @rokucommunity/logger ([#1137](https://github.com/rokucommunity/brighterscript/pull/1137))



## 0.66.0
This release was skipped because we decided to change from the v0.66 alphas to move those breaking changes into v1. 



## [0.65.27](https://github.com/rokucommunity/brighterscript/compare/v0.65.26...v0.65.27) - 2024-03-27
### Added
 - Plugin hook provide workspace symbol ([#1118](https://github.com/rokucommunity/brighterscript/pull/1118))
 - Plugin hook for documentSymbol ([#1116](https://github.com/rokucommunity/brighterscript/pull/1116))
### Changed
 - Upgade LSP packages ([#1117](https://github.com/rokucommunity/brighterscript/pull/1117))
### Fixed
 - Improve workspace/document symbol handling ([#1120](https://github.com/rokucommunity/brighterscript/pull/1120))
 - Increase max param count diagnostic to 63 ([#1112](https://github.com/rokucommunity/brighterscript/pull/1112))



## [0.65.26](https://github.com/rokucommunity/brighterscript/compare/v0.65.25...v0.65.26) - 2024-03-13
### Fixed
 - Prevent unused variable warnings on transpiled ternary and null coalescence expressions ([#1101](https://github.com/rokucommunity/brighterscript/pull/1101))



## [0.65.25](https://github.com/rokucommunity/brighterscript/compare/v0.65.24...v0.65.25) - 2024-03-07
### Added
 - Allow negative patterns in diagnostic filters ([#1078](https://github.com/rokucommunity/brighterscript/pull/1078))
 - Support when tokens have null ranges ([#1072](https://github.com/rokucommunity/brighterscript/pull/1072))
 - Support whitespace in conditional compile keywords ([#1090](https://github.com/rokucommunity/brighterscript/pull/1090))
### Changed
 - Add `create-test-package` command for easier tgz testing ([#1088](https://github.com/rokucommunity/brighterscript/pull/1088))
 - Bump ip from 2.0.0 to 2.0.1 in /benchmarks ([#1079](https://github.com/rokucommunity/brighterscript/pull/1079))
 - Reduce null safety issues in Statement and Expression subclasses ([#1033](https://github.com/rokucommunity/brighterscript/pull/1033))



## [0.65.24](https://github.com/rokucommunity/brighterscript/compare/v0.65.23...v0.65.24) - 2024-03-01
### Changed
 - upgrade to [roku-deploy@3.12.0](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3120---2024-03-01). Notable changes since 3.11.3:
     - Support overriding various package upload form data ([roku-deploy#136](https://github.com/rokucommunity/roku-deploy/pull/136))



## [0.65.23](https://github.com/rokucommunity/brighterscript/compare/v0.65.22...v0.65.23) - 2024-02-29
### Changed
 - upgrade to [roku-deploy@3.11.3](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3113---2024-02-29). Notable changes since 3.11.2:
     - Retry the convertToSquahsfs request given the HPE_INVALID_CONSTANT error ([roku-deploy#145](https://github.com/rokucommunity/roku-deploy/pull/145))
### Fixed
 - empty interfaces break the parser ([#1082](https://github.com/rokucommunity/brighterscript/pull/1082))


## [0.65.22](https://github.com/rokucommunity/brighterscript/compare/v0.65.21...0.65.22) - 2024-02-09
### Added
 - support for `provideReferences` in plugins ([#1066](https://github.com/rokucommunity/brighterscript/pull/1066))
 - allow v1 syntax: built-in types for class member types and type declarations on lhs ([#1059](https://github.com/rokucommunity/brighterscript/pull/1059))
### Changed
 - fix sourcemap comment and add `file` prop to map ([#1064](https://github.com/rokucommunity/brighterscript/pull/1064))
 - move `coveralls-next` to a devDependency since it's not needed at runtime ([#1051](https://github.com/rokucommunity/brighterscript/pull/1051))



## [0.65.21](https://github.com/rokucommunity/brighterscript/compare/v0.65.20...v0.65.21) - 2024-01-31
### Fixed
 - parsing issues with multi-index IndexedSet and IndexedGet ([#1050](https://github.com/rokucommunity/brighterscript/pull/1050))



## [0.65.20](https://github.com/rokucommunity/brighterscript/compare/v0.65.19...v0.65.20) - 2024-01-30
### Added
 - plugin hooks for getDefinition ([#1045](https://github.com/rokucommunity/brighterscript/pull/1045))



## [0.65.19](https://github.com/rokucommunity/brighterscript/compare/v0.65.18...v0.65.19) - 2024-01-30
### Changed
 - Backport v1 syntax changes ([#1034](https://github.com/rokucommunity/brighterscript/pull/1034))



## [0.65.18](https://github.com/rokucommunity/brighterscript/compare/v0.65.17...v0.65.18) - 2024-01-25
### Changed
 - Refactor bsconfig documentation ([#1024](https://github.com/rokucommunity/brighterscript/pull/1024))
 - Prevent overwriting `Program._manifest` if already set on startup ([#1027](https://github.com/rokucommunity/brighterscript/pull/1027))
 - Improving null safety: Add FinalizedBsConfig and tweak plugin events ([#1000](https://github.com/rokucommunity/brighterscript/pull/1000))



## [0.65.17](https://github.com/rokucommunity/brighterscript/compare/v0.65.16...0.65.17) - 2024-01-16
### Changed
 - add documentation on pruneEmptyCodeFiles to the README ([#1012](https://github.com/rokucommunity/brighterscript/pull/1012))
 - assign .program to the builder BEFORE calling afterProgram ([#1011](https://github.com/rokucommunity/brighterscript/pull/1011))
### Fixed
 - properly handle `libpkg:/` prefix for script imports ([#1017](https://github.com/rokucommunity/brighterscript/pull/1017))



## [0.65.16](https://github.com/rokucommunity/brighterscript/compare/v0.65.15...v0.65.16) - 2024-01-08
### Added
 - Add `pruneEmptyCodeFiles` option to prevent publishing of empty files and exclude unnecessary script imports ([#997](https://github.com/rokucommunity/brighterscript/pull/997))
### Changed
 - chore: improve null safety ([#996](https://github.com/rokucommunity/brighterscript/pull/996))



## [0.65.15](https://github.com/rokucommunity/brighterscript/compare/v0.65.14...v0.65.15) - 2023-12-26
### Fixed
 - Prevent errors when using enums in a file that's not included in any scopes ([#995](https://github.com/rokucommunity/brighterscript/pull/995))



## [0.65.14](https://github.com/rokucommunity/brighterscript/compare/v0.65.13...v0.65.14) - 2023-12-20
### Fixed
 - multi-namespace class inheritance transpile bug ([#990](https://github.com/rokucommunity/brighterscript/pull/990))
### Changed
 - flag missing function references for `onChange` function ([#941](https://github.com/rokucommunity/brighterscript/pull/941))
 - upgrade to [roku-deploy@3.11.2](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3112---2023-12-20). Notable changes since 3.11.1:
     - Update wrong host password error message ([roku-deploy#134](https://github.com/rokucommunity/roku-deploy/pull/134))



## [0.65.13](https://github.com/rokucommunity/brighterscript/compare/v0.65.12...v0.65.13) - 2023-12-08
### Fixed
 - broken enum transpiling ([#985](https://github.com/rokucommunity/brighterscript/pull/985))



## [0.65.12](https://github.com/rokucommunity/brighterscript/compare/v0.65.11...v0.65.12) - 2023-12-07
### Added
 - `optional` modifier for interface and class members ([#955](https://github.com/rokucommunity/brighterscript/pull/955))
 - manifest loading from files ([#942](https://github.com/rokucommunity/brighterscript/pull/942))
### Changed
 - use regex for faster manifest/typedef detection ([#976](https://github.com/rokucommunity/brighterscript/pull/976))
 - out-of-date transpile blocks in docs ([#956](https://github.com/rokucommunity/brighterscript/pull/956))
### Fixed
 - Correct RANGE in template string when dealing with quotes in annotations ([#975](https://github.com/rokucommunity/brighterscript/pull/975))



## [0.65.11](https://github.com/rokucommunity/brighterscript/compare/v0.65.10...v0.65.11) - 2023-11-30
### Changed
 - upgrade to [roku-deploy@3.11.1](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3111---2023-11-30). Notable changes since 3.10.5:
     - Wait for file stream to close before resolving promise ([roku-deploy#133](https://github.com/rokucommunity/roku-deploy/pull/133))
### Fixed
 - enums as class initial values ([#950](https://github.com/rokucommunity/brighterscript/pull/950))



## [0.65.10](https://github.com/rokucommunity/brighterscript/compare/v0.65.9...v0.65.10) - 2023-11-14
### Changed
 - upgrade to [roku-deploy@3.10.5](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3105---2023-11-14). Notable changes since 3.10.4:
     - Add better device-info docs ([roku-deploy#128](https://github.com/rokucommunity/roku-deploy/pull/128))
     - Added some more message grabbing logic ([roku-deploy#127](https://github.com/rokucommunity/roku-deploy/pull/127))



## [0.65.9](https://github.com/rokucommunity/brighterscript/compare/v0.65.8...v0.65.9) - 2023-11-06
### Changed
 - upgrade to [roku-deploy@3.10.4](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3104---2023-11-03). Notable changes since 3.10.3:
     - Enhance getDeviceInfo() method ([roku-deploy#120](https://github.com/rokucommunity/roku-deploy/pull/120))
### Fixed
 - issue with unary expression parsing ([#938](https://github.com/rokucommunity/brighterscript/pull/938))



## [0.65.8](https://github.com/rokucommunity/brighterscript/compare/v0.65.7...v0.65.8) - 2023-10-06
### Added
 - interface parameter support ([#924](https://github.com/rokucommunity/brighterscript/pull/924))
### Changed
 - Bump postcss from 8.2.15 to 8.4.31 ([#928](https://github.com/rokucommunity/brighterscript/pull/928))
### Fixed
 - chore: fix typescript typing for `Deferred` ([#923](https://github.com/rokucommunity/brighterscript/pull/923))



## [0.65.7](https://github.com/rokucommunity/brighterscript/compare/v0.65.6...v0.65.7) - 2023-09-28
### Fixed
 - fix bug in --noproject flag logic ([#922](https://github.com/rokucommunity/brighterscript/pull/922))



## [0.65.6](https://github.com/rokucommunity/brighterscript/compare/v0.65.5...v0.65.6) - 2023-09-28
### Added
 - `noProject` flag to bsc so `bsconfig.json` loading can be skipped entirely even if present ([#868](https://github.com/rokucommunity/brighterscript/pull/868))
### Changed
 - docs: add some more details to the plugins ([#913](https://github.com/rokucommunity/brighterscript/pull/913))
 - docs: add missing emitDefinitions ([#893](https://github.com/rokucommunity/brighterscript/pull/893))
### Fixed
 - incorrect quasi location in template string ([#921](https://github.com/rokucommunity/brighterscript/pull/921))
 - `UnaryExpression` transpile for namespace and const ([#914](https://github.com/rokucommunity/brighterscript/pull/914))



## [0.65.5](https://github.com/rokucommunity/brighterscript/compare/v0.65.4...v0.65.5) - 2023-09-06
### Added
 - support overriding bs_const values in bsconfig ([#887](https://github.com/rokucommunity/brighterscript/pull/887))
 - allow optionally specifying bslib destination directory ([#871](https://github.com/rokucommunity/brighterscript/pull/871))
 - Print diagnostic related information ([#867](https://github.com/rokucommunity/brighterscript/pull/867))
### Fixed
 - ensure consistent insertion of bslib.brs ([#870](https://github.com/rokucommunity/brighterscript/pull/870))
 - Fix crashes in util for null ranges ([#869](https://github.com/rokucommunity/brighterscript/pull/869))
 - Fix tab issue when printing diagnostics ([#865](https://github.com/rokucommunity/brighterscript/pull/865))



## [0.65.4](https://github.com/rokucommunity/brighterscript/compare/v0.65.3...v0.65.4) - 2023-07-24
### Changed
 - Install `v8-profiler-next` on demand instead of being a dependency ([#854](https://github.com/rokucommunity/brighterscript/pull/854))



## [0.65.3](https://github.com/rokucommunity/brighterscript/compare/v0.65.2...v0.65.3) - 2023-07-22
### Changed
 - Show busy spinner for lsp builds. Remove `build-status` event in favor of new `busy-status` ([#852](https://github.com/rokucommunity/brighterscript/pull/852))
 - upgrade to [roku-deploy@3.10.3](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3103---2023-07-22). Notable changes since 3.10.2:
     - Bump word-wrap from 1.2.3 to 1.2.4 ([roku-deploy#117](https://github.com/rokucommunity/roku-deploy/pull/117))
 - Bump word-wrap from 1.2.3 to 1.2.4 ([#851](https://github.com/rokucommunity/brighterscript/pull/851))



## [0.65.2](https://github.com/rokucommunity/brighterscript/compare/v0.65.1...v0.65.2) - 2023-07-17
### Added
 - beforeProgramDispose event ([#844](https://github.com/rokucommunity/brighterscript/pull/844)), ([#845](https://github.com/rokucommunity/brighterscript/pull/845))
 - profiling support to the cli via the `--profile` flag ([#833](https://github.com/rokucommunity/brighterscript/pull/833))
### Changed
 - Make component ready on afterScopeCreate ([#843](https://github.com/rokucommunity/brighterscript/pull/843))
 - Add project index to language server log entries ([#836](https://github.com/rokucommunity/brighterscript/pull/836))
 - Prevent crashing when diagnostic is missing range. ([#832](https://github.com/rokucommunity/brighterscript/pull/832))
 - Prevent crash when diagnostic is missing range ([#831](https://github.com/rokucommunity/brighterscript/pull/831))
 - Add baseline interface docs ([#829](https://github.com/rokucommunity/brighterscript/pull/829))



## [0.65.1](https://github.com/rokucommunity/brighterscript/compare/v0.65.0...v0.65.1) - 2023-06-09
### Fixed
 - injection of duplicate super calls into classes ([#823](https://github.com/rokucommunity/brighterscript/pull/823))



## [0.65.0](https://github.com/rokucommunity/brighterscript/compare/v0.64.4...v0.65.0) - 2023-05-17
### Changed
 - npm audit fixes. upgrade to coveralls-next ([43756d8](https://github.com/rokucommunity/brighterscript/commit/43756d8))
 - Improve findChild and findAncestor AST methods ([#807](https://github.com/rokucommunity/brighterscript/pull/807))



## [0.64.4](https://github.com/rokucommunity/brighterscript/compare/v0.64.3...v0.64.4) - 2023-05-10
### Changed
 - upgrade to [roku-deploy@3.10.2](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3102---2023-05-10). Notable changes since 3.10.1:
     - Fix audit issues ([roku-deploy#116](https://github.com/rokucommunity/roku-deploy/pull/116))
     - fix nodejs 19 bug ([roku-deploy#115](https://github.com/rokucommunity/roku-deploy/pull/115))



## [0.64.3](https://github.com/rokucommunity/brighterscript/compare/v0.64.2...v0.64.3) - 2023-04-28
### Changed
 - Improves performance in symbol table fetching ([#797](https://github.com/rokucommunity/brighterscript/pull/797))



## [0.64.2](https://github.com/rokucommunity/brighterscript/compare/v0.64.1...v0.64.2) - 2023-04-18
### Fixed
 - namespace-relative enum value false positive diagnostic ([#793](https://github.com/rokucommunity/brighterscript/pull/793))



## [0.64.1](https://github.com/rokucommunity/brighterscript/compare/v0.64.0...v0.64.1) - 2023-04-14
### Changed
 - Bump xml2js from 0.4.23 to 0.5.0 ([#790](https://github.com/rokucommunity/brighterscript/pull/790))
 - upgrade to [roku-deploy@3.10.1](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3101---2023-04-14). Notable changes since 3.10.0:
     - Bump xml2js from 0.4.23 to 0.5.0 ([roku-deploy#112](https://github.com/rokucommunity/roku-deploy/pull/112))



## [0.64.0](https://github.com/rokucommunity/brighterscript/compare/v0.63.0...v0.64.0) - 2023-04-04
### Changed
 - Fix namespace-relative items ([#789](https://github.com/rokucommunity/brighterscript/pull/789))



## [0.63.0](https://github.com/rokucommunity/brighterscript/compare/v0.62.0...v0.63.0) - 2023-03-31
### Changed
 - Wrap transpiled template strings in parens ([#788](https://github.com/rokucommunity/brighterscript/pull/788))
 - Simplify the ast range logic ([#784](https://github.com/rokucommunity/brighterscript/pull/784))



## [0.62.0](https://github.com/rokucommunity/brighterscript/compare/v0.61.3...v0.62.0) - 2023-03-16
### Added
 - `severityOverride` option ([#725](https://github.com/rokucommunity/brighterscript/pull/725))
 - Optional chaining assignment validation ([#782](https://github.com/rokucommunity/brighterscript/pull/782))
### Changed
 - Fix transpile bug with optional chaning ([#781](https://github.com/rokucommunity/brighterscript/pull/781))
 - Fix crash when func has no block ([#774](https://github.com/rokucommunity/brighterscript/pull/774))
 - Move not-referenced check into ProgramValidator ([#773](https://github.com/rokucommunity/brighterscript/pull/773))
 - upgrade to [roku-deploy@3.10.0](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#3100---2023-03-16). Notable changes since 3.9.3:
     - Use micromatch instead of picomatch ([roku-deploy#109](https://github.com/rokucommunity/roku-deploy/pull/109))



## [0.61.3](https://github.com/rokucommunity/brighterscript/compare/v0.61.2...0.61.3) - 2023-01-12
### Changed
 - Add diagnostic for passing more than 5 arguments to a callFunc ([#765](https://github.com/rokucommunity/brighterscript/pull/765))
 - upgrade to [roku-deploy@3.9.3](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#393---2023-01-12)



## [0.61.2](https://github.com/rokucommunity/brighterscript/compare/v0.61.1...0.61.2) - 2022-12-15
### Changed
 - Bump qs from 6.5.2 to 6.5.3 ([#758](https://github.com/rokucommunity/brighterscript/pull/758))



## [0.61.1](https://github.com/rokucommunity/brighterscript/compare/v0.61.0...0.61.1) - 2022-12-07
### Fixed
 - Ensure enums and interfaces persist in typedefs ([#757](https://github.com/rokucommunity/brighterscript/pull/757))



## [0.61.0](https://github.com/rokucommunity/brighterscript/compare/v0.60.6...0.61.0) - 2022-12-05
### Added
 - new `removeParameterTypes` option that removes type information from parameters when transpiling ([#744](https://github.com/rokucommunity/brighterscript/pull/744))
### Fixed
 - throttle transpiling to prevent crashes ([#755](https://github.com/rokucommunity/brighterscript/pull/755))
 - exception while validating continue statement ([#752](https://github.com/rokucommunity/brighterscript/pull/752))
 - add missing visitor params for DottedSetStatement ([#748](https://github.com/rokucommunity/brighterscript/pull/748))
 - flag incorrectly nested statements ([#747](https://github.com/rokucommunity/brighterscript/pull/747))



## [0.60.6](https://github.com/rokucommunity/brighterscript/compare/v0.60.5...0.60.6) - 2022-11-08
### Fixed
 - double `super` call transpile in subclasses ([#740](https://github.com/rokucommunity/brighterscript/pull/740))
 - issues with Roku doc scraper and adds missing components ([#736](https://github.com/rokucommunity/brighterscript/pull/736))



## [0.60.5](https://github.com/rokucommunity/brighterscript/compare/v0.60.4...0.60.5) - 2022-11-03
### Changed
 - Refactor SymbolTable and AST parent logic so that SymbolTables get their parent symbol table from its own (AstNode) ([#732](https://github.com/rokucommunity/brighterscript/pull/732))
### Fixed
 - Significant performance boost in `validate()` by caching `getCallableByName` ([#739](https://github.com/rokucommunity/brighterscript/pull/739))
 - Add diagnostic when using namespaces as variables ([#738](https://github.com/rokucommunity/brighterscript/pull/738))
 - Fix crash in `getDefinition` ([#734](https://github.com/rokucommunity/brighterscript/pull/734))



## [0.60.4](https://github.com/rokucommunity/brighterscript/compare/v0.60.3...0.60.4) - 2022-10-28
### Changed
 - Add `name` to symbol table ([#728](https://github.com/rokucommunity/brighterscript/pull/728))
### Fixed
 - Allow `continue` as local var ([#730](https://github.com/rokucommunity/brighterscript/pull/730))
 - language server semanticToken request now waits until validate finishes ([#727](https://github.com/rokucommunity/brighterscript/pull/727))



## [0.60.3](https://github.com/rokucommunity/brighterscript/compare/v0.60.2...0.60.3) - 2022-10-20
### Changed
 - better parse recovery for unknown function parameter types ([#722](https://github.com/rokucommunity/brighterscript/pull/722))



## [0.60.2](https://github.com/rokucommunity/brighterscript/compare/v0.60.1...0.60.2) - 2022-10-18
### Fixed
 - if statement block var bug ([#698](https://github.com/rokucommunity/brighterscript/pull/698))



## [0.60.1](https://github.com/rokucommunity/brighterscript/compare/v0.60.0...0.60.1) - 2022-10-18
### Fixed
 - Beter location for bs1042 ([#719](https://github.com/rokucommunity/brighterscript/pull/719))



## [0.60.0](https://github.com/rokucommunity/brighterscript/compare/v0.59.0...0.60.0) - 2022-10-10
### Added
 - goto definition for enum statements and enum members ([#715](https://github.com/rokucommunity/brighterscript/pull/715))
 - nested namespace support ([#708](https://github.com/rokucommunity/brighterscript/pull/708))
### Changed
 - upgrade to [roku-deploy@3.9.2](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#392---2022-10-03). Notable changes since 3.9.1:
     - Replace minimatch with picomatch ([roku-deploy#101](https://github.com/rokucommunity/roku-deploy/pull/101))
### Fixed
 - fixes signature help resolution for callexpressions ([#707](https://github.com/rokucommunity/brighterscript/pull/707))
 - Fix transpilation of simple else block with leading comment ([#712](https://github.com/rokucommunity/brighterscript/pull/712))



## [0.59.0](https://github.com/rokucommunity/brighterscript/compare/v0.58.0...0.59.0) - 2022-10-03
### Added
 - `isThrowStatement` reflection function ([#709](https://github.com/rokucommunity/brighterscript/pull/709))
 - Support `pkg:/` paths for `setFile` ([#701](https://github.com/rokucommunity/brighterscript/pull/701))
 - Syntax and transpile support for continue statement ([#697](https://github.com/rokucommunity/brighterscript/pull/697))
### Changed
 - Migrate to `stagingDir` away from `stagingFolder` ([#706](https://github.com/rokucommunity/brighterscript/pull/706))
### Fixed
 - Fix enum error for negative values ([#703](https://github.com/rokucommunity/brighterscript/pull/703))



## [0.58.0](https://github.com/rokucommunity/brighterscript/compare/v0.57.2...0.58.0) - 2022-09-23
### Added
 - AST child searching functionality. ([#695](https://github.com/rokucommunity/brighterscript/pull/695))
 - `stagingFolderPath` option to the docs ([f521066](https://github.com/rokucommunity/brighterscript/commit/f521066))
 - Create common ancestor for Expression and Statement ([#693](https://github.com/rokucommunity/brighterscript/pull/693))
### Fixed
 - Scope validation performance boost ([#656](https://github.com/rokucommunity/brighterscript/pull/656))
 - Finds and includes more deeply embedded expressions ([#696](https://github.com/rokucommunity/brighterscript/pull/696))
### Changed
 - Rename refs to `isClassFieldStatement` and `isClassMethodStatement` ([#694](https://github.com/rokucommunity/brighterscript/pull/694))
 - Centralize file path normalization for Program ([#692](https://github.com/rokucommunity/brighterscript/pull/692))
 - use outputPath instead of object reference during transpiling to prevent duplicate file collisions ([#691](https://github.com/rokucommunity/brighterscript/pull/691))
 - Move file validation into BscPlugin ([#688](https://github.com/rokucommunity/brighterscript/pull/688))
 - upgrade to [roku-deploy@3.9.1](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#391---2022-09-19). Notable changes since 3.8.1:
     - Sync retainStagingFolder, stagingFolderPath with options. ([roku-deploy#100](https://github.com/rokucommunity/roku-deploy/pull/100))
     - Add stagingDir and retainStagingDir. ([roku-deploy#99](https://github.com/rokucommunity/roku-deploy/pull/99))



## [0.57.2](https://github.com/rokucommunity/brighterscript/compare/v0.57.1...0.57.2) - 2022-09-08
### Fixed
 - Fix `brightscript.configFile` workspace config bug ([#686](https://github.com/rokucommunity/brighterscript/pull/686))



## [0.57.1](https://github.com/rokucommunity/brighterscript/compare/v0.57.0...0.57.1) - 2022-09-07
### Fixed
 - fix(parser): consider namespace function transpiled names ([#685](https://github.com/rokucommunity/brighterscript/pull/685))



## [0.57.0](https://github.com/rokucommunity/brighterscript/compare/v0.56.0...0.57.0) - 2022-09-02
### Added
 - validation for files that are nested too deep ([#680](https://github.com/rokucommunity/brighterscript/pull/680))
### Changed
 - upgrade to [roku-deploy@3.8.1](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#381---2022-09-02). Notable changes since 3.7.1:
### Fixed
 - Allow `mod` as an aa prop([#684](https://github.com/rokucommunity/brighterscript/pull/684))
 - coerce AA member identifier kinds to `TokenKind.Identifier` ([#684](https://github.com/rokucommunity/brighterscript/pull/684))
 - Doc Scraper issues ([#585](https://github.com/rokucommunity/brighterscript/pull/585))
 - Fix case sensitivity issue with `bs_const` values ([#677](https://github.com/rokucommunity/brighterscript/pull/677))



## [0.56.0](https://github.com/rokucommunity/brighterscript/compare/v0.55.2...0.56.0) - 2022-08-23
### Added
 - validation for dimmed variables ([#672](https://github.com/rokucommunity/brighterscript/pull/672))
 - "--lsp" flag to bsc to start an LSP server ([#668](https://github.com/rokucommunity/brighterscript/pull/668))
### Fixed
 - compile crash for scope-less files ([#674](https://github.com/rokucommunity/brighterscript/pull/674))
 - parse error for malformed dim statement ([#673](https://github.com/rokucommunity/brighterscript/pull/673))
 - allow const as variable name ([#670](https://github.com/rokucommunity/brighterscript/pull/670))
 - crashes for language clients that don't support "workspace/configuration" requests ([#667](https://github.com/rokucommunity/brighterscript/pull/667))



## [0.55.2](https://github.com/rokucommunity/brighterscript/compare/v0.55.1...0.55.2) - 2022-08-15
### Fixed
 - Dedupe code completions in components ([#664](https://github.com/rokucommunity/brighterscript/pull/664))



## [0.55.1](https://github.com/rokucommunity/brighterscript/compare/v0.55.0...0.55.1) - 2022-08-07
### Fixed
 - scope-specific diagnostic grouping issue ([#660](https://github.com/rokucommunity/brighterscript/pull/660))
 - typescript error for ast parent setting ([#659](https://github.com/rokucommunity/brighterscript/pull/659))



## [0.55.0](https://github.com/rokucommunity/brighterscript/compare/v0.54.1...0.55.0) - 2022-08-03
### Added
 - a `toJSON` function to SymbolTable ([#655](https://github.com/rokucommunity/brighterscript/pull/655))
 - link all brs AST nodes to parent onFileValidate ([#650](https://github.com/rokucommunity/brighterscript/pull/650))
 - semantic token color for consts ([#654](https://github.com/rokucommunity/brighterscript/pull/654))
 - go-to-definition support for const statements ([#653](https://github.com/rokucommunity/brighterscript/pull/653))
### Changed
### Fixed
 - bug that wasn't transpiling const expressions when used inside assignment expressions ([#658](https://github.com/rokucommunity/brighterscript/pull/658))
 - Performance boost: better function sorting during validation ([#651](https://github.com/rokucommunity/brighterscript/pull/651))
 - broken plugin imports with custom cwd ([#652](https://github.com/rokucommunity/brighterscript/pull/652))



## [0.54.1](https://github.com/rokucommunity/brighterscript/compare/v0.54.0...0.54.1) - 2022-07-22
### Changed
 - Fix bug in languageserver hover provider ([#649](https://github.com/rokucommunity/brighterscript/pull/649))



## [0.54.0](https://github.com/rokucommunity/brighterscript/compare/v0.53.1...0.54.0) - 2022-07-22
### Added
 - hover for CONST references. ([#648](https://github.com/rokucommunity/brighterscript/pull/648))
 - plugins can contribute completions ([#647](https://github.com/rokucommunity/brighterscript/pull/647))
 - plugins can contribute hovers ([#393](https://github.com/rokucommunity/brighterscript/pull/393))
### Changed
 - Export some vscode interfaces ([#644](https://github.com/rokucommunity/brighterscript/pull/644))
 - Better plugin docs ([#643](https://github.com/rokucommunity/brighterscript/pull/643))



## [0.53.1](https://github.com/rokucommunity/brighterscript/compare/v0.53.0...0.53.1) - 2022-07-15
### Fixed
 - bug with codeactions at the edges of tokens. ([#642](https://github.com/rokucommunity/brighterscript/pull/642))
 - nested namespace import codeActions bug. ([#641](https://github.com/rokucommunity/brighterscript/pull/641))



## [0.53.0](https://github.com/rokucommunity/brighterscript/compare/v0.52.3...0.53.0) - 2022-07-14
### Added
 - New Language Feature: Constants ([#632](https://github.com/rokucommunity/brighterscript/pull/632))
### Changed
 - Flag top level statements ([#638](https://github.com/rokucommunity/brighterscript/pull/638))
 - Flag usage of undefined variables ([#631](https://github.com/rokucommunity/brighterscript/pull/631))
 - Use `util.createLocation`, not `Location.create()` ([#637](https://github.com/rokucommunity/brighterscript/pull/637))
 - Better project detection by language server ([#633](https://github.com/rokucommunity/brighterscript/pull/633))



## [0.52.3](https://github.com/rokucommunity/brighterscript/compare/v0.52.2...v0.52.3) - 2022-06-14
### Fixed
 - fix bug with class transpile in watch mode ([#630](https://github.com/rokucommunity/brighterscript/pull/630))
 - Send program-triggered `validate()` diagnostics to language client ([#629](https://github.com/rokucommunity/brighterscript/pull/629))
 - Emit before/after programTranspile during file transpile preview ([#628](https://github.com/rokucommunity/brighterscript/pull/628))



## [0.52.2](https://github.com/rokucommunity/brighterscript/compare/v0.52.1...v0.52.2) - 2022-06-13
### Fixed
 - transpile crash when file was changed by a plugin in beforeTranspile events ([#627](https://github.com/rokucommunity/brighterscript/pull/627))
 - bug in transpile preview custom command that wasn't returning the result ([#626](https://github.com/rokucommunity/brighterscript/pull/626))
 - add missing range on interface statement, causing transpile crashes ([#623](https://github.com/rokucommunity/brighterscript/pull/623))
 - transpile enum values in binary expressions ([#622](https://github.com/rokucommunity/brighterscript/pull/622))



## [0.52.1](https://github.com/rokucommunity/brighterscript/compare/v0.52.0...v0.52.1) - 2022-06-10
### Fixed
 - detect class circular extends ([#619](https://github.com/rokucommunity/brighterscript/pull/619))
 - improve namespace/enum/class semantic token detection (better syntax highlighting) ([##621](https://github.com/rokucommunity/brighterscript/pull/#621))



## [0.52.0](https://github.com/rokucommunity/brighterscript/compare/v0.51.4...v0.52.0) - 2022-06-08
### Added
 - LanguageServer: Load projects based on bsconfig.json presence ([#613](https://github.com/rokucommunity/brighterscript/pull/613))
### Changed
 - upgrade to [roku-deploy@3.7.1](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#371---2022-06-08)



## [0.51.4](https://github.com/rokucommunity/brighterscript/compare/v0.51.3...v0.51.4) - 2022-05-31
### Fixed
 - Add allowBrighterScriptInBrightScript to bsconfig.schema.json ([#610](https://github.com/rokucommunity/brighterscript/pull/610))



## [0.51.3](https://github.com/rokucommunity/brighterscript/compare/v0.51.2...v0.51.3) - 2022-05-31
### Fixed
 - hover for namespace functions ([#606](https://github.com/rokucommunity/brighterscript/pull/606))
### Changed
 - add `owner` and `key` to the visitor callbacks ([#600](https://github.com/rokucommunity/brighterscript/pull/600))



## [0.51.2](https://github.com/rokucommunity/brighterscript/compare/v0.51.1...v0.51.2) - 2022-05-26
### Fixed
 - allow enums and interfaces as class field types ([#602](https://github.com/rokucommunity/brighterscript/pull/602))



## [0.51.1](https://github.com/rokucommunity/brighterscript/compare/v0.51.0...v0.51.1) - 2022-05-26
### Fixed
 - allow enums and interfaces as function return types ([#601](https://github.com/rokucommunity/brighterscript/pull/601))
 - support AstEditor in visitor editing pattern ([#599](https://github.com/rokucommunity/brighterscript/pull/599))



## [0.51.0](https://github.com/rokucommunity/brighterscript/compare/v0.50.2...v0.51.0) - 2022-05-24
### Added
 - Add function-based` AstEditor.edit` method ([#598](https://github.com/rokucommunity/brighterscript/pull/598))
 - Allow multiple keys for `DependencyGraph.getAllDependencies()` ([#596](https://github.com/rokucommunity/brighterscript/pull/596))



## [0.50.2](https://github.com/rokucommunity/brighterscript/compare/v0.50.1...v0.50.2) - 2022-05-23
### Added
 - `allowBrighterScriptInBrightScript` config option to allow brighterscript features to be included in BrightScript files, and force those files to be transpiled ([#573](https://github.com/rokucommunity/brighterscript/pull/573))
### Changed
 - upgrade to  [roku-deploy@3.7.0](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#370---2022-05-23)



## [0.50.1](https://github.com/rokucommunity/brighterscript/compare/v0.50.0...v0.50.1) - 2022-05-18
### Fixed
 - Expose all the AstEditor methods to plugin events ([#593](https://github.com/rokucommunity/brighterscript/pull/593))
 - Fix language server cwd issue with multi-root workspaces ([#592](https://github.com/rokucommunity/brighterscript/pull/592))



## [0.50.0](https://github.com/rokucommunity/brighterscript/compare/v0.49.0...v0.50.0) - 2022-05-17
### Added
 - `srcPath` property on `XmlFile` and `BrsFile` to line up with the v1 branch ([#581](https://github.com/rokucommunity/brighterscript/pull/581))
 - more `AstEditor` functions ([#589](https://github.com/rokucommunity/brighterscript/pull/589))
### Changed
 - rename `ClassFieldStatement` and `ClassMethodStatement` to `FieldStatement` and `MethodStatement` respectively to allow their use in non-class-related things ([#582](https://github.com/rokucommunity/brighterscript/pull/582))
### Fixed
 - Fix semantic tokens for enums in if statements ([#584](https://github.com/rokucommunity/brighterscript/pull/584))
 - Don't push synthetic constructor into each class ([#586](https://github.com/rokucommunity/brighterscript/pull/586))
 - transpile bugs related to class `super` handling ([#590](https://github.com/rokucommunity/brighterscript/pull/590))



## [0.49.0](https://github.com/rokucommunity/brighterscript/compare/v0.48.1...v0.49.0) - 2022-05-02
### Added
 - allow interfaces and enums as function param types ([#580](https://github.com/rokucommunity/brighterscript/pull/580))
 - Transpile files added by plugins after start of transpile cycle ([#578](https://github.com/rokucommunity/brighterscript/pull/578))
 - add AstEditor to `beforeProgramTranspile` and `afterProgramTranspile` plugin events ([#576](https://github.com/rokucommunity/brighterscript/pull/576))



## [0.48.1](https://github.com/rokucommunity/brighterscript/compare/v0.48.0...v0.48.1) - 2022-04-14
### Fixed
 - prevent duplicate `CreateObject` validations showing one for each affected scope ([#568](https://github.com/rokucommunity/brighterscript/pull/568))
 - prevent `CreateObject` diagnostics for component library components ([#568](https://github.com/rokucommunity/brighterscript/pull/568))



## [0.48.0](https://github.com/rokucommunity/brighterscript/compare/v0.47.3...v0.48.0) - 2022-04-13
### Added
 - language support for native BrightScript optional chaining ([#546](https://github.com/rokucommunity/brighterscript/pull/546))
 - validation for all known `createObject` values and parameters. ([#435](https://github.com/rokucommunity/brighterscript/pull/435))
### Fixed
 - add missing statements and expressions to `createVisitor` ([#567](https://github.com/rokucommunity/brighterscript/pull/567))



## [0.47.3](https://github.com/rokucommunity/brighterscript/compare/v0.47.2...v0.47.3) - 2022-04-08
### Fixed
 - accuracy issues when parsing the manifest ([#565](https://github.com/rokucommunity/brighterscript/pull/565))



## [0.47.2](https://github.com/rokucommunity/brighterscript/compare/v0.47.1...v0.47.2) - 2022-04-07
### Fixed
 - enum transpile bug for binary expressions ([#559](https://github.com/rokucommunity/brighterscript/pull/559))
 - add missing `require` entry to `bsconfig.schema.json` ([#560](https://github.com/rokucommunity/brighterscript/pull/560))



## [0.47.1](https://github.com/rokucommunity/brighterscript/compare/v0.47.0...v0.47.1) - 2022-04-05
### Changed
 - disable strict cli args to empower plugins ([#557](https://github.com/rokucommunity/brighterscript/pull/557))
 - don't add trailing commas in transpiled output for array and aa literals ([#556](https://github.com/rokucommunity/brighterscript/pull/556))
 - retain quote char when transpiling xml attributes ([#552](https://github.com/rokucommunity/brighterscript/pull/552))



## [0.47.0](https://github.com/rokucommunity/brighterscript/compare/v0.46.0...v0.47.0) - 2022-03-30
### Added
 - `require` flag to allow loading external node modules as part of the build process (useful for things like `ts-node/register`). ([#550](https://github.com/rokucommunity/brighterscript/pull/550), [#551](https://github.com/rokucommunity/brighterscript/pull/551))



## [0.46.0](https://github.com/rokucommunity/brighterscript/compare/v0.45.6...v0.46.0) - 2022-03-24
### Changed
 - refactored try-catch statement to make the expressions and bodies easier to access via plugins. [#514](https://github.com/rokucommunity/brighterscript/pull/514)



## [0.45.6](https://github.com/rokucommunity/brighterscript/compare/v0.45.5...v0.45.6) - 2022-03-17
### Changed
 - upgrade to  [roku-deploy@3.5.4](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#354---2022-03-17) which fixed significant performance issues during globbing. ([roku-deploy#86](https://github.com/rokucommunity/roku-deploy/pull/86))
### Fixed
 - crash when checking for enums to transpile [#539](https://github.com/rokucommunity/brighterscript/pull/539)
 - Transpile if statements as written [#537](https://github.com/rokucommunity/brighterscript/pull/537)
 - Keep the original type case when transpiling. [#536](https://github.com/rokucommunity/brighterscript/pull/536)
 - Show cli usage in plugins documentation



## [0.45.5](https://github.com/rokucommunity/brighterscript/compare/v0.45.4...v0.45.5) - 2022-03-10
### Fixed
 - bug with typedefs and auto-generated class constructor functions [#535](https://github.com/rokucommunity/brighterscript/pull/535)



## [0.45.4](https://github.com/rokucommunity/brighterscript/compare/v0.45.3...v0.45.4) - 2022-03-08
### Fixed
 - bug that wasn't computing ownScriptImports after calling `invalidateReferences()` [#529](https://github.com/rokucommunity/brighterscript/pull/529)
 - bug with logger.time() not having accurate timings when run asynchronously [#532](https://github.com/rokucommunity/brighterscript/pull/532)



## [0.45.3](https://github.com/rokucommunity/brighterscript/compare/v0.45.2...v0.45.3) - 2022-02-25
### Fixed
 - source map bug with plugins that used the AST node creation functions depending on `interpolatedRange`. [#528](https://github.com/rokucommunity/brighterscript/pull/528)



## [0.45.2](https://github.com/rokucommunity/brighterscript/compare/v0.45.1...v0.45.2) - 2022-02-24
### Changed
 - add default token values in creators. [#520](https://github.com/rokucommunity/brighterscript/pull/520)
### Fixed
 - significant memory leak [#527](https://github.com/rokucommunity/brighterscript/pull/527)
 - bug with transpiling empty for loop [#519](https://github.com/rokucommunity/brighterscript/pull/519)



## [0.45.1](https://github.com/rokucommunity/brighterscript/compare/v0.45.0...v0.45.1) - 2022-02-16
### Changed
 - upgrade to  [roku-deploy@3.5.3](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#353---2022-02-16) which fixed a missing typescript definition issue.



## [0.45.0](https://github.com/rokucommunity/brighterscript/compare/v0.44.0...v0.45.0) - 2022-02-11
### Added
 - `enum` language feature ([#484](https://github.com/rokucommunity/brighterscript/pull/484))
 - transpile override for plugins when providing AST edits. ([#511](https://github.com/rokucommunity/brighterscript/pull/511))
 - `setFile` method to align with v1. ([#510](https://github.com/rokucommunity/brighterscript/pull/510))
### Changed
 - deprecated `addOrReplaceFile` method to align with v1. ([#510](https://github.com/rokucommunity/brighterscript/pull/510))
 - internal `Cache` method now extends `Map` instead of keeping an internal map. ([#509](https://github.com/rokucommunity/brighterscript/pull/509))



## [0.44.0](https://github.com/rokucommunity/brighterscript/compare/v0.43.1...v0.44.0) - 2022-02-08
### Added
 - `onScopeValidate` plugin event useful when plugins want to contribute scope validations ([#505](https://github.com/rokucommunity/brighterscript/pull/505))
### Changed
 - show plugin transpile modifications in the `getTranspiledFile` callback (used for "show preview" functionality in vscode) ([#502](https://github.com/rokucommunity/brighterscript/pull/502))
 - make `Program.getFile` more flexible, and deprecate `Program.getFileByPkgPath`, `Program.getFileByPathAbsolute` ([#506](https://github.com/rokucommunity/brighterscript/pull/506))
 - add `Program.getFiles` and deprecate `Program.getFilesByPkgPath` ([#506](https://github.com/rokucommunity/brighterscript/pull/506))
 - move file validation plugin event emitting into `Program.validate()` which means you can't trigger those events by calling `File.validate()` anymore.  ([#504](https://github.com/rokucommunity/brighterscript/pull/504))
 - support generics for `Cache` class ([#503](https://github.com/rokucommunity/brighterscript/pull/503))
### Fixed
 - bug in hover showing required params as optional and optional params as required ([#501](https://github.com/rokucommunity/brighterscript/pull/501))



## [0.43.1](https://github.com/rokucommunity/brighterscript/compare/v0.43.0...v0.43.1) - 2022-01-28
### Fixed
 - crash when hovering over global functions ([#497](https://github.com/rokucommunity/brighterscript/pull/497))



## [0.43.0](https://github.com/rokucommunity/brighterscript/compare/v0.42.0...v0.43.0) - 2022-01-28
### Added
 - show function documentation when hovering over functions. ([#495](https://github.com/rokucommunity/brighterscript/pull/495))
 - for plugin authors:
  - added `beforeFileValidate` and `onFileValidate` plugin hooks ([#490](https://github.com/rokucommunity/brighterscript/pull/490))
  - added `expressions` collection to `BrsFile.parser.references` which includes all the full expressions, which can be used instead of AST walking in many cases. ([#487](https://github.com/rokucommunity/brighterscript/pull/487))
### Changed
 - For plugin authors:
   - move parse and validate events to `Program` class and out of `XmlFile` and `BrsFile`. This only impacts plugins that depend on the `afterFileParse`, `onFileValidate` and `afterFileValidate` events while also constructing those files with their constructors directly. ([#494](https://github.com/rokucommunity/brighterscript/pull/494))
   - removed internal [barrels](https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md). This means plugins can no longer do things like: `import { something} from 'brighterscript/some-path'`. All necessary exports can be done from the top-level brighterscript package directly. ([#492](https://github.com/rokucommunity/brighterscript/pull/492))
 - use `Map` for `ClassValidator` class lookup instead of an object. ([#481](https://github.com/rokucommunity/brighterscript/pull/481))



### Fixed
 - bug preventing code to come after an interface statement. ([#493](https://github.com/rokucommunity/brighterscript/pull/493))
 - don't crash on null options in `printDiagnostics`. ([3147202](https://github.com/rokucommunity/brighterscript/commit/3147202b948d08be198255c068f082857c9de1f0))

## [0.42.0](https://github.com/rokucommunity/brighterscript/compare/v0.41.6...v0.42.0) - 2022-01-10
### Added
 - AST editing utility for transformations during between the begin and end transpile lifecycle events. See [the documentation](https://github.com/rokucommunity/brighterscript/blob/master/docs/plugins.md#modifying-code) for more info. ([#478](https://github.com/rokucommunity/brighterscript/pull/478))
### Fixed
 - bug in global function parameter checking that was not properly enforcing optional/required status for parameters. ([#479](https://github.com/rokucommunity/brighterscript/pull/479))



## [0.41.6](https://github.com/rokucommunity/brighterscript/compare/v0.41.5...v0.41.6) - 2022-01-05
### Fixed
 - issue in the transpiled output of the null coalescing operator where plain variable references are not properly passed into the function. ([#474](https://github.com/rokucommunity/brighterscript/pull/474))



## [0.41.5](https://github.com/rokucommunity/brighterscript/compare/v0.41.4...v0.41.5) - 2021-11-23
### Fixed
 - critical crash whenever a local variable had the same name as a javascript object function on the prototype (stuch as `constructor`). ([#469](https://github.com/rokucommunity/brighterscript/pull/469))



## [0.41.4](https://github.com/rokucommunity/brighterscript/compare/v0.41.3...v0.41.4) - 2021-10-28
### Fixed
 - bug transpiling instant resume xml elements ([#465](https://github.com/rokucommunity/brighterscript/pull/465))



## [0.41.3](https://github.com/rokucommunity/brighterscript/compare/v0.41.2...v0.41.3) - 2021-10-27
### Changed
 - upgrade to  [roku-deploy@3.5.0](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#350---2021-10-27)  which adds the ability to use negated non-rootDir top-level patterns in the files array ([#78](https://github.com/rokucommunity/roku-deploy/pull/78))
### Fixed
 -  Allow diagnostic non-numeric disable code comments ([#463](https://github.com/rokucommunity/brighterscript/pull/463)).


## [0.41.2](https://github.com/rokucommunity/brighterscript/compare/v0.41.1...v0.41.2) - 2021-10-17
### Fixed
 - crash when subclass field has same name as ancestor method ([#460](https://github.com/rokucommunity/brighterscript/pull/460)).



## [0.41.1](https://github.com/rokucommunity/brighterscript/compare/v0.41.0...v0.41.1) - 2021-10-07
### Fixed
 - parse issue with regex literals ([#458](https://github.com/rokucommunity/brighterscript/pull/458)).



## [0.41.0](https://github.com/rokucommunity/brighterscript/compare/v0.40.1...v0.41.0) - 2021-09-27
### Added
 - Regex literal support in brighterscript ([#452](https://github.com/rokucommunity/brighterscript/pull/452)).



## [0.40.1](https://github.com/rokucommunity/brighterscript/compare/v0.40.0...v0.40.1) - 2021-09-17
### Changed
 - install roku-deploy@3.4.2 which prevents deploy crashes when target Roku doesn't have an installed channel ([roku-deploy#65](https://github.com/rokucommunity/brighterscript/compare/v0.39.4...v0.40.0))



## [0.40.0](https://github.com/rokucommunity/brighterscript/compare/v0.39.4...v0.40.0) - 2021-08-02
### Added
 - language support for Interface statements ([#426](https://github.com/rokucommunity/brighterscript/pull/426))
### Changed
 - cli prints the path of any loaded bsconfig.json on startup ([#434](https://github.com/rokucommunity/brighterscript/pull/434))



## [0.39.4](https://github.com/rokucommunity/brighterscript/compare/v0.39.3...v0.39.4) - 2021-06-27
### Fixed
 - incorrect block range for inline if/then branch ([#424](https://github.com/rokucommunity/brighterscript/pull/424))
 - extract associative array comma when parsing ([#427](https://github.com/rokucommunity/brighterscript/pull/424))
 - allow up to 6 arguments in `CreateObject` function signature ([#430](https://github.com/rokucommunity/brighterscript/pull/430))
 - add v30/bslCore library functions to global callables ([#433](https://github.com/rokucommunity/brighterscript/pull/433))


## [0.39.3](https://github.com/rokucommunity/brighterscript/compare/v0.39.2...v0.39.3) - 2021-06-01
### Changed
 - upgraded to [roku-deploy@3.4.1](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#341---2021-06-01) which fixes bugs introduced in roku-deploy@3.4.0



## [0.39.2](https://github.com/rokucommunity/brighterscript/compare/v0.39.1...v0.39.2) - 2021-05-28
### Changed
 - upgraded to [roku-deploy@3.4.0](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#340---2021-05-28) which brings significant zip speed improvements



## [0.39.1](https://github.com/rokucommunity/brighterscript/compare/v0.39.0...v0.39.1) - 2021-05-24
### Changed
 - re-export `CodeActionKind` so plugins don't need to import from vscode-brightscript-language directly.
### Fixed
 - code action for "replace" tasks bug
 - include missing information in the CodeAction construction



## [0.39.0](https://github.com/rokucommunity/brighterscript/compare/v0.38.2...v0.39.0) - 2021-05-18
### Added
 - semantic token support for plugins
 - basic semantic tokens for `new` statements and namespace usage



## [0.38.2](https://github.com/rokucommunity/brighterscript/compare/v0.38.1...v0.38.2) - 2021-05-17
### Fixed
 - language server crash when namespaced function or class didn't have a name ([#419](https://github.com/rokucommunity/brighterscript/pull/419))



## [0.38.1](https://github.com/rokucommunity/brighterscript/compare/v0.38.0...v0.38.1) - 2021-05-14
### Changed
 - SOURCE_FILE_PATH and SOURCE_LOCATION source literals are now string concatenations in order to avoid triggering Roku's static analysis rule against `file:/` protocol strings ([#415](https://github.com/rokucommunity/brighterscript/pull/415))
### Fixed
 - ParseJson function signature to include second parameter ([#418](https://github.com/rokucommunity/brighterscript/pull/418))
 - bsconfig.schema.json support for string diagnostic codes ([#416](https://github.com/rokucommunity/brighterscript/pull/416))
 - upgrade chokidar to add `--watch` cli support for M1 mac computers  ([#386](https://github.com/rokucommunity/brighterscript/pull/386))
 - several dependency vulnerability fixes ([#413](https://github.com/rokucommunity/brighterscript/pull/413), [#410](https://github.com/rokucommunity/brighterscript/pull/410), [#411](https://github.com/rokucommunity/brighterscript/pull/411))



## [0.38.0](https://github.com/rokucommunity/brighterscript/compare/v0.37.4...v0.38.0) - 2021-05-04
### Added
 - warning for mismatched class method accessibility ([#402](https://github.com/rokucommunity/brighterscript/pull/402))
 - allow class field overrides in child classes as long as they are the same type ([#394](https://github.com/rokucommunity/brighterscript/pull/394))



## [0.37.4](https://github.com/rokucommunity/brighterscript/compare/v0.37.3...v0.37.4) - 2021-04-20
### Fixed
 - bug validating namespace function calls ([#390](https://github.com/rokucommunity/brighterscript/pull/390))



## [0.37.3](https://github.com/rokucommunity/brighterscript/compare/v0.37.2...v0.37.3) - 2021-04-12
### Fixed
 - bug where having multiple components with the same name would cause issues in the program, normally requiring a language server or watcher restart. ([#353](https://github.com/rokucommunity/brighterscript/pull/353))
 - bug in xml file ignoring `needsTranspiled` flag when set by plugins ([#384](https://github.com/rokucommunity/brighterscript/pull/384))



## [0.37.2](https://github.com/rokucommunity/brighterscript/compare/v0.37.1...v0.37.2) - 2021-04-08
### Fixed
 - erraneous syntax issue when concatenating a template string and a regular string. ([#383](https://github.com/rokucommunity/brighterscript/pull/383))
 - prevent circular import causing stack overflow crash. ([#381](https://github.com/rokucommunity/brighterscript/pull/381))



## [0.37.1](https://github.com/rokucommunity/brighterscript/compare/v0.37.0...v0.37.1) - 2021-03-30
### Fixed
 - bug when transpiling print statements that wouldn't retain the existing separators (semicolon, comma, no separator) which all have unique uses ([#373](https://github.com/rokucommunity/brighterscript/pull/373))



## [0.37.0](https://github.com/rokucommunity/brighterscript/compare/v0.36.0...v0.37.0) - 2021-03-18
### Added
 - support for `bs:disable` comments in xml files ([#363](https://github.com/rokucommunity/brighterscript/pull/363))



## [0.36.0](https://github.com/rokucommunity/brighterscript/compare/v0.35.0...v0.36.0) - 2021-03-15
### Added
 - class import code actions ([#365](https://github.com/rokucommunity/brighterscript/pull/365))
### Changed
 - append stack trace to every language server error ([#354)](https://github.com/rokucommunity/brighterscript/pull/354))
### Fixed
 - restrict function and class imports to .bs files only ([#365)](https://github.com/rokucommunity/brighterscript/pull/365))
 - language server crashes due to unsafe property access in callfunc expressions ([#360)](https://github.com/rokucommunity/brighterscript/pull/360))
 - crashes in signature help ([#358)](https://github.com/rokucommunity/brighterscript/pull/358))
 - template string transpile bug when two expressions were next to each other ([#361)](https://github.com/rokucommunity/brighterscript/pull/361))



## [0.35.0](https://github.com/rokucommunity/brighterscript/compare/v0.34.3...v0.35.0) - 2021-03-09
### Added
 - code actions for suggesting import statements in brighterscript files ([#347](https://github.com/rokucommunity/brighterscript/pull/347))
### Fixed
 - safer access to nullable callables and values during certain language server operations ([#328](https://github.com/rokucommunity/brighterscript/pull/328))



## [0.34.3](https://github.com/rokucommunity/brighterscript/compare/v0.34.2...v0.34.3) -2021-03-05
### Fixed
 - bug when transpiling bsc with custom function and parameter return types



## [0.34.2](https://github.com/rokucommunity/brighterscript/compare/v0.34.1...v0.34.2) - 2021-03-04
### Added
 - support for loading bslib without alias (i.e. `@rokucommunity/bslib`).
### Fixed
 - bslib npm alias bug crashing npm install on nodeJS < 12
 - infinite loop during transpile when copying bslib
 - bug where bslib.brs functions were not properly prefixed during transpile



## [0.34.1](https://github.com/rokucommunity/brighterscript/compare/v0.34.0...v0.34.1) - 2021-03-02
### Fixed
 - syntax parsing bugs within single-line if statements



## [0.34.0](https://github.com/rokucommunity/brighterscript/compare/v0.33.0...v0.34.0) - 2021-02-28
### Added
 - language server file path completions inside strings that start with `pkg:` or `libpkg:`



## [0.33.0](https://github.com/rokucommunity/brighterscript/compare/v0.32.3...v0.33.0) - 2021-02-27
### Added
 - support for ropm version of bslib.([#334](https://github.com/rokucommunity/brighterscript/pull/334))
### Fixed
 - parse crash when encountering immediately-invoked function expressions (IIFEs) ([#343](https://github.com/rokucommunity/brighterscript/pull/343))
 - error during language server completions when activated on the first token in the file ([#342](https://github.com/rokucommunity/brighterscript/pull/342))
 - refactored BrsFile.parseMode to be a property instead of a getter since there was no reason it needed to be a getter ([#341](https://github.com/rokucommunity/brighterscript/pull/341))



## [0.32.3](https://github.com/rokucommunity/brighterscript/compare/v0.32.2...v0.32.3) - 2021-02-25
### Fixed
 - fix significant performance bug in diagnostic filtering
 - tweaks to the logging system to make `logLevel=verbose` less chatty
 - null reference error in `Scope.getFileByRelativePath()`
 - fix class fields that were missing in getSymbol requests



## [0.31.2](https://github.com/rokucommunity/brighterscript/compare/v0.31.1...v0.31.2) - 2021-02-20
### Fixed
 - transpile bug when a template string starts with an expression ([#327](https://github.com/rokucommunity/brighterscript/pull/327))
### Changed
 - when generating type definition files, include the namespace for every extends statement ([#324](https://github.com/rokucommunity/brighterscript/pull/324))



## [0.31.1](https://github.com/rokucommunity/brighterscript/compare/v0.31.0...v0.31.1) - 2021-02-18
### Fixed
 - prevent exception in codeAction functionality when file cannot be found in a `Program`



## [0.31.0](https://github.com/rokucommunity/brighterscript/compare/v0.30.9...v0.31.0) - 2021-02-17
### Added
 - plugin and language server support for [codeActions](https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_codeAction)
 - codeAction to add missing `extends` attribute in components
### Fixed
 - wrong line numbers in certain sourcemaps generated during transpile
 - include annotations in emitted type definitions



## [0.30.9](https://github.com/rokucommunity/brighterscript/compare/v0.30.8...v0.30.9) - 2021-02-15
### Fixed
 - prevent excess validations when non-workspace files are changed  ([#315](https://github.com/rokucommunity/brighterscript/pull/315))
 - catch errors when getting signatures ([#285](https://github.com/rokucommunity/brighterscript/pull/285))
 - missing `Roku_Ads` function in global functions list. ([#312](https://github.com/rokucommunity/brighterscript/pull/312))



## [0.30.8](https://github.com/rokucommunity/brighterscript/compare/v0.30.7...v0.30.8) - 2021-02-12
### Changed
 - add additional logging in `Program.removeFile`
### Fixed
 - Fix watcher bug on windows devices
 - Don't mangle xml scripts during transpile



## [0.30.7](https://github.com/rokucommunity/brighterscript/compare/v0.30.6...v0.30.7) - 2021-02-11
### Fixed
 - bug in `getSignatureHelp` that wouldn't work for function calls with no leading whitespace. ([#307](https://github.com/rokucommunity/brighterscript/issues/307))



## [0.30.6](https://github.com/rokucommunity/brighterscript/compare/v0.30.5...v0.30.6) - 2021-02-07
### Fixed
 - bad transpile for nested class method super calls
 - SceneGraph node attributes being wrongly removed when modifying attributes



## [0.30.5](https://github.com/rokucommunity/brighterscript/compare/v0.30.4...v0.30.5) - 2021-02-03
### Added
 - syntax support for dim statements
 - completion and code navigation for labels
### Fixed
 - exception related to signature help when writing comments



## [0.30.4](https://github.com/rokucommunity/brighterscript/compare/v0.30.3...v0.30.4) - 2021-02-02
### Fixed
 - fixed crash during validation caused by a missing function body when parsing malformed code



## [0.30.3](https://github.com/rokucommunity/brighterscript/compare/v0.30.2...v0.30.3) - 2021-02-01
### Fixed
 - performance issue when transpiling larger projects, even when no brighterscript code was used



## [0.30.2](https://github.com/rokucommunity/brighterscript/compare/v0.30.1...v0.30.2) - 2021-01-31
### Fixed
 - xml parse error crashing validation ((#294)[https://github.com/rokucommunity/brighterscript/pull/294])
 - better handling for `createStringLiteral` ((#292)[https://github.com/rokucommunity/brighterscript/pull/292])



## [0.30.1](https://github.com/rokucommunity/brighterscript/compare/v0.30.0...v0.30.1) - 2021-01-29
### Fixed
 - bug that would crash while transpiling if a script tag didn't have a `type` attribute
 - XML transpile now honors the `sourceMap` option



## [0.30.0](https://github.com/rokucommunity/brighterscript/compare/v0.27.0...v0.28.0) - 2021-01-26
### Added
 - null coalescing operator (see [the docs](https://github.com/rokucommunity/brighterscript/blob/master/docs/null-coalescing-operator.md) for more information)
### Fixed
 - infinite loop when encountering annotations without an identifier above a class method ([#291](https://github.com/rokucommunity/brighterscript/pull/291))



## [0.29.0](https://github.com/rokucommunity/brighterscript/compare/v0.26.0...v0.27.0) - 2021-01-25
### Added
 - ternary operator (see [the docs](https://github.com/rokucommunity/brighterscript/blob/master/docs/ternary-operator.md) for more information)



## [0.28.2](https://github.com/rokucommunity/brighterscript/compare/v0.25.0...v0.26.0) - 2021-01-22
### Changed
 - config loading functions from `util.ts` are now run synchronously
### Fixed
 - missing variable from `for each` statement in completions for language server
 - bug when running the CLI that wouldn't properly read the `sourceMap` property from bsconfig.json



## [0.28.1](https://github.com/rokucommunity/brighterscript/compare/v0.24.2...v0.25.0) - 2021-01-19
### Changed
 - (For plugin authors) refactored many async methods into sync methods to simplify file creation/management. ([#278](https://github.com/rokucommunity/brighterscript/pull/278))
### Fixed
 - bug with transpiling classes that would not always get the correct superclass index. ([#279](https://github.com/rokucommunity/brighterscript/pull/279))
 - annotations are now block-restricted ([#274](https://github.com/rokucommunity/brighterscript/pull/274))



## [0.28.0](https://github.com/rokucommunity/brighterscript/compare/v0.27.0...v0.28.0) - 2021-01-16
### Added
 - annotation support for classes and class methods ([#270](https://github.com/rokucommunity/brighterscript/pull/270))
### fixed
 - bugs with go-to-definition and signature help for namespace functions, classes, and callfunc calls



## [0.27.0](https://github.com/rokucommunity/brighterscript/compare/v0.26.0...v0.27.0) - 2021-01-15
### Changed
 - plugin system changed to require a factory function instead of a singleton object ([#272](https://github.com/rokucommunity/brighterscript/pull/272))



## [0.26.0](https://github.com/rokucommunity/brighterscript/compare/v0.25.0...v0.26.0) - 2021-01-14
### Added
 - proper XML AST support
 - component interface validation
 - basic support for string-based diagnostic codes (from plugins)



## [0.25.0](https://github.com/rokucommunity/brighterscript/compare/v0.24.2...v0.25.0) - 2021-01-12
### Added
 - support for passing custom types as function parameters and return types ([#262](https://github.com/rokucommunity/brighterscript/issues/262))



## [0.24.2](https://github.com/rokucommunity/brighterscript/compare/v0.24.1...v0.24.2) - 2021-01-11
### Fixed
 - bug with transpiled child classes causing on-device stack overflows ([#267](https://github.com/rokucommunity/brighterscript/issues/267))



## [0.24.1](https://github.com/rokucommunity/brighterscript/compare/v0.24.0...v0.24.1) - 2021-01-09
### Changed
 - upgraded to [roku-deploy@3.2.4](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#324---2021-01-08)



## [0.24.0](https://github.com/rokucommunity/brighterscript/compare/v0.23.2...v0.24.0) - 2021-01-08
### Added
 - `sourceMap` option to enable/disable generating sourcemaps
### Changed
 - sourcemaps are disabled by default (previously they were enabled by default)



## [0.23.2](https://github.com/rokucommunity/brighterscript/compare/v0.23.1...v0.23.2) - 2020-01-06
### Fixed
 - `isLiteralInvalid` was causing infinite recursion.
 - lock `vscode-languageserver-protocol` package version to prevent issues with vscode not following semantic versioning.



## [0.23.1](https://github.com/rokucommunity/brighterscript/compare/v0.23.0...v0.23.1) - 2020-12-22
### Changed
 - renamed `Scope.getFiles()` to `Scope.getAllFiles()` and added a new function called `Scope.getOwnFiles()`
### Fixed
 - bug preventing `d.bs` loaded in parent files from showing up in child files. ([#252](https://github.com/rokucommunity/brighterscript/pull/252))



## [0.23.0](https://github.com/rokucommunity/brighterscript/compare/v0.22.1...v0.23.0) - 2020-12-18
### Changed
 - AST parser refactoring ([#244](https://github.com/rokucommunity/brighterscript/pull/244))
   - Make `ElseIf` into an `ElseIfStatement`
   - Removed `ElseIf` token in favor of separate `else` and `if` tokens
   - Refactored statement separators processing and cleaned error messages
   - Improved try-catch parsing
   - Improved label error handling
### Fixed
 - bug causing invalid diagnostics to be thrown on files with multiple dots in their names ([#257](https://github.com/rokucommunity/brighterscript/pull/257))
 - syntax error for [integer type declaration character](https://developer.roku.com/docs/references/brightscript/language/expressions-variables-types.md#type-declaration-characters) ([#254](https://github.com/rokucommunity/brighterscript/pull/254))
 - syntax error for floats with more than 5 decimal places that also have a trailing exponent ([#255](https://github.com/rokucommunity/brighterscript/pull/255))



## [0.22.1](https://github.com/rokucommunity/brighterscript/compare/v0.22.0...v0.22.1) - 2020-12-14
### Fixed
 - small bug introduced by vscode-languageserver causing crashes anytime negative range values are provided.



## [0.22.0](https://github.com/rokucommunity/brighterscript/compare/v0.21.0...v0.22.0) - 2020-11-23
### Added
 - `try/catch` and `throw` syntax support [#218](https://github.com/rokucommunity/brighterscript/issues/218)



## [0.21.0](https://github.com/rokucommunity/brighterscript/compare/v0.20.1...v0.21.0) - 2020-11-19
### Added
 - Catch when local variables and scope functions have the same name as a class. ([#246](https://github.com/rokucommunity/brighterscript/pull/246))
 - Catch when functions use keyword names ([#247](https://github.com/rokucommunity/brighterscript/pull/247))
### Changed
 - many internal changes:
   - remove all the `BrsType` objects leftover from the upstream `brs` project. Things like `ValueKind`, `BrsType`, the `Token.literal` property.
   - rename the brighterscript `BrsType` class to `BscType` for more distinction from the  now deleted from-upstream `BrsType`.
   - Modify the `createToken` function in `astUtils/creators.ts` to accept a range, or use a default negative range.
   - Use the `BscType` objects for basic parser type tracking (this replaces `ValueKind` and `BrsType` from upstream `brs` project).
   - minor AST property changes for `ForStatement` and `FunctionStatement`,
   - any `ValueKind` references in code have been replaced with an instance of a `BscType` (which will be the backbone of future type tracking)
   - Updated `ForStatement` to no longer include synthetic `step 1` tokens when those were not included in the source file.
   - remove eliminated `BrsType` items from `reflection.ts`.


## [0.20.1](https://github.com/rokucommunity/brighterscript/compare/v0.20.0...v0.20.1) - 2020-11-16
### Changed
 - load plugins relatively to the project ([#242](https://github.com/rokucommunity/brighterscript/pull/242))
 - modified reflection utilities so they are compatible with TS strict null checks ([#243](https://github.com/rokucommunity/brighterscript/pull/243))



## [0.20.0](https://github.com/rokucommunity/brighterscript/compare/v0.19.0...v0.20.0) - 2020-11-13
### Added
 - more language server features: onWorkspaceSymbol, onSignatureHelp, onDocumentSymbol, onReferences, improve onDefinition ([#191](https://github.com/rokucommunity/brighterscript/pull/191))



## [0.19.0](https://github.com/rokucommunity/brighterscript/compare/v0.18.2...v0.19.0) - 2020-11-04
### Changed
 - `emitDefinitions` now defaults to `false` (it previously defaulted to `true`)
### Fixed
 - don't transpile `d.bs` files (which would produce `d.brs` files with duplicate information in them)



## [0.18.2](https://github.com/rokucommunity/brighterscript/compare/v0.18.1...v0.18.2) - 2020-11-2
### Fixed
 - support on-demand parse for typedef-shadowed files ([#237](https://github.com/rokucommunity/brighterscript/pull/237))



## [0.18.1](https://github.com/rokucommunity/brighterscript/compare/v0.18.0...v0.18.1) - 2020-10-30
### Fixed
 - exclude bs1100 for typedef files (`Missing "super()" call in class constructor method.`)
 - fix some invalid class field types in typedef files
 - include `override` keyword in class methods in typedef files



## [0.18.0](https://github.com/rokucommunity/brighterscript/compare/v0.17.0...v0.18.0) - 2020-10-30
### Added
 - support for consuming and producing type definitions. ([188](https://github.com/rokucommunity/brighterscript/pull/188))



## [0.17.0](https://github.com/rokucommunity/brighterscript/compare/v0.16.12...v0.17.0) - 2020-10-27
### Added
 - Annotation syntax and AST support ([#234](https://github.com/rokucommunity/brighterscript/pull/234))



## [0.16.12](https://github.com/rokucommunity/brighterscript/compare/v0.16.11...v0.16.12) - 2020-10-21
### Fixed
 - parser bug when there was a trailing colon after `for` or `while` loop statements ([#230](https://github.com/rokucommunity/brighterscript/pull/230))



## [0.16.11](https://github.com/rokucommunity/brighterscript/compare/v0.16.10...v0.16.11 - 2020-10-20
### Fixed
 - bug when using single quotes in an xml script tag
### Changed
 - removed bs1106 (.bs file script tags must use the `type="brighterscript"`) diagnostic because it's unnecessary.



## [0.16.10](https://github.com/rokucommunity/brighterscript/compare/v0.16.9...v0.16.10) - 2020-10-20
### Fixed
 - prevent crash when a callable has the same name as a javascript reserved name ([#226](https://github.com/rokucommunity/brighterscript/pull/226))
 - prevent crash when `import` statement is malformed ([#224](https://github.com/rokucommunity/brighterscript/pull/224))



## [0.16.9](https://github.com/rokucommunity/brighterscript/compare/v0.16.8...v0.16.9) - 2020-10-18
### Fixed
 - reduce language server throttle for validation and parsing now that those have improved performance.
 - massively improve validation performance by refactoring `getFileByPkgPath`
 - micro-optimization of hot parser functions
 - change codebase to use `import type` many places, which reduces the number of files imported at runtime



## [0.16.8](https://github.com/rokucommunity/brighterscript/compare/v0.16.7...v0.16.8) - 2020-10-15
### Fixed
 - bug when printing diagnostics that would crash if the contents were missing (like for in-memory-only files injected by plugins) ([#217](https://github.com/rokucommunity/brighterscript/pull/217))
 - Drop expensive AST walking for collecting property names and instead collect them as part of parsing



## [0.16.7](https://github.com/rokucommunity/brighterscript/compare/v0.16.6...v0.16.7) - 2020-10-13
### Fixed
 - bug when finding `bsconfig.json` that would use the wrong cwd in multi-workspace language server situations.
 - bug when transpiling in-memory-only files. ([#212](https://github.com/rokucommunity/brighterscript/pull/212))



## [0.16.6](https://github.com/rokucommunity/brighterscript/compare/v0.16.5...v0.16.6) - 2020-10-13
### Fixed
 - quirk in the GitHub actions workflow that didn't publish the correct code.



## [0.16.5](https://github.com/rokucommunity/brighterscript/compare/v0.16.4...v0.16.5) - 2020-10-13
### Fixed
 - performance issue during the parse phase. We now defer certain collections until needed. ([#210](https://github.com/rokucommunity/brighterscript/pull/210))



## [0.16.4](https://github.com/rokucommunity/brighterscript/compare/v0.16.3...v0.16.4) - 2020-10-12
### Changed
 - LanguageServer now sends a _diff_ of diagnostics for files, instead of the entire project's diagnostics every time. ([#204](https://github.com/rokucommunity/brighterscript/pull/204))
### Fixed
 - transpile bug for namespaced class constructors that wouldn't properly prepend the namespace in some situations. ([#208](https://github.com/rokucommunity/brighterscript/pull/208))
 - bug in class validation that was causing bogus diagnostics during class construction in namespaces.([#203](https://github.com/rokucommunity/brighterscript/issues/203))



## [0.16.3](https://github.com/rokucommunity/brighterscript/compare/v0.16.2...v0.16.3) - 2020-10-11
### Changed
 - Add generic type parameter for `Program` add functions.
 - Export `BscType` type to simplify `BrsFile | XmlFile` usage everywhere.
### Fixed
 - Prevent bogus diagnostic on all callfunc operations ([#205](https://github.com/rokucommunity/brighterscript/issues/205))



## [0.16.2](https://github.com/rokucommunity/brighterscript/compare/v0.16.1...v0.16.2) - 2020-10-09
### Fixed
 - critical bug in diagnostic printing that would crash the program if a diagnostic was missing a valid range.



## [0.16.1](https://github.com/rokucommunity/brighterscript/compare/v0.16.0...v0.16.1) - 2020-10-03
### Changed
 - rename `isEscapedCharCodeLiteral` to `isEscapedCharCodeLiteralExpression` to match other expression class names
 - rename `FunctionParameter` to `FunctionParameterExpression` to match other expression class names
 - convert `AAMemberExpression` interface into an expression class.
 - convert `isBrsFile` and `isXmlFile` to check for constructor file name rather than file extension.
### Fixed
 - bugs with plugin interoperability with BrighterScript when using `instanceof`. All internal BrighterScript logic now uses the `is` functions from `astutils/reflection`, and plugin authors should do the same.



## [0.16.0](https://github.com/rokucommunity/brighterscript/compare/v0.15.2...v0.16.0) - 2020-10-02
### Added
 - `Expression.walk` and `Statement.walk` functions which provide shallow or deep walking of the AST
 - Many `ast` reflection methods to be used instead of `instanceof`.
 - plugin system (still in alpha) support for re-scanning the AST after modifing the AST by calling `invalidateReferences()`
 - every token has a `leadingWhitespace` property now that contains leading whitespace. Retrieving whitespace tokens from the `Lexer` will be removed in a future update in favor of this appraoch
### Changed
 - all AST nodes now extend either `Statement` or `Expression` instead of simply implementing their interfaces.
### Removed
 - several AST walking functions from `astUtils/` in favor of direct node walking



## [0.15.2](https://github.com/rokucommunity/brighterscript/compare/v0.15.1...v0.15.2) - 2020-10-01
### Fixed
 - Bug in component validation that would throw errors if component name was undefined (generally due to an XML parse error). ([#194](https://github.com/rokucommunity/brighterscript/pull/194))



## [0.15.1](https://github.com/rokucommunity/brighterscript/compare/v0.15.0...v0.15.1) - 2020-09-30
### Fixed
 - improved performance in the lexer and parser
 - potential for accidentally changing `cwd` during bsconfig resolving



## [0.15.0](https://github.com/rokucommunity/brighterscript/compare/v0.14.0...v0.15.0) - 2020-09-18
### Added
 - plugin API to allow visibility into the various compiler phases. This is currently in alpha. ([#170](https://github.com/rokucommunity/brighterscript/pull/170))



## [0.14.0](https://github.com/rokucommunity/brighterscript/compare/v0.13.2...v0.14.0) - 2020-09-04
### Changed
 - Add error diagnostic BS1115 which flags duplicate component names [#186](https://github.com/rokucommunity/brighterscript/pull/186)



## [0.13.2](https://github.com/rokucommunity/brighterscript/compare/v0.13.1...v0.13.2) - 2020-08-31
### Changed
 - Upgraded BS1104 to error (previously a warning) and refined the messaging.



## [0.13.1](https://github.com/rokucommunity/brighterscript/compare/v0.13.0...v0.13.1) - 2020-08-14
### Changed
 - upgraded to [roku-deploy@3.2.3](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#323---2020-08-14)
 - throw exception when copying to staging folder and `rootDir` does not exist in the file system
 - throw exception when zipping package and `${stagingFolder}/manifest` does not exist in the file system



## [0.13.0](https://github.com/rokucommunity/brighterscript/compare/v0.12.4...v0.13.0) - 2020-08-10
### Added
 - ability to mark the `extends` and `project` options in `bsconfig.json`, API and CLI as optional.



## [0.12.4](https://github.com/rokucommunity/brighterscript/compare/v0.12.3...v0.12.4) - 2020-08-06
### Fixed
 - bug in cli that wouldn't properly read bsconfig values. [#167](https://github.com/rokucommunity/brighterscript/issues/167)
 - bug in cli that doesn't use `retain-staging-folder` argument properly. [#168](https://github.com/rokucommunity/brighterscript/issues/168)



## [0.12.3](https://github.com/rokucommunity/brighterscript/compare/v0.12.2...v0.12.3) - 2020-08-03
### Fixed
 - bug in the language server that would provide stale completions due to the file throttling introduced in v0.11.2. Now the language server will wait for the throttled parsing to complete before serving completion results.



## [0.12.2](https://github.com/rokucommunity/brighterscript/compare/v0.12.1...v0.12.2) - 2020-07-16
### Added
 - Expose `ProgramBuilder.transpile()` method to make it easier for tools to transpile programmatically. [#154](https://github.com/rokucommunity/brighterscript/issues/154)
### Fixed
 - bug on Windows when transpiling BrighterScript import statements into xml script tags that would use the wrong path separator sometimes.



## [0.12.1](https://github.com/rokucommunity/brighterscript/compare/v0.12.0...v0.12.1) - 2020-07-15
### Changed
 - upgraded to [roku-deploy@3.2.2](https://github.com/rokucommunity/roku-deploy/blob/master/CHANGELOG.md#322---2020-07-14)
### Fixed
 - bug in roku-deploy when when loading `stagingFolderPath` from `rokudeploy.json` or `bsconfig.json` that would crash the language server



## [0.12.0](https://github.com/rokucommunity/brighterscript/compare/v0.11.2...v0.12.0) - 2020-07-09
### Added
 - `diagnosticLevel` option to limit/control the noise in the console diagnostics
### Changed
 - Move away from `command-line-args` in favor of `yargs` for CLI support
### Fixed
 - Throttle LanguageServer validation to prevent running too many validations in a row.
 - Bug in CLI preventing ability to provide false values to certain flags
 - Do not print `info` and `hint` diagnostics from the CLI by default.



## [0.11.2](https://github.com/rokucommunity/brighterscript/compare/v0.11.1...v0.11.2) - 2020-07-09
### Changed
 - add 350ms debounce in LanguageServer `onDidChangeWatchedFiles` to increase performance by reducing the number of times a file is parsed and validated.
### Fixed
 - bug in the log output that wasn't casting string log levels into their numeric enum versions, causing messages to be lost at certain log levels.
 - load manifest file exactly one time per program rather than every time a file gets parsed.
 - bug in `info` logging that wasn't showing the proper parse times for files on first run.



## [0.11.1](https://github.com/rokucommunity/brighterscript/compare/v0.11.0...v0.11.1) - 2020-07-07
### Added
 - diagnostic for unknown file reference in import statements ([#139](https://github.com/rokucommunity/brighterscript/pull/139))
### Changed
 - upgraded to [roku-deploy@3.2.1](https://www.npmjs.com/package/roku-deploy/v/3.2.1)
 - upgraded to jsonc-parser@2.3.0
 - add begin and end template string literal tokens so we can better format and understand the code downstream. ([#138](https://github.com/rokucommunity/brighterscript/pull/138))
### Fixed
 - roku-deploy bug that would fail to load `bsconfig.json` files with comments in them.
 - bug in parser that would fail to find function calls in certain situations, killing the rest of the parse.



## [0.11.0](https://github.com/rokucommunity/brighterscript/compare/v0.10.10...v0.11.0) - 2020-07-06
### Added
 - [Source literals feature](https://github.com/rokucommunity/brighterscript/blob/master/docs/source-literals.md) which adds new literals such as `SOURCE_FILE_PATH`, `SOURCE_LINE_NUM`, `FUNCTION_NAME`, and more. ([#13](https://github.com/rokucommunity/brighterscript/issues/13))
 - `sourceRoot` config option to fix sourcemap paths for projects that use a temporary staging folder before calling the BrighterScript compiler. ([#134](https://github.com/rokucommunity/brighterscript/commit/e5b73ca37016d5015a389257fb259573c4721e7a))
 - [Template string feature](https://github.com/rokucommunity/brighterscript/blob/master/docs/template-strings.md) which brings template string support to BrighterScript. ([#98](https://github.com/rokucommunity/brighterscript/issues/98))
### Fixed
 - Do not show BS1010 diagnostic `hint`s for the same script imported for parent and child. ([#113](https://github.com/rokucommunity/brighterscript/issues/113))



## [0.10.11](https://github.com/rokucommunity/brighterscript/compare/v0.10.10...v0.10.11) - 2020-07-05
 - Fix bug that would fail to copy files to staging without explicitly specifying `stagingFolderpath`. [#129](https://github.com/rokucommunity/brighterscript/issues/129)



## [0.10.10](https://github.com/rokucommunity/brighterscript/compare/v0.10.9...v0.10.10) - 2020-06-12
### Fixed
 - include the missing `bslib.brs` file in the npm package which was causing errors during transpile.



## [0.10.9](https://github.com/rokucommunity/brighterscript/compare/v0.10.8...v0.10.9) 2020-06-12
### Added
 - bslib.brs gets copied to `pkg:/source` and added as an import to every component on transpile.
 - several timing logs under the `"info"` log level.
### Changed
 - pipe the language server output to the extension's log window
### Fixed
 - bug with global `val` function signature that did not support the second parameter ([#110](https://github.com/rokucommunity/vscode-brightscript-language/issues/110))
 - bug with global 'StrI' function signature that did not support the second parameter.



## [0.10.8](https://github.com/rokucommunity/brighterscript/compare/v0.10.7...v0.10.8) - 2020-06-09
### Fixed
 - Allow leading spcaes for `bs:disable-line` and `bs:disable-next-line` comments ([#108](https://github.com/rokucommunity/brighterscript/pull/108))



## [0.10.7](https://github.com/rokucommunity/brighterscript/compare/v0.10.6...v0.10.7) - 2020-06-08
### Fixed
 - bug in cli that was always returning a nonzero error code



## [0.10.6](https://github.com/rokucommunity/brighterscript/compare/v0.10.5...v0.10.6) - 2020-06-05
### Fixed
 - incorrect definition for global `Left()` function. ([#100](https://github.com/rokucommunity/brighterscript/issues/100))
 - missing definition for global `Tab()` and `Pos()` functions ([#101](https://github.com/rokucommunity/brighterscript/issues/101))



## [0.10.5](https://github.com/rokucommunity/brighterscript/compare/v0.10.4...v0.10.5) - 2020-06-04
### Changed
 - added better logging for certain critical language server crashes



## [0.10.4](https://github.com/rokucommunity/brighterscript/compare/v0.10.3...v0.10.4) - 2020-05-28
### Fixed
 - bug where assigning a namespaced function to a variable wasn't properly transpiling the dots to underscores (fixes [#91](https://github.com/rokucommunity/brighterscript/issues/91))
 - flag parameter with same name as namespace
 - flag variable with same name as namespace
 - `CreateObject("roRegex")` with third parameter caused compile error ([#95](https://github.com/rokucommunity/brighterscript/issues/95))



## [0.10.3](https://github.com/rokucommunity/brighterscript/compare/v0.10.2...v0.10.3) - 2020-05-27
### Changed
 - tokenizing a string with no closing quote will now include all of the text until the end of the line.
 - language server `TranspileFile` command now waits until the program is finished building before trying to transpile.



## [0.10.2](https://github.com/rokucommunity/brighterscript/compare/v0.10.1...v0.10.2) - 2020-05-23
### Added
 - language server command `TranspileFile` which will return the transpiled contents of the requested file.
### Fixed
 - quotemarks in string literals were not being properly escaped during transpile ([#89](https://github.com/rokucommunity/brighterscript/issues/89))
 - Bug that was only validating calls at top level. Now calls found anywhere in a function are validated



## [0.10.1](https://github.com/rokucommunity/brighterscript/compare/v0.10.0...v0.10.1) - 2020-05-22
### Fixed
 - transpile bug for compound assignment statements (such as `+=`, `-=`) ([#87](https://github.com/rokucommunity/brighterscript/issues/87))
 - transpile bug that was inserting function parameter types before default values ([#88](https://github.com/rokucommunity/brighterscript/issues/88))
 - export BsConfig interface from index.ts to make it easier for NodeJS importing.



## [0.10.0](https://github.com/rokucommunity/brighterscript/compare/v0.9.8...v0.10.0) - 2020-05-19
### Added
 - new callfunc operator.



## [0.9.8](https://github.com/rokucommunity/brighterscript/compare/v0.9.7...v0.9.8) - 2020-05-16
### Changed
 - the inner event system handling file changes. This should fix several race conditions causing false negatives during CLI runs.
### Fixed
 - some bugs related to import statements not being properly traced.



## [0.9.7](https://github.com/rokucommunity/brighterscript/compare/v0.9.6...v0.9.7) - 2020-05-14
### Changed
 - TypeScript target to "ES2017" which provides a significant performance boost in lexer (~30%) and parser (~175%)
### Fixed
 - the binary name got accidentally renamed to `bsc2` in release 0.9.6. This release fixes that issue.
 - removed some debug logs that were showing up when not using logLevel=debug
 - false negative diagnostic when using the `new` keyword as a local variable [#79](https://github.com/rokucommunity/brighterscript/issues/79)



## [0.9.6](https://github.com/rokucommunity/brighterscript/compare/v0.9.5...v0.9.6) - 2020-05-11
### Added
 - `logLevel` option from the bsconfig.json and command prompt that allows specifying how much detain the logging should contain.
 - additional messages during cli run
### Changed
 - don't terminate bsc on warning diagnostics
 - removed extraneous log statements from the util module
### Fixed
 - fixed bugs when printing diagnostics to the console that wouldn't show the proper squiggly line location.



## [0.9.5](https://github.com/rokucommunity/brighterscript/compare/v0.9.4...v0.9.5) - 2020-05-06
### Added
 - new config option called `showDiagnosticsInConsole` which disables printing diagnostics to the console
### Fixed
 - bug in lexer that was capturing the carriage return character (`\n`) at the end of comment statements
 - bug in transpiler that wouldn't include a newline after the final comment statement
 - bug in LanguageServer that was printing diagnostics to the console when it shouldn't be.



## [0.9.4](https://github.com/rokucommunity/brighterscript/compare/v0.9.3...v0.9.4) - 2020-05-05
### Added
 - diagnostic for detecting unnecessary script imports when `autoImportComponentScript` is enabled
### Changed
 - filter duplicate dignostics from multiple projects. ([#75](https://github.com/rokucommunity/brighterscript/issues/75))
### Fixed
 - bug that was flagging namespaced functions with the same name as a stdlib function.
 - bug that was not properly transpiling brighterscript script tags in xml components.
 - several performance issues introduced in v0.8.2.
 - Replace `type="text/brighterscript"` with `type="text/brightscript"` in xml script imports during transpile. ([#73](https://github.com/rokucommunity/brighterscript/issues/73))



## [0.9.3](https://github.com/rokucommunity/brighterscript/compare/v0.9.2...v0.9.3) - 2020-05-04
### Changed
 - do not show BRS1013 for standalone files ([#72](https://github.com/rokucommunity/brighterscript/issues/72))
 - BS1011 (same name as global function) is no longer shown for local variables that are not of type `function` ([#70](https://github.com/rokucommunity/brighterscript/issues/70))
### Fixed
 - issue that prevented certain keywords from being used as function parameter names ([#69](https://github.com/rokucommunity/brighterscript/issues/69))



## [0.9.2](https://github.com/rokucommunity/brighterscript/compare/v0.9.1...v0.9.2) - 2020-05-02
### Changed
 - intellisense anywhere other than next to a dot now includes keywords (#67)

### Fixed
 - bug in the lexer that was not treating `constructor` as an identifier (#66)
 - bug when printing diagnostics that would sometimes fail to find the line in question (#68)
 - bug in scopes that were setting isValidated=false at the end of the `validate()` call instead of true



## [0.9.1](https://github.com/rokucommunity/brighterscript/compare/v0.9.0...v0.9.1) - 2020-05-01
### Fixed
 - bug with upper-case two-word conditional compile tokens (`#ELSE IF` and `#END IF`) (#63)



## [0.9.0](https://github.com/rokucommunity/brighterscript/compare/v0.8.2...v0.9.0) - 2020-05-01
### Added
 - new compile flag `autoImportComponentScript` which will automatically import a script for a component with the same name if it exists.



## [0.8.2](https://github.com/rokucommunity/brighterscript/compare/v0.8.1...v0.8.2) - 2020-04-29
### Fixed
 - bugs in namespace transpilation
 - bugs in class transpilation
 - transpiled examples for namespace and class docs
 - bugs in class property initialization



## [0.8.1](https://github.com/rokucommunity/brighterscript/compare/v0.8.0...v0.8.1) - 2020-04-27
### Fixed
 - Bug where class property initializers would cause parse error
 - better parse recovery for incomplete class members



## [0.8.0](https://github.com/rokucommunity/brighterscript/compare/v0.7.2...v0.8.0) - 2020-04-26
### Added
 - new `import` syntax for BrighterScript projects.
 - experimental transpile support for xml files (converts `.bs` extensions to `.brs`, auto-appends the `import` statments to each xml component)
### Changed
 - upgraded to vscode-languageserver@6.1.1


## [0.7.2](https://github.com/rokucommunity/brighterscript/compare/v0.7.1...v0.7.2) - 2020-04-24
### Fixed
 - runtime bug in the language server when validating incomplete class statements



## [0.7.1](https://github.com/rokucommunity/brighterscript/compare/v0.7.0...v0.7.1) - 2020-04-23
### Fixed
 - dependency issue: `glob` is required but was not listed as a dependency



## [0.7.0](https://github.com/rokucommunity/brighterscript/compare/v0.6.0...v0.7.0) - 2020-04-23
### Added
 - basic support for namespaces
 - experimental parser support for import statements (no transpile yet)
### Changed
 - parser produces TokenKind.Library now instead of an identifier token for library.



## [0.6.0](https://github.com/rokucommunity/brighterscript/compare/v0.5.4...v0.6.0) 2020-04-15
### Added
 - ability to filter out diagnostics by using the `diagnosticFilters` option in bsconfig
### Changed
 - deprecated the `ignoreErrorCodes` in favor of `diagnosticFilters`
### Fixed
 - Bug in the language server that wasn't reloading the project when changing the `bsconfig.json`



## [0.5.4](https://github.com/rokucommunity/brighterscript/compare/v0.5.3...v0.5.4) 2020-04-13
### Fixed
 - Syntax bug that wasn't allowing period before indexed get expression (example: `prop.["key"]`) (#58)
 - Syntax bug preventing comments from being used in various locations within a class



## [0.5.3](https://github.com/rokucommunity/brighterscript/compare/v0.5.2...v0.5.3) - 2020-04-12
### Added
 - syntax support for the xml attribute operator (`node@someAttr`) (#34)
 - syntax support for bitshift operators (`<<` and `>>`) (#50)
 - several extra validation checks for class statements
### Fixed
 - syntax bug that was showing parse errors for known global method names (such as `string()`) (#49)



## [0.5.2](https://github.com/rokucommunity/brighterscript/compare/v0.5.1...v0.5.2) - 2020-04-11
### Changed
 - downgrade diagnostic issue 1007 from an error to a warning, and updated the message to "Component is mising "extends" attribute and will automatically extend "Group" by default" (#53)
### Fixed
 - Prevent xml files found outside of the `pkg:/components` folder from being parsed and validated. (#51)
 - allow empty `elseif` and `else` blocks. (#48)



## [0.5.1](https://github.com/rokucommunity/brighterscript/compare/v0.5.0...v0.5.1) - 2020-04-10
### Changed
 - upgraded to [roku-deploy@3.0.2](https://www.npmjs.com/package/roku-debug/v/0.3.4) which fixed a file copy bug in subdirectories of symlinked folders (fixes #41)



## [0.5.0](https://github.com/rokucommunity/brighterscript/compare/v0.4.4...v0.5.0) - 2020-04-10
### Added
 - several new diagnostics for conditional compiles. Some of them allow the parser to recover and continue.
 - experimental class transpile support. There is still no intellisense for classes yet though.
### Changed
   - All errors are now stored as vscode-languageserver `Diagnostic` objects instead of a custom error structure.
   - Token, AST node, and diagnostic locations are now stored as `Range` objects, which use zero-based lines instead of the previous one-based line numbers.
   - All parser diagnostics have been broken out into their own error codes, removing the use of error code 1000 for a generic catch-all. That code still exists and will hold runtime errors from the parser.
### Fixed
 - bug in parser that was flagging the new class keywords (`new`, `class`, `public`, `protected`, `private`, `override`) as parse errors. These are now allowed as both local variables and property names.



## [0.4.4](https://github.com/rokucommunity/brighterscript/compare/v0.4.3...v0.4.4) - 2020-04-04
### Fixed
 - bug in the ProgramBuilder that would terminate the program on first run if an error diagnostic was found, even when in watch mode.



## [0.4.3](https://github.com/rokucommunity/brighterscript/compare/v0.4.2...v0.4.3) - 2020-04-03
### Changed
 - the `bsc` cli now emits a nonzero return code whenever parse errors are encountered, which allows tools to detect compile-time errors. (#43)



## [0.4.2](https://github.com/rokucommunity/brighterscript/compare/v0.4.1...v0.4.2) - 2020-04-01
### Changed
 - upgraded to [roku-deploy@3.0.0](https://www.npmjs.com/package/roku-deploy/v/3.0.0)



## [0.4.1](https://github.com/rokucommunity/brighterscript/compare/v0.4.0...v0.4.1) - 2020-01-11
### Changed
 - upgraded to [roku-deploy@3.0.0-beta.7](https://www.npmjs.com/package/roku-deploy/v/3.0.0-beta.7) which fixed a critical bug during pkg creation.



## [0.4.0](https://github.com/rokucommunity/brighterscript/compare/v0.3.1...v0.4.0) - 2020-01-07
### Added
 - ability to specify the pkgPath of a file when adding to the project.
### Changed
 - upgraded to [roku-deploy@3.0.0-beta.6](https://www.npmjs.com/package/roku-deploy/v/3.0.0-beta.6)
### Fixed
 - bug that was showing duplicate function warnings when multiple files target the same `pkgPath`. Now roku-deploy will only keep the last referenced file for each `pkgPath`
 - reduced memory consumtion and FS calls during file watcher events
 - issue in getFileByPkgPath related to path separator mismatches
 - bugs related to standalone workspaces causing issues for other workspaces.



## [0.3.1](https://github.com/rokucommunity/brighterscript/compare/v0.3.0...v0.3.1) - 2019-11-08
### Fixed
 - language server bug that was showing error messages in certain startup race conditions.
 - error during hover caused by race condition during file re-parse.



## [0.3.0](https://github.com/rokucommunity/brighterscript/compare/v0.2.2...v0.3.0) - 2019-10-03
### Added
 - support for parsing opened files not included in any project.
### Fixed
 - parser bug that was preventing comments as their own lines inside associative array literals. ([#29](https://github.com/rokucommunity/brighterscript/issues/28))



## [0.2.2](https://github.com/rokucommunity/brighterscript/compare/v0.2.1...v0.2.2) - 2019-09-27
### Fixed
 - bug in language server where the server would crash when sending a diagnostic too early. Now the server waits for the program to load before sending diagnostics.



## [0.2.1](https://github.com/rokucommunity/brighterscript/compare/v0.2.0...v0.2.1) - 2019-09-24
### Changed
 - the text for diagnostic 1010 to say "override" instead of "shadows"
### Fixed
 - crash when parsing the workspace path to read the config on startup.
 - auto complete options not always returning results when it should.
 - windows bug relating to the drive letter being different, and so then not matching the file list.
 - many bugs related to mismatched file path comparisons.



## [0.2.0](https://github.com/rokucommunity/brighterscript/compare/v0.1.0...v0.2.0) - 2019-09-20
### Added
 - bsconfig.json validation
 - slightly smarter intellisense that knows when you're trying to complete an object property.
 - diagnostic for deprecated brsconfig.json
 - basic transpile support including sourcemaps. Most lines also support transpiling including comments, but there may still be bugs
 - parser now includes all comments as tokens in the AST.

### Fixed
 - bugs in the languageserver intellisense
 - parser bug that would fail when a line ended with a period
 - prevent intellisense when typing inside a comment
 - Bug during file creation that wouldn't recognize the file


## [0.1.0](https://github.com/rokucommunity/brighterscript/compare/v0.1.0...v0.1.0) - 2019-08-10
### Changed
 - Cloned from [brightscript-language](https://github.com/rokucommunity/brightscript-language)
