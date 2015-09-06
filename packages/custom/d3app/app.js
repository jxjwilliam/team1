'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var D3app = new Module('d3app');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
D3app.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  D3app.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  D3app.menus.add({
    title: 'd3app example page',
    link: 'd3app example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  D3app.aggregateAsset('css', 'd3app.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    D3app.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    D3app.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    D3app.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return D3app;
});
