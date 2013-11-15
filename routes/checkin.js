module.exports = function(app) {
  app.get('/check_in', function(req, res) {
    res.render('check_in');
  });
};
