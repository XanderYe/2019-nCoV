<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>

import Main from "./components/Main";
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
    background-color: #EFEFEF;
  }
</style>
