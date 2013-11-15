module.exports = function(app) {
  app.get('/check_in', function(req, res) {
    res.render('check_in');
  });
  app.post('/check_in', function(req, res) {
    app.db.models.CheckIn.save(req.body, function(err, checkIn) {
      res.send('OK!');
    });
  });
};
