<template>
    <div class="username d-flex flex-column align-items-center justify-content-center">
        <h3 class="username-text my-3">Write a username</h3>
        <input type="text" class="username-input mx-auto my-2" name="username" v-model="username">
        <h5 class="username-error my-3">{{ error }}</h5>

        <button class="btn btn-success my-2" v-on:click="getUsername(username)">Go to the room</button>
    </div>
</template>

<script lang="ts">
import router from '@/router';
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        // msg: String
    },
})
export default class Username extends Vue {
    error = ''
    username = ''

    getUsername(username: string): void {
        if (username.length > 3) {
            // save user and go to room
            this.error = ''
            router.push({name: 'chatRoom'})
        } else {
            this.error = 'Your username must be at least 3 characters long'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/css/colors.scss';

    .username {
        width: 100%;
        height: 420px;
        max-width: 760px;
        margin: 16px;
        padding: 16px;
        border: 1px solid $white;
        border-radius: 10px;

        .username-text {
            color: $green-light;
        }

        .username-input {
            padding: 8px;
            background-color: $alpha-green-strong;
            color: $white;
            font-weight: bold;
            border-radius: 10px;
            border: none;
        }

        .username-error {
            color: $red;
        }
    }
</style>
