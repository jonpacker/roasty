module.exports = function(app) {
  require('./check_in')(app);
  require('./stream')(app);
};
