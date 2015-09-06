'use strict';

/* jshint -W098 */
angular.module('mean.d3app').controller('D3appController', ['$scope', 'Global', 'D3app',
  function($scope, Global, D3app) {
    $scope.global = Global;
    $scope.package = {
      name: 'd3app'
    };
  }
]);
