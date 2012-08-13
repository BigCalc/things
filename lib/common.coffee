common =
  util: require 'util'
  fs: require 'fs'
  path: require 'path'
  crypto: require 'crypto'
  _: require 'underscore'
  moment: require 'moment'
  async: require 'async'
  inflect: require 'i'
  mkdirp: require 'mkdirp'
  rimraf: require 'rimraf'

common._.mixin require 'underscore.string'

module.exports = common
