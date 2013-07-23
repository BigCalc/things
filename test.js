// © 2013 QUILLU INC.

var things = require('./index');
var assert = require('assert');

// Check buitins
assert(things.assert, 'it should have assert');
assert(things.util, 'it should have util');
assert(things.fs, 'it should have fs');
assert(things.path, 'it should have path');
assert(things.url, 'it should have url');
assert(things.querystring, 'it should have querystring');
assert(things.crypto, 'it should have crypto');

// Check external
assert(things.moment, 'it should have moment');
assert(things.async, 'it should have async');
assert(things.mkdirp, 'it should have mkdirp');
assert(things.rimraf, 'it should have rimraf');
assert(things.lazy, 'it should have lazy');
assert(things.numeral, 'it should have numeral');
assert(things.q, 'it should have q');

// Check lodash plugins
assert(things._, 'it should have _');
assert(things._.reverse, 'it should have _.string');
assert(things._.singularize, 'it should have _.inflections');
