# CakeFile for project tasks

# Imports
fs = require 'fs'
util = require 'util'
path = require 'path'
{exec} = require 'child_process'

# Constants
VOWS_OPTS = '--spec'

# Helpers
execute = (command, params) ->
    console.log "Running: #{command} #{params || ''}"
    e = exec command
    e.stdout.on "data", util.print
    e.stderr.on "data", util.print

getFiles = (dir, pattern = /.*/) ->
  matches = ''
  dirInfo = fs.statSync dir
  if dirInfo.isDirectory()
    files = fs.readdirSync dir
    files.forEach (file) ->
      filename = path.join dir, file
      info = fs.statSync filename
      if info.isDirectory()
        matches +=  ' ' + getFiles filename, pattern
      else if pattern.test file
        matches += ' ' + filename

  matches


# Tasks

task 'test:spec', 'Run BDD specifications', ->
  files = getFiles 'test/spec', /.*\.coffee/i
  execute "NODE_ENV=test vows #{VOWS_OPTS} #{files}"


task 'test', 'Run all tests', ->
  invoke 'test:spec'
