'use strict';

angular.module('mean.d3app').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('d3jsapp', {
      url: '/d3app/example',
      templateUrl: 'd3app/views/index.html'
    });
  }
]);
