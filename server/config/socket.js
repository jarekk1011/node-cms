import User from '../models/user.js';
module.exports = function(io) {
    io.sockets.on('connection', function(socket) {
        let ID = socket.request.session.passport;
        if (!!ID) {
            ID = ID.user;
            io.emit('active-user', ID);
        }

        socket.on('disconnect', function() {
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