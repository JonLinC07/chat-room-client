<template>
    <div class="index">
        <h1 class="title">The Chat Room</h1>
        <Username></Username>
    </div>
</template>

<script lang="ts">
    import Username from '@/components/Username.vue';
    import { Options, Vue } from 'vue-class-component';

    @Options({
        components: {
            Username,
        },
    })
    export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
    @import '../assets/css/colors.scss';

    .index {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;

        .title {
            color: $white;
            margin: 8px 0;
        }
    }
</style>
