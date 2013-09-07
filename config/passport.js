var mongoose        = require('mongoose'),
    User            = mongoose.model('User'),
    LocalStrategy   = require('passport-local').Strategy;

module.exports = function(app, config) {
  var passport = app.get('passport');
  // Implement the passport local strategy
  passport.use(new LocalStrategy(
    function(username, pass, done) {
      User.findOne({username: username}, function(err, user){
        if (err) {return done(err);}
        if (!user) {
          return done(null, false, {message: 'no username up in here'});
        }
        if (!user.validPassword(pass)) {
          return done(null, false, {message: 'incorrect password'});
        }
        return done(null, user);

     });
   }));
};