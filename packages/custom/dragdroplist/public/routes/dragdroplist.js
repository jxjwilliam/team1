'use strict';

angular.module('mean.dragdroplist').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('dragdroplist example page', {
      url: '/dragdroplist/example',
      templateUrl: 'dragdroplist/views/index.html'
    });
  }
]);
