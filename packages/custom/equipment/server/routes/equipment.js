'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Equipment, app, auth, database) {

  app.get('/api/equipment/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/equipment/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/equipment/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/equipment/example/render', function(req, res, next) {
    Equipment.render('index', {
      package: 'equipment'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
