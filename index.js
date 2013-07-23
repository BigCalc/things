// © 2013 QUILLU INC.

var common = module.exports;

// List of modules to export
var modules = ['assert',
               'util',
               'fs',
               'path',
               'url',
               'querystring',
               'crypto',
               'moment',
               'async',
               'mkdirp',
               'rimraf',
               ['lazy', 'lazy.js'],
               'numeral',
               'q'];

// Define lazy loaded getter
var m, n, i, _len;
var define = function(m,n){
  Object.defineProperty(common, n, {
   get: function() {
      return (common[n] = require(m));
    }
  });
};

for(i = 0, _len = modules.length; i < _len; i++) {
  m = n = modules[i];
  if (Array.isArray(m)) {
    n = m[0];
    m = m[1];
  }

  define(m,n);

}

// Underscore
common._ = require('lodash');
common._.mixin(require('underscore.string'));
common._.mixin(require('underscore.inflections'));
