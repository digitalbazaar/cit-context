# Concealed Id Token context _(cit-context)_

<!-- [![NPM Version](https://img.shields.io/npm/v/cit-context.svg?style=flat-square)](https://npm.im/cit-context) -->

> Concealed Id Token context for JSON-LD.


## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

*

## Install

Requires Node.js 14+

To install via NPM:

```
npm install cit-context
```

## Usage

```js
const {
  contexts, constants, appContextMap, documentLoader
} = require('cit-context');

// use URL in a JSON-LD context
const obj = {
  "@context": [
    constants.CIT_CONTEXT_URL,
    // ...
  ],
  // ...
};

// Codec term map value for CBOR-LD
constants.CBORLD_CODEC_VALUE
// 0x15

// get context data for a specific context
const data = contexts.get('https://w3id.org/cit/v1');
// ...
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports two properties:
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CIT_CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.
- `appContextMap`: For use with `cborld` library.
- `documentLoader`

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.
