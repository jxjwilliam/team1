'use strict';

angular.module('mean.equipment').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('equipment example page', {
      url: '/equipment/example',
      templateUrl: 'equipment/views/index.html'
    });
  }
]);
