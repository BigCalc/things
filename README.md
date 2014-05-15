# Things #

[![Build Status](https://travis-ci.org/OctaveWealth/things.png?branch=master)](https://travis-ci.org/OctaveWealth/things)

[![NPM](https://nodei.co/npm/things.png?downloads=true)](https://nodei.co/npm/things/)

Things is a simple CommonJS module that exports commonly used utilities and a set of best of breed selected 3rd party utility modules. It purely exists to avoid having several lines of boilerplate imports in every file and is designed to be used with the destructuring syntax from CoffeScript or JavaScript ES6. Modules are lazy loaded so they only add delay once they are used. 

Also works in the browser via Browserify with a minimal set of utilities that make sense on the client.

## Install ##

```
npm install --save things
```

## Usage ##
Just import whatever you need.

In JavaScript ES6,

```js
{path, fs, util, crypto, _, moment} = require('things');
```

or in Coffee-Script

```coffee-script
{assert, _} = require 'things'
```

or in JS5

```js
var things = require('things');
things._(...);
things.fs(...); 
```

vs

```js
var fs = require('fs');
var url = require('url');
var _ = require('lodash');
var moment = require('moment');
var async = require('async');
...
```

## Includes ##

### Builtins exported for convienence ###
* assert
* util
* fs
* path
* url
* querystring
* crypto

### Third Party modules ###
* [debug](https://github.com/visionmedia/debug)
* [moment](http://momentjs.com/)
* [async](https://github.com/caolan/async)
* [mkdirp](https://github.com/substack/node-mkdirp)
* [rimraf](https://github.com/isaacs/rimraf)
* [numeral](https://github.com/adamwdraper/Numeral-js)
* [cli-color](https://github.com/medikoo/cli-color)

### Underscore related ###
* [lodash](http://lodash.com/)
* [underscore.string](http://epeli.github.io/underscore.string/)
* [underscore.inflections](https://github.com/geetarista/underscore.inflections)

## Browser Version ##
The following are only exported for use with browserify
* [lodash](http://lodash.com/)
* [underscore.string](http://epeli.github.io/underscore.string/)

## Developer ###
Create Github issues for all bugs, features & requests. Pull requests are welcome.

## Test ###
Test with `make test`

## License ##
[BSD 3-Clause](LICENSE)
