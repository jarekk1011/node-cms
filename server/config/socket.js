const User = require('../models/user.js');
module.exports = function(io) {
    io.on('connect', function(client) {
        let ID = client.request.session.passport;
        if (!!ID) {
            ID = ID.user;
            io.emit('active-user', ID);
        }

        client.on('disconnect', function() {
            console.log('disconect user ' + ID);
            io.sockets.emit('disconnect-user', ID);
        });

    });
    io.on('connection', function(client) {
        io.sockets.emit('users-length', io.sockets.server.engine.clientsCount);
        client.on('disconnect', function() {
            io.sockets.emit('users-length', io.sockets.server.engine.clientsCount);
        });
        console.log('socket connected');
    });
}