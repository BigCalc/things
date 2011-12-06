# Ensure $NODE_ENV is set to production to override development

start = ->
#  launch your app

module.exports = start

# Run if called directly
start() if require.main is module
