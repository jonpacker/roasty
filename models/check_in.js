var Model = require('seraph-model');
module.exports = function(db) {
  var CheckIn = db.models.CheckIn = Model(db, 'check_in');
  CheckIn.fields = ['roastery', 'coffee', 'comment', 'location', 'brew_method',
                    'origin', 'user'];
  CheckIn.useTimestamps();
};
