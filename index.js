// © 2014 QUILLU INC.
// things
'use strict';

var common = module.exports;

// List of modules to export
var modules = ['assert',
               'util',
               'fs',
               'path',
               'url',
               ['qs', 'querystring'],
               'crypto',
               'debug',
               'moment',
               'async',
               'mkdirp',
               'rimraf',
               'numeral',
               ['color', 'cli-color']];


// Define a lazy loaded getter
var define = function (n, m) {
  Object.defineProperty(common, n, {
    get: function() {
      var lib = typeof(m) === 'function' ?
               m() :
               require(m);

      Object.defineProperty(common, n, {
        value: lib
      });
      return lib;
    },
    configurable:true
  });
};

// Add each module
var m, n, i, _len;
for(i = 0, _len = modules.length; i < _len; i++) {
  n = m = modules[i];
  if (Array.isArray(m)) {
    n = m[0];
    m = m[1];
  }

  define(n,m);
}

// Lodash
define('_', function () {
  var _ = require('lodash');
  _.mixin(require('underscore.string'));
  return _;
});
