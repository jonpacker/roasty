var async = require('async');
module.exports = function(app) {
  app.get('/', function(req, res) {
    var CheckIn = app.db.models.CheckIn;
    CheckIn.findAll(function(err, models) {
      if (err) return res.send(500, err.message || err);
      async.map(models, CheckIn.compute.bind(CheckIn), function(err, models) {
        if (err) return res.send(500, err.message || err);
        res.render('stream', { checkins: models });
      });
    });
  });
};
