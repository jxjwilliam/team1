'use strict';

/* jshint -W098 */
angular.module('mean.eventcounts').controller('EventcountsController', ['$scope', 'Global', 'Eventcounts',
  function($scope, Global, Eventcounts) {
    $scope.global = Global;
    $scope.package = {
      name: 'eventcounts'
    };
  }
]);
