var express   = require('express'),
    passport  = require('passport'),
    mongoose  = require('mongoose'),
    path      = require('path'),
    http      = require('http'),
    env       = process.env.NODE_ENV || 'development',
    config    = require('../config/config')[env];

module.exports = function() {
  var app = express();

  // Save environment
  config['env'] = env;

  // Database
  var db = require('../config/db')(app, config);

  // Middleware
  require('../config/express')(app, config);

  // Setup passport
  require('../config/passport')(app, config);

  // Routes
  require('./routes')(app, config, db);

  // Start the app
  var port = process.env.PORT || config.port || 3000;
  app.listen(port);
  console.log("Express app started on port " + port);
};
