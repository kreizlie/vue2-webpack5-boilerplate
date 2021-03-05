<template>
  <div class="box">
    <v-btn v-on:click="gotoHome()">Home</v-btn>
    <v-btn disabled>About</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'About',

    methods: {
      gotoHome () {
        this.$router.push('home')
      }
    }
  }
</script>

<style scoped>
  .box {
    background: #ec4f43;
  }
</style>
