var Model = require('seraph-model');
module.exports = function(db) {
  db.models.CheckIn = Model(db, 'check_in');
};
