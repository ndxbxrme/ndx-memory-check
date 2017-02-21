(function() {
  'use strict';
  module.exports = function(ndx) {
    return ndx.app.get('/api/memory', ndx.authenticate('superadmin'), function(req, res) {
      var mem;
      mem = {
        memory: process.memoryUsage().rss / 1048576
      };
      res.json(mem);
      return mem = null;
    });
  };

}).call(this);

//# sourceMappingURL=app.js.map
