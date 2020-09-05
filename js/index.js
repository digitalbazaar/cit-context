'use strict';

const context = require('../contexts/cit-v1.jsonld');
const constants = require('./constants');
const {CIT_CONTEXT_URL, CBORLD_APP_CONTEXT_VALUE} = constants;
const {documentLoader} = require('./documentLoader');

const contexts = new Map();
contexts.set(constants.CIT_CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(CIT_CONTEXT_URL, CBORLD_APP_CONTEXT_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  documentLoader
};
