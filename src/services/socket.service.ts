import { io } from 'socket.io-client';

class SocketService {
    socket: any

    socketConnection() {
        this.socket = io('http://localhost:3000', {
            transports: ['websocket'] 
        })
    }
}

export default new SocketService()
