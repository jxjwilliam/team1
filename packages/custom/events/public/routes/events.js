'use strict';

//Setting up route
angular.module('mean.events').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all events', {
        url: '/events',
        templateUrl: '/events/views/list.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('create event', {
        url: '/events/create',
        templateUrl: '/events/views/create.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('edit event', {
        url: '/events/:eventId/edit',
        templateUrl: '/events/views/edit.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('event by id', {
        url: '/events/:eventId',
        templateUrl: '/events/views/view.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      });
  }
]);
