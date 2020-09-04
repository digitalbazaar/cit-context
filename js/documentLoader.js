const fs = require('fs');

const {CIT_CONTEXT_URL} = require('./constants');
const CIT_CONTEXT = JSON.parse(
  fs.readFileSync('../contexts/cit-v1.jsonld', 'utf8'));

module.exports = {
  documentLoader(url) {
    if(url !== CIT_CONTEXT_URL) {
      throw new Error(`Loading document "${url}" is not allowed.`);
    }

    return {
      contextUrl: null,
      document: CIT_CONTEXT,
      documentUrl: url
    };
  }
};
