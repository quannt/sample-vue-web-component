<template>
  <div class="container">
    <section class="header">
       <img src='../assets/idf-logo-full.svg' />
    </section>
    <section>UX Daily is the world’s largest free online 
        resource on UX Design by the Interaction Design Foundation. Become a member and get 3 months free!
    </section>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Article',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.header {
    padding: 10.2px 50px 20.9px 50px;
}

</style>
