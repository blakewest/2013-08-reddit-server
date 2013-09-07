var passport      = require('passport');
var mongoose      = require('mongoose');
var config        = require('../config/config.js')['development'];
var express       = require('express');
var User          = mongoose.model('User', 'users');
// var Collection    = mongoose.Schema('users');


module.exports = function(app, config, db) {
  // Setup API blockade
  app.use(express.bodyParser());
  app.all('/api/*', function(req, res, next) {
    // passport gives us a 'isAuthenticated' method
    // we'll check this method
    if (req.isAuthenticated()) return next();

    return res.send(401, 'Unauthorized');
  });

  //app.db.User

  app.get('/', function(req, res) {
    // console.log('this is getting called');
    // fs.readFile('/public/index.html', function(err, data) {
    //   var html = data.toString();
    //   res.end(html);
    // });
  });

  // Auth
  app.post('/login', function(req, res, next) {
    // Implement login
    console.log('your loggin in');
  });

  app.post('/signup', function(req, res, next) {
    var user = new User({username: ''+req.body.username, password: ''+req.body.password});
    user.save();
    var newUser;
    res.writeHead(200);
    User.find({}, function(err, data) {
      newUser = data[data.length-1];
      res.write("Your username is " + newUser.username);
      res.end();
    });
  });

  app.get('/api/news', function(req, res, next) {
    // Implement news api
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
};