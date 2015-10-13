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

dsny.directive('equipmentPanel', ['$parse', function ($parse) { 'use strict';
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

dsny.directive('equipmentDetail', ['$parse', function($parse) { 'use strict';
    return {
        restrict: 'E',
        templateUrl: '',
        replace: true,
        priority: 1,
        require: ['?^equipment'],
        link: function(scope, element, attrs, ctrls) {
            //ctrls[0]
        },
        controller: ['$scope', function($scope) {

        }]
    }
}]);