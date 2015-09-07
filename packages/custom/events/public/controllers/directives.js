/**
 * william: a simple way to display event-count for re-usable purpose.
 */
angular.module('mean.events').directive('eventCountSocket',
    function (MeanSocket, $log) {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {

                MeanSocket.on('event:count', function (eventcount) {
                    scope.eventcount = eventcount;
                    $log.info('event:count: ', scope.eventcount);
                });

                // if(!scope.eventcount) {
                // first-time when loading.
                MeanSocket.emit('event:count:sync');
                // }
            }
        }
    });