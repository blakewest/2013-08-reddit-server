var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

module.exports = function(app, config) {
  mongoose.connect(config.db); //why isn't config required?

  var userSchema = new Schema({
      username: String,
      password: String
    });
  var User = mongoose.model('User', userSchema);

};