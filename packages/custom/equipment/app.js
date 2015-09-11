'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Equipment = new Module('equipment');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Equipment.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Equipment.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Equipment.menus.add({
    title: 'Equipment',
    link: 'equipment example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Equipment.aggregateAsset('css', 'equipment.css');

  Equipment.angularDependencies(['dndLists', 'perfect_scrollbar']);

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Equipment.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Equipment.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Equipment.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Equipment;
});
