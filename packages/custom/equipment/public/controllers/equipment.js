'use strict';

/* jshint -W098 */
angular.module('mean.equipment').controller('EquipmentController', ['$scope', 'Global', 'Equipment',
  function($scope, Global, Equipment) {
    $scope.global = Global;
    $scope.package = {
      name: 'equipment'
    };
  }
]);
