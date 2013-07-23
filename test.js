// © 2013 QUILLU INC.

var things = require('./index');
var assert = require('assert');

// Check buitins
assert(things.assert.ok, 'it should have assert');
assert(things.util.pump, 'it should have util');
assert(things.fs.open, 'it should have fs');
assert(things.path.join, 'it should have path');
assert(things.url.parse, 'it should have url');
assert(things.querystring.parse, 'it should have querystring');
assert(things.crypto.rng, 'it should have crypto');

// Check external
assert(things.moment.utc, 'it should have moment');
assert(things.async.some, 'it should have async');
assert(things.mkdirp.mkdirP, 'it should have mkdirp');
assert(things.rimraf.sync, 'it should have rimraf');
assert(things.lazy.range, 'it should have lazy');
assert(things.numeral.isNumeral, 'it should have numeral');
assert(things.q.fin, 'it should have q');

// Check lodash plugins
assert(things._, 'it should have _');
assert(things._.reverse, 'it should have _.string');
assert(things._.singularize, 'it should have _.inflections');
