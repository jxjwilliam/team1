/**
 * william: a simple way to display event-count for re-usable purpose.
 */
angular.module('mean.events').directive('eventCountSocket',
    function (MeanSocket, $log) {
        return {
            restrict: 'EA',
            controller: function($scope, $modal, $log) {


            },
            link: function (scope, element, attrs) {

                MeanSocket.on('event:count', function (events) {
                    scope.events = JSON.parse(events);
                    scope.eventcount = scope.events.length;
                    $log.info('event:count: ', scope.eventcount);
                });

                // if(!scope.eventcount) {
                // first-time when loading.
                MeanSocket.emit('event:count:sync');
                // }
            }
        }
    });