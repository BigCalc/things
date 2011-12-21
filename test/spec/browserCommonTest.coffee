vows = require 'vows'
should = require 'should'

common = require('../../index').browser

vows.describe('common').addBatch(
  'when common is mixedin':
    topic: common
    'it should respond to underscore': (c) ->
      should.isFunction c._
    'it should respond to moment': (c) ->
      should.isFunction c.moment
    'it should respond to async': (c) ->
      should.exist c.async


).export module
