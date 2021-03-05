<template>
  <div class="box">
    <v-btn disabled>Home</v-btn>
    <v-btn v-on:click="gotoAbout()">About</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    methods: {
      gotoAbout () {
        this.$router.push('about')
      }
    }
  }
</script>

<style scoped>
  .box {
    background: #007a79;
  }
</style>
