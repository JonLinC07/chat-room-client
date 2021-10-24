import ChatMessage from '@/models/chat-message.model';
import store from '@/store';
import { io } from 'socket.io-client';


class SocketService {
    socket: any

    socketConnection() {
        this.socket = io('http://localhost:3000', {
            transports: ['websocket'] 
        })
    }

    sendMessage(message: ChatMessage): void {
        this.socket.emit('sendMessage', message)
        
    }

    emitMessage() {
        this.socket.on('emitMessage', (message: ChatMessage) => {
            store.state.message = message
            store.dispatch('appendMessageAction')
        })
    }

    snedUser(username: string): void {
        this.socket.emit('createUsername', username, (response: boolean) => {
            if (response) {
                store.state.username = username
                store.state.validUsername = true
            } else {
                store.state.username = ''
                store.state.validUsername = false
            }
        })
    }
}

export default new SocketService()
