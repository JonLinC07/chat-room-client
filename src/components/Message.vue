<template v-for="(msg, index) in $store.state.conversation" :item="msg" :index="index" :key="index">
    <div class="message" v-bind:class="(author !== $store.state.username) ? 'recived' : 'self'">
        <p class="message-text">
            {{ message }}
        </p>
        <hr class="separator">

        <p class="date">
            By {{ author }} on {{ date }}
        </p>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: ['author', 'message', 'date']
    })
    export default class Message extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/css/colors.scss';

    .message {
        width: fit-content;
        padding: 16px;
        margin: 6px 0;
        border-radius: 32px;

        p {
            margin: 0;
        }

        .separator {
            margin: 3px;
            border: 1px solid $white;
        }

        .message-text {
            color: $white;
            font-size: 20px;
            font-weight: bold;
        }

        .date {
            font-size: 16px;
        }
    }

    .self {
        background-color: $green-light;
    }

    .recived {
        align-self: flex-start;
        background-color: $blue;
    }
</style>
