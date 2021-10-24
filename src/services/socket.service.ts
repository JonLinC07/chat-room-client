import ChatMessage from '@/models/chat-message.model';
import store from '@/store';
import { io } from 'socket.io-client';


class SocketService {
    socket: any

    socketConnection() {
        this.socket = io('http://localhost:3000', {
            transports: ['websocket'] 
        })

        this.emitMessage()
    }

    sendMessage(message: ChatMessage): void {
        this.socket.emit('sendMessage', message)
        
    }

    emitMessage() {
        this.socket.on('emitMessage', (message: ChatMessage) => {
            store.state.message = message
            store.dispatch('appendMessageAction')
            console.log(store.state.conversation);
        })
    }
}

export default new SocketService()
