var passport      = require('passport');

module.exports = function(app, config) {
  // Setup API blockade
  app.all('/api/*', function(req, res, next) {
    // passport gives us a 'isAuthenticated' method
    // we'll check this method
    if (req.isAuthenticated()) return next();

    return res.send(401, 'Unauthorized');
  });

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
    // Implement signup
  });

  app.get('/api/news', function(req, res, next) {
    // Implement news api
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
};