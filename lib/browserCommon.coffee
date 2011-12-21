common =
  _: require 'underscore'
  moment: require 'moment'
  async: require 'async'

common._.mixin require 'underscore.string'

module.exports = common
