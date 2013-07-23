# Things #
Things is a simple CommonJS module that exports commonly used utilities and a set of best of breed selected 3rd party utility modules. It purely exists to avoid having several lines of boilerplate imports in every file and is designed to be used with the destructuring syntax from CoffeScript or JavaScript ES6.

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
* [moment](http://momentjs.com/)
* [async](https://github.com/caolan/async)
* [mkdirp]()
* [rimraf]()
* [lazy]()
* [numeral]()
* [q]()

### Underscore related ###
* [lodash](http://lodash.com/)
* [underscore.string](http://epeli.github.io/underscore.string/)
* [underscore.inflections](https://github.com/geetarista/underscore.inflections)
 
## Developer ###
Create a Github issues for all bugs, features & requests. Pull requests are welcome.

## Test ###
Test with `npm test`

## License ##
BSD 3-Clause
