'use strict'

module.exports = (ndx) ->
  ndx.app.get '/api/memory', ndx.authenticate('superadmin'), (req, res) ->
    mem =
      memory: process.memoryUsage().rss / 1048576
    res.json mem
    mem = null