<template>
  <Header />
  <div class="container-size" />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

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
  a {
    text-decoration: none;
  }
  body {
    margin: unset;
  }
  .container-size{
    min-height: 100vh;
  }
  .container{
    min-width: 80%;
  }
  .centralize {
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .centralize-between {
    justify-content: space-between;
    display: flex;
    align-items: start;
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
