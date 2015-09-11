/**
 * william: a simple way to display event-count for re-usable purpose.
 */
var dsny = angular.module('mean.events');

dsny.directive('eventCountSocket',
    function (MeanSocket, $log) {
        return {
            restrict: 'EA',
            templateUrl: 'views/event-count-socket.html',
            controller: function ($rootScope, $scope, modal, $interval, $timeout) {

                var myModal = new modal();

                $scope.hideGrid = true;

                $rootScope.gridOptions = {
                    onRegisterApi: function (gridApi) {
                        $scope.gridApi = gridApi;

                        // call resize every 200 ms for 2 s after modal finishes opening - usually only necessary on a bootstrap modal
                        $interval(function () {
                            $scope.gridApi.core.handleWindowResize();
                        }, 10, 500);
                    }
                };

                $scope.showModal = function () {
                    myModal.open();
                };

                $timeout(function () {
                    $rootScope.gridOptions.data = $scope.events;
                }, 1000);

            },
            link: function (scope, element, attrs) {

                MeanSocket.on('event:count', function (events) {
                    scope.events = JSON.parse(events);
                    scope.eventcount = scope.events.length;

                    $log.info('event:count: ', scope.eventcount, scope.events);

                });

                // first-time when loading.
                MeanSocket.emit('event:count:sync');
            }
        }
    })
    .run(function ($templateCache) {
        var html = [
            '<div class="alert alert-info">',
            'Total Processing Events: ',
            '<button id="showButton" class="btn btn-success" ng-click="showModal()">{{eventcount}}</button>',
            '</div>'].join('');
        $templateCache.put('views/event-count-socket.html', html);
    });

dsny.factory('modal', ['$compile', '$rootScope', function ($compile, $rootScope) {
    return function () {
        var elm;
        var modal = {
            open: function () {

                var html = '<div class="modal" ng-style="modalStyle">{{modalStyle}}<div class="modal-dialog"><div class="modal-content"><div class="modal-header"></div><div class="modal-body"><div id="grid1" ui-grid="gridOptions" class="grid"></div></div><div class="modal-footer"><button id="buttonClose" class="btn btn-primary" ng-click="close()">Close</button></div></div></div></div>';
                elm = angular.element(html);
                angular.element(document.body).prepend(elm);

                $rootScope.close = function () {
                    modal.close();
                };

                $rootScope.modalStyle = {"display": "block"};

                $compile(elm)($rootScope);
            },
            close: function () {
                if (elm) {
                    elm.remove();
                }
            }
        };

        return modal;
    };
}]);