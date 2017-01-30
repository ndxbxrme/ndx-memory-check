'use strict'

module.exports = (ndx) ->
  ndx.app.get 'api/memory', ndx.authenticate('superadmin'), (req, res) ->
    res.json
      memory: process.memoryUsage().rss / 1048576