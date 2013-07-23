// © 2013 QUILLU INC.

var common = {
  assert: require('assert'),
  util: require('util'),
  fs: require('fs'),
  path: require('path'),
  url: require('url'),
  querystring: require('querystring'),
  crypto: require('crypto'),
  _: require('lodash'),
  moment: require('moment'),
  async: require('async'),
  mkdirp: require('mkdirp'),
  rimraf: require('rimraf'),
  lazy: require('lazy.js'),
  numeral: require('numeral'),
  q: require('q')
};

common._.mixin(require('underscore.string'));
common._.mixin(require('underscore.inflections'));

module.exports = common;
