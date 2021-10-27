import { createStore } from 'vuex'
import ChatMessage from '../models/chat-message.model';

export default createStore({
    state: {
        conversation: [] as ChatMessage[],
        message: Object as ChatMessage,
        username: '',
        validUsername: false
    },
    mutations: {
        appendMessage(state) {
            state.conversation = [state.message, ...state.conversation]
        }
    },
    actions: {
        appendMessageAction(context) {
            context.commit('appendMessage')
        }
    },
    modules: {},
    getters: {}
})
