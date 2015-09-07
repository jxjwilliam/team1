'use strict';

/* jshint -W098 */
angular.module('mean.angulardrop').controller('AngulardropController', ['$scope', 'Global', 'Angulardrop',
  function($scope, Global, Angulardrop) {
    $scope.global = Global;
    $scope.package = {
      name: 'angulardrop'
    };
  }
]);
