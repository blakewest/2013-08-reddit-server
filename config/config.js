var path = require('path'),
    rootPath = path.join(__dirname, '..');

module.exports = {
  development: {
    db: 'mongodb://localhost/myapp-dev',
    root: rootPath,
    app: {
      port: 3000,
      secret: 'SOMETHINGs3cur3333'
    },
    clientUrl: 'http://localhost:3001'
  }
};