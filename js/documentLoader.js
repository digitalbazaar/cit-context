'use strict';

const {CONTEXT_URL} = require('./constants');
const CIT_CONTEXT = require('../contexts/cit-v1.jsonld');

module.exports = {
  documentLoader(url) {
    if(url !== CONTEXT_URL) {
      throw new Error(`Loading document "${url}" is not allowed.`);
    }

    return {
      contextUrl: null,
      document: CIT_CONTEXT,
      documentUrl: url
    };
  }
};
