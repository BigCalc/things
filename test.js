// © 2014 QUILLU INC.

var things = require('./index');
var browser = require('./browser');
var assert = require('assert');

// Server

// Check buitins
assert(things.assert.ok, 'it should have assert');
assert(things.util.pump, 'it should have util');
assert(things.fs.open, 'it should have fs');
assert(things.path.join, 'it should have path');
assert(things.url.parse, 'it should have url');
assert(things.qs.parse, 'it should have querystring');
assert(things.crypto.rng, 'it should have crypto');

// Check external
assert(things.debug.name === 'debug', 'it should have debug');
assert(things.moment.utc, 'it should have moment');
assert(things.async.some, 'it should have async');
assert(things.mkdirp.mkdirP, 'it should have mkdirp');
assert(things.rimraf.sync, 'it should have rimraf');
assert(things.numeral.isNumeral, 'it should have numeral');
assert(things.color.red, 'it should have cli-color');

// Check lodash
assert(things._, 'it should have lodash');
assert(things._.reverse, 'it should have _.string');

// Browser

// Check lodash
assert(browser._, 'it should have _');
assert(browser._.reverse, 'it should have _.string');
