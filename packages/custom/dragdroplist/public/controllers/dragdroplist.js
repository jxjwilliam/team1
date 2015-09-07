'use strict';

/* jshint -W098 */
angular.module('mean.dragdroplist').controller('DragdroplistController', ['$scope', 'Global', 'Dragdroplist',
  function($scope, Global, Dragdroplist) {
    $scope.global = Global;
    $scope.package = {
      name: 'dragdroplist'
    };
  }
]);
