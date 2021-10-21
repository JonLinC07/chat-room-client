<template>
    <div class="chat-room">
        <h1 class="chat-room-title">Chat Room</h1>

        <div class="chat mx-auto">
            <div class="messages">
                <div class="msg d-flex flex-column align-items-end">
                    <Message v-for="msg in conversation" :key="msg.id"
                        :author="msg.author" 
                        :message="msg.message"
                        :date="msg.date"
                    ></Message>
                </div>
            </div>
        </div>
        
        <div class="input-send d-flex justify-content-between mx-auto">
            <input type="text" class="message-box" v-on:keyup.enter="sendMessage(message)" 
                ref="messageRef" v-model="message">
            <button type="button" class="btn-send btn-light" v-on:click="sendMessage(message)">Send</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Message from '@/components/Message.vue';
    import { Options, Vue } from 'vue-class-component';
    
    interface ChatMessage {
        id: number
        author: string
        message: string
        date: string
    }

    @Options({
        components: {
            Message
        },
    })
    export default class ChatRoom extends Vue {
        message = ''
        conversation: ChatMessage[] = []

        sendMessage(message: string): void {
            if (message.length > 0) {
                const dateMessage = `${new Date().toDateString()} at ${new Date().toTimeString().split(' ')[0]}`
                const msg: ChatMessage = {
                    id: this.conversation.length + 1, 
                    author: 'Lin',
                    message: this.message,
                    date: dateMessage
                }

                this.conversation.push(msg);
                this.message = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/colors.scss';

    .chat-room {
        height: 100vh;
        background: url('https://cdn.pixabay.com/photo/2015/03/21/09/00/snow-683319_1280.jpg');

        .chat, .input-send {
            border: 1px solid $white;
            border-radius: 10px;
            background-color: $alpha-black;
        }

        .chat {
            width: 60%;
            height: 70%;
            margin: 16px;
            padding: 16px;

            .messages {
                margin: 24;
            }
        }

        .input-send {
            width: 60%;
            height: 15%;
            margin: 24px;
            padding: 24px;

            .message-box {
                width: 85%;
                padding: 12px;
                border-radius: 10px;
                background-color: $alpha-green-strong;
                border: none;
                color: $white;
                font-weight: bold;
                font-size: 18px;
            }

            .btn-send {
                width: 10%;
                border-radius: 10px;
                background-color: $green-main;
                color: $white;
                font-weight: bold;
                font-size: 18px;
                border: none;
            }
        }
    }
</style>
