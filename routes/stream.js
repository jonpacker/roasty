module.exports = function(app) {
  app.get('/', function(req, res) {
    app.db.models.CheckIn.findAll(function(err, models) {
      if (err) return res.send(500, err.message || err);
      res.render('stream', { checkins: models });
    });
  });
};
