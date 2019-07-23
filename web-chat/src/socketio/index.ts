import socketIo from 'socket.io-client';

const initSocket = () => {
    const socket = socketIo("http://192.168.0.103:8080");

    return {
        listen(){
            socket.on('chat message', (msg: string) => {
                console.log(msg);
            })
        },
        sendMsg(msg: string){
            socket.emit("chat message", msg);
        }
    }
}

export default initSocket;