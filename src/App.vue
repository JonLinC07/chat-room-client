<template>
  <router-view/>
</template>
<script>
  import { Options, Vue } from 'vue-class-component';
  import SocketService from './services/socket.service.ts';

  @Options({
    components: {},
    created() {
      SocketService.socketConnection()
      SocketService.emitMessage()
    }
  })
  export default class App extends Vue {}
</script>
<style lang="scss">

</style>
