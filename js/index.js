'use strict';

const context = require('../contexts/cit-v1.jsonld');
const constants = require('./constants');
const {CONTEXT_URL, CBORLD_CODEC_VALUE} = constants;
const {documentLoader} = require('./documentLoader');

const contexts = new Map();
contexts.set(constants.CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_CODEC_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  documentLoader
};
