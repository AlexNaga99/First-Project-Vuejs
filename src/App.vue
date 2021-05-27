<template>
  <Header />
  <div class="teste" />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    margin: unset;
  }
  .teste{
    height: 150vh
  }
  .centralize {
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .full-width {
    width: 100%;
  }
  .full-height {
    height: 100%;
  }
  .full-size {
    height: 100%;
    width: 100%;
  }
</style>
