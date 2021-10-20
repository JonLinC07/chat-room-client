<template>
    <div class="chat-room">
        <h1>chat room</h1>
        <Chat></Chat>
    </div>
</template>

<script lang="ts">
    import Chat from '@/components/Chat.vue';
    import { Options, Vue } from 'vue-class-component';

    @Options({
        components: {
            Chat,
        },
    })
    export default class ChatRoom extends Vue {}
</script>

<style lang="scss" scoped>
    @import '../assets/css/colors.scss';
</style>
