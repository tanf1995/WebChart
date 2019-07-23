const IO = require('koa-socket');


const initSocket = (app) => {
    const io = new IO();

    io.attach(app);

    app._io.on('connection', socket => {
        socket.on('chat message', msg => {
            console.log(msg);
            socket.emit('chat message', msg);
        })
    });
}

module.exports = initSocket;