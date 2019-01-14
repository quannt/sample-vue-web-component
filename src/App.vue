<template>
  <div id="app">
    <Article />
  </div>
</template>

<script>
import Article from './pages/Article.vue'

export default {
  name: 'app',
  components: {
    Article
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
