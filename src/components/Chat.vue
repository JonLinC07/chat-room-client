<template>
    <div class="chat">
        <h2>some</h2>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        username: String
    },
})
export default class Chat extends Vue {
    username!: string

    sendMessage(message: string): void {
        console.log(message);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/css/colors.scss';

    .chat {
        width: 100%;
        height: 420px;
        max-width: 760px;
        margin: 16px;
        padding: 16px;
        border: 1px solid $white;
        border-radius: 10px;
    }
</style>
