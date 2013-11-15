module.exports = function(db) {
  db.models = {};
  require('./check_in')(db);
};
