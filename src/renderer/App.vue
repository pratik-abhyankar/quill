<template>
  <div id="app">
    <v-app>
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'quill'
  }
</script>

<style>
  /* CSS */
</style>
