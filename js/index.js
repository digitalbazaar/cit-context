'use strict';

const constants = require('./constants');
const fs = require('fs');
const path = require('path');
const {CIT_CONTEXT_URL, CIT_CBORLD_APP_CONTEXT_VALUE} = constants;
const {documentLoader} = require('./documentLoader');

function _read(_path) {
  return JSON.parse(
    fs.readFileSync(
      path.join(__dirname, _path),
      {encoding: 'utf8'}));
}

const contexts = new Map();
contexts.set(constants.CIT_CONTEXT_URL, _read('../contexts/cit-v1.jsonld'));

const appContextMap = new Map();
appContextMap.set(CIT_CONTEXT_URL, CIT_CBORLD_APP_CONTEXT_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  documentLoader
}
