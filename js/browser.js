'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.CIT_CONTEXT_URL,
  require('../contexts/cit-v1.jsonld'));
