<template>
  <v-content>
    <v-container fluid fill-height>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-container>
  </v-content>
</template>

<style scoped>
  .content {
    background-image: url('~@/assets/login-background.jpg');
    background-size: cover;
  }

  .container {
    /* background-color: rgba(25, 118, 210, 0.2); */
    background-color: rgba(30, 30, 30, 0.3);
  }
</style>
