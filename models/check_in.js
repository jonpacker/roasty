var Model = require('seraph-model');
var moment = require('moment')
module.exports = function(db) {
  var CheckIn = db.models.CheckIn = Model(db, 'check_in');
  CheckIn.fields = ['roastery', 'coffee', 'comment', 'location', 'brew_method',
                    'origin', 'user'];
  CheckIn.useTimestamps();
  CheckIn.addComputedField('pretty_age', function(checkin) {
    var age = moment.duration(video.created - moment.unix(), 'seconds');
    return age.humanize(true);
  });
};
