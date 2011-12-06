vows = require 'vows'
should = require 'should'

common = require '../../index'

vows.describe('common').addBatch(
  'when common is mixedin':
    topic: common
    'it should respond to builtin modules': (c) ->
      should.exist c.util
      should.exist c.fs
      should.exist c.path
      should.exist c.crypto
    'it should respond to underscore': (c) ->
      should.isFunction c._
    'it should respond to moment': (c) ->
      should.isFunction c.moment

).export module
