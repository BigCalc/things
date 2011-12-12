common =
  util:     require 'util'
  fs:       require 'fs'
  path:     require 'path'
  crypto:   require 'crypto'
  _:        require 'underscore'
  moment:	require 'moment'
  async: 	require 'async'

common._.mixin require 'underscore.string'

module.exports = common
