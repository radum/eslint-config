# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

# [4.0.0](https://github.com/radum/eslint-config/compare/v3.0.0...v4.0.0) (2020-12-16)


### Bug Fixes

* fixed CD GH token ([6763bea](https://github.com/radum/eslint-config/commit/6763bea5dee35076f753634876efc6db9fd91bbf))


### Features

* add semantic release ([d3ed33a](https://github.com/radum/eslint-config/commit/d3ed33a85fc37af2b949f13520fcafc45f847dd9))
* add semantic release ([271a116](https://github.com/radum/eslint-config/commit/271a116100cb21ab82d225f4b45244fe05af7ffc))
* new semantic release pipeline ([10e4212](https://github.com/radum/eslint-config/commit/10e4212f5a02eafc33e0790a83f77c0a322153bf))


### BREAKING CHANGES

* Fixing the GH token will ensure we publish to GH also.
* Using semantic-release to publish.

# Changelog [OLD PRE semantic-release]

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.x.x] NOT PUBLISHED

- update github workflows  8816a3e
- update minimum required node version to 12  40ddf5c
- bump deps  7270f75
- Create SECURITY.md  8828c53

## [3.0.0]

- Remove support for node 10 and 13, bump deps, update rules  58d63cb
- Merge pull request #62 from radum/dependabot/npm_and_yarn/eslint-plugin-unicorn-19.0.1  0f91a2b
- Merge pull request #69 from radum/dependabot/npm_and_yarn/eslint-plugin-jsdoc-25.4.2  a6309ea
- Bump eslint-plugin-jsdoc from 24.0.6 to 25.4.2  2c5994b
- Merge pull request #65 from radum/dependabot/npm_and_yarn/eslint-plugin-jsdoc-24.0.6  8e2870c
- Bump eslint-plugin-jsdoc from 22.2.0 to 24.0.6  f7d92c1
- Bump eslint-plugin-unicorn from 17.2.0 to 19.0.1  d6b3561
- Update push.yml  f05eaf8
- Merge branch &#39;master&#39; of github.com:radum/eslint-config  96bcff2
- Remove renovate.json as it was deprecated  1351fa0
- Merge pull request #56 from radum/renovate/radum-eslint-config-2.x  5743805
- fix(deps): update dependency @radum/eslint-config to v2.2.1  d94ce30

https://github.com/radum/eslint-config/compare/v2.2.1...v3.0.0

## [2.2.0]

- bump deps  d2420f4
- update eslint-config-canonical for compare  b7a6ef8
- bump np version  3673c4a
- bump eslint-plugin-jsdoc  4a588fb
- bump eslint-plugin-jsdoc  f1a4ddd
- update eslint-config-canonical for compare  23e8074
- Update dependency np to v6  7925119
- Update dependency ava to v3  1ed9ceb
- Update dependency eslint-plugin-ava to v10  8f27b3d

https://github.com/radum/eslint-config/compare/v2.1.0...v2.2.0

## [2.1.0]

- minimum node version 10  433d96f
- remove node 8 from travis  d10984e
- chore: bump compare version  f47bb68
- update changelog  6e46e3f

https://github.com/radum/eslint-config/compare/v2.0.0...v2.1.0

## [2.0.0]

- chore: bump deps, shrink the size of the module  fae35b2
- Update compare chart  b726234
- Update changelog  6d28568

https://github.com/radum/eslint-config/compare/v1.3.1...v2.0.0

## [1.3.1]

- chore: bump deps  2bee460
- chore: bump compare deps  8cb885c

https://github.com/radum/eslint-config/compare/v1.3.0...v1.3.1

## [1.3.0]

- update tests to cater for new rules updates  3b2477f
- chore: bump depds, update jsdoc rules  269363c
- Update changeloc and compare data  824f8f1

https://github.com/radum/eslint-config/compare/v1.2.0...v1.3.0

## [1.2.0]

- Update dependencis and add new unicorn rules  a83b89b
- Update CHANGELOG.md  9b940ce
- converted main.workflow to Actions V2 yml files  3f55a47
- Update compare data with kentcdodds config  5f7cd5e
- Update compare data  9c115b4

https://github.com/radum/eslint-config/compare/v1.1.0...v1.2.0

## [1.1.0]

- Update dependencis and add new ava rules  a3f67c4

https://github.com/radum/eslint-config/compare/v1.0.0...v1.1.0

## [1.0.0]

- Enable unicorn plugin e606717
- Update dependency eslint-plugin-unicorn to v10 af05e85

https://github.com/radum/eslint-config/compare/v0.5.0...v1.0.0

## [0.5.0]

- Update changelog f3c5460
- Fix compare code for Eslint 6 compatibility c9e6bb9
- Update node config fixing #11, fix linting issues a83f8cb

https://github.com/radum/eslint-config/compare/v0.4.2...v0.5.0

## [0.4.2]

- chore: bump jsdoc and better tests  e2dc5c6
- chore: update changelog  658bae5

https://github.com/radum/eslint-config/compare/v0.4.1...v0.4.2

## [0.4.1]

- I did it again, fixing npm run test on Win again :sad:  69c5d8c
- chore: update changelog  31920fd

https://github.com/radum/eslint-config/compare/v0.4.0...v0.4.1

## [0.4.0]

- Update testing from Jest to AVA, this fixes an issue with Windows when runing `npm run test`  d17af0a
- Add Github action  35f9f16
- Update changelog  fbda11b

https://github.com/radum/eslint-config/compare/v0.3.0...v0.4.0

## [0.3.0]

- Merge pull request #5 from radum/renovate/eslint-plugin-jsdoc-10.x  0e7642a
- Update dependency eslint-plugin-jsdoc to v10  0530e36
- Merge pull request #3 from radum/renovate/eslint-6.x  78d438e
- Merge pull request #4 from radum/renovate/eslint-plugin-jsdoc-9.x  51ff9c9
- Update dependency eslint-plugin-jsdoc to v9  b431248
- Update changelog  9fb7c4d
- Update dependency eslint to v6  e8d87a0

https://github.com/radum/eslint-config/compare/v0.2.0...v0.3.0

## [0.2.0]

- Update rules, fix rules loading for paths  450c96a
- Update compare docs and script  3d0df47
- Update changelog with v0.1.1  bcd4b78
- Merge pull request #1 from radum/renovate/eslint-config-canonical-17.x  2fb69ec
- Merge pull request #2 from radum/renovate/eslint-plugin-node-9.x  9362adc
- Update dependency eslint-plugin-node to v9  bca88ce
- Update dependency eslint-config-canonical to v17  c0b1a19

https://github.com/radum/eslint-config/compare/v0.1.1...v0.2.0

## [0.1.1]

- Fix compare eslint error  b6fa466

https://github.com/radum/eslint-config/compare/v0.1.0...v0.1.1


## [0.1.0]

- Initial release
