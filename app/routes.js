var passport      = require('passport');
var mongoose      = require('mongoose');
var config        = require('../config/config.js')['development'];
var express       = require('express');
var User          = mongoose.model('User', 'users');
var News          = mongoose.model('NewsItem', 'newsitems');
// var Collection    = mongoose.Schema('users');


module.exports = function(app, config, db) {
  // Setup API blockade
  app.use(express.bodyParser());
  // app.all('/api/*', function(req, res, next) {
  //   // passport gives us a 'isAuthenticated' method
  //   // we'll check this method
  //   if (req.isAuthenticated()) return next();

  //   return res.send(401, 'Unauthorized');
  // });

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
    //check if username and password match in database
    User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
      if(user) {
        res.writeHead(200);
        res.end("Success");
      } else {
        res.redirect('/');
      }
    });
    //if no, return to login/index page
    //if yes, return welcome message
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
    console.log('this is at the news api');
    News.find({}, function(err, newsItems){
      console.log(newsItems);
      if(newsItems) {
        console.log(newsItems);
        res.writeHead(200);
        res.write(newsItems.toString());
        res.end();
      }
    });
  });

  app.post('/api/rate', function(req, res, next) {
    console.log('req body url is...' + req.body.url);
    if (req.body.vote === "upvote") {
      News.findOneAndUpdate({url: req.body.url}, {$inc: {upvote: 1}},function(){
        console.log("updating upvotes count");
      });
    } else if (req.body.vote === "downvote") {
      News.findOneAndUpdate({url: req.body.url}, {$inc: {downvote: 1}},function(){
        console.log("updating downvotes count");
      });
    }
    res.writeHead(200);
    res.end('maybe sucess');
    //update database to reflect post data.
  });
};































