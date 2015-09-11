'use strict';

// The Package is past automatically as first parameter
module.exports = function (MeanSocket, io) {

    var _ = require('lodash');
    var moment = require('moment');
    var mycontroller = require('../controllers/sockets');

    var channelWatchList = [];

    io.on('connection', function (socket) {

        /**
         * disconnect
         */
        socket.on('disconnect', function () {
            console.log('Chat - user disconnected');
        });

        /**
         * user:joined
         */
        socket.on('user:joined', function (user) {
            console.log(user.name + ' joined the room');
            var message = user.name + ' joined the room';
            io.emit('user:joined', {
                message: message,
                time: moment(),
                expires: moment().add(10)
            });
        });

        /**
         * message:send
         */
        socket.on('message:send', function (message) {

            mycontroller.createFromSocket(message, function (cb) {
                io.emit('message:channel:' + message.channel, cb);
            });
        });

        /**
         * channel:join
         */
        socket.on('channel:join', function (channelInfo) {

            if (channelWatchList.indexOf(channelInfo.channel) === -1) {
                channelWatchList.push(channelInfo.channel);
            }

            io.emit('user:channel:joined:' + channelInfo.channel, {
                message: channelInfo,
            });

            mycontroller.getListOfChannels(function (channels) {
                _.each(channels, function (c) {
                    if (channelWatchList.indexOf(c) === -1) {
                        channelWatchList.push(c);
                    }
                });
                socket.emit('channels', channelWatchList);
            });

            //Emit back any messages that havent expired yet.
            mycontroller.getAllForSocket(channelInfo.channel, function (data) {
                socket.emit('messages:channel:' + channelInfo.channel, data);
            });
        });

        /**
         * william add for Events count.
         */
        socket.on('event:count:sync', function () {

            mycontroller.getAllEventsForSocket(function (events) {
                //io.emit('event:count', events.length);
                io.emit('event:count', JSON.stringify(events));
            });
        });

    });
};
