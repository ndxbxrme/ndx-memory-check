(function() {
  'use strict';
  module.exports = function(ndx) {
    return ndx.app.get('api/memory', ndx.authenticate('superadmin'), function(req, res) {
      return res.json({
        memory: process.memoryUsage().rss / 1048576
      });
    });
  };

}).call(this);

//# sourceMappingURL=app.js.map
