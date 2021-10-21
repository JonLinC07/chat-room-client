<template>
    <div class="index">
        <h1 class="title">The Chat Room</h1>
        <div class="username d-flex flex-column align-items-center justify-content-center">
            <h3 class="username-text my-3">Write a username</h3>
            <input type="text" class="username-input mx-auto my-2" name="username" v-model="username">
            <h5 class="username-error my-3">{{ error }}</h5>

            <button class="btn btn-success my-2" v-on:click="getUsername(username)">Go to the room</button>
        </div>
    </div>
</template>

<script lang="ts">
    import router from '@/router';
    import { Options, Vue } from 'vue-class-component';

    @Options({
        components: {},
    })
    export default class Index extends Vue {
        error = ''
        username = ''

        getUsername(username: string): void {
            if (username.length > 0) {
                // save user and go to room
                this.error = ''
                router.push({name: 'chatRoom'})
            } else {
                this.error = 'Your username must be at least 3 characters long'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/colors.scss';

    .index {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        min-height: 100vh;
        background-color: $black;

        .title {
            color: $white;
            margin: 8px 0;
        }

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
    }
</style>
