'use strict';

//Events service used for events REST endpoint
angular.module('mean.events').factory('Events', ['$resource',
  function($resource) {
    return $resource('api/events/:eventId', {
      eventId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
