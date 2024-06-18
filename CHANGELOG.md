# cit-context ChangeLog

## 2.0.1 - 2024-06-18

### Fixed
- Change context `@protected` value to boolean.

## 2.0.0 - 2021-03-24

### Changed
- **BREAKING**: Changed CBOR-LD codec value from `0x8000` to `0x15` to match 
  the [Registry](https://digitalbazaar.github.io/cbor-ld-spec/#term-codec-registry). Also renamed
  the constant to `CBORLD_CODEC_VALUE`, to match other context repos.
- **BREAKING**: Renamed exported url constant from `CIT_CONTEXT_URL` to `CONTEXT_URL`, to match
  other repos.
- **BREAKING**: Remove `Ed25519Signature2020` definition from the context (it has its own context
  now).

## 1.0.2 - 2020-11-13

### Changed
- Fix `concealedIdToken` type definition to be multibase.

## 1.0.1 - 2020-10-22

### Fixed
- Add `appContextMap` and `documentLoader` to named rollup exports.

## 1.0.0 - 2020-09-09

Initial version.
