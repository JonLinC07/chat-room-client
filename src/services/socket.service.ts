import { io } from 'socket.io-client';

class SocketService {
    socket: any

    socketConnection() {
        this.socket = io('http://localhost:3000', {
            transports: ['websocket'] 
        })

        this.socket.on('emitMessage', (message: string) => {
            console.log(message);
        })
    }

    sendMessage(message: string): void {
        this.socket.emit('sendMessage', message)
    }
}

export default new SocketService()
