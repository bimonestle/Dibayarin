<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MainPage from './components/MainPage';

export default {
  components: {
    'main-page': MainPage
  },
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<style>
  @import url('./src/assets/font.css');
  @font-face {
    font-family: "Proxima Nova";
    src: url('/src/assets/fonts/proxima-nova-regular.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: "Proxima Nova";
    src: url('/src/assets/fonts/proxima-nova-semibold.ttf');
    font-weight: bold;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Proxima Nova", sans-serif;
  }
  #app {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .icon {
    display: flex;
    color: #888888;
    overflow: hidden;
    font-size: 24px;
    vertical-align: center;
  }

  .icon.oninput {
    color: #a28ffd;
  }
  .dv_progress_bar {
    height: 48px !important;
  }
  .drag_verify {
    border: solid 1px #dddddd !important;
  }
</style>
