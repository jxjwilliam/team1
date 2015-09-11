var dsny = angular.module('mean.equipment');

dsny.directive('equipment', ['$parse', function ($parse) { "use strict";

    return {
        restrict: 'E',
        transclude: true,
        templateUrl: '',
        replace: true,
        controller: ['$scope', function ($scope) {

        }],
        link: function (scope, element, attrs) {

        }
    }

}]);

dsny.directive('equpmentPanel', ['$parse', function ($parse) { 'use strict';

    return {
        restrict: 'E',
        templateUrl: '',
        require: ['?^equipment'],
        link: function (scope, element, attrs, ctrls) {
            //ctrls[0]
        },
        controller: ['$scope', function ($scope) {

        }]
    }

}]);