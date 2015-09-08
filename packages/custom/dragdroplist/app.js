'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Dragdroplist = new Module('dragdroplist');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Dragdroplist.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Dragdroplist.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Dragdroplist.menus.add({
    title: 'dragdroplist',
    link: 'dragdroplist example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Dragdroplist.aggregateAsset('css', 'dragdroplist.css');

  Dragdroplist.angularDependencies(['dndLists']);

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Dragdroplist.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Dragdroplist.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Dragdroplist.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Dragdroplist;
});
