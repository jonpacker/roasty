var Model = require('seraph-model');
var moment = require('moment')
module.exports = function(db) {
  var CheckIn = db.models.CheckIn = Model(db, 'check_in');
  CheckIn.fields = ['roastery', 'coffee', 'comment', 'location', 'brew_method',
                    'origin', 'user'];
  CheckIn.useTimestamps();
  CheckIn.on('validate', function(checkin, callback) {
    if (!(checkin.roastery || checkin.coffee || checkin.brew_method))
      callback('You need to specify at least a brew method, roastery or coffee');
    else callback();
  });
  CheckIn.addComputedField('pretty_age', function(checkin) {
    var age = moment.duration(checkin.created - moment.unix(), 'seconds');
    return age.humanize(true);
  });
};
