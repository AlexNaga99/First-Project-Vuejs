<template>
  <div class="news-bar-area">
    
  </div>
</template>

<script>
  export default {
    name: 'NewsBar',
    props: {
      title: String,
      text: String,
    },
  }
</script>

<style scoped>
  .news-bar-area {
    height: 50px;
    width: 100%;
    background: #f7f7f7;
  }
</style>
