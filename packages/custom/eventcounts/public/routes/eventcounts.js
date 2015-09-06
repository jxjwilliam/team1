'use strict';

angular.module('mean.eventcounts').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('eventcounts', {
      url: '/eventcounts/example',
      templateUrl: 'eventcounts/views/index.html'
    });
  }
]);
