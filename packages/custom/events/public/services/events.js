'use strict';

//Events service used for events REST endpoint
var dsny = angular.module('mean.events');

dsny.factory('Events', ['$resource',
    function ($resource) {
        return $resource('api/events/:eventId', {
            eventId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

