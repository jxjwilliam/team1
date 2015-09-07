'use strict';

angular.module('mean.angulardrop').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('angulardrop example page', {
      url: '/angulardrop/example',
      templateUrl: 'angulardrop/views/index.html'
    });
  }
]);
