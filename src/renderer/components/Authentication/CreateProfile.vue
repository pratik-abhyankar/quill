<template>
  <v-layout align-center justify-center>
    <v-flex xs8 sm5 md4 lg3>
      <v-card class="elevation-24">
        <v-toolbar color="blue darken-4" dark>
          <div class="headline text-xs-center">New Profile</div>
          <v-spacer></v-spacer>
          <v-btn fab icon transparent :to="{name: 'login-page'}">
            <v-icon class="toolbar-fix">clear</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field 
              prepend-icon="email"
              name="email"
              label="Email"
              type="text">
            </v-text-field>
            <v-text-field 
              prepend-icon="person"
              name="username"
              label="Username"
              type="text">
            </v-text-field>
            <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              :type="passwordInput.type"
              :append-icon="passwordInput.icon"
              :append-icon-cb="togglePasswordVisiblity">
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Create</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      isPasswordVisible: false,
      passwordInput: { type: 'password', icon: 'visibility_off' }
    }),
    methods: {
      togglePasswordVisiblity () {
        this.isPasswordVisible = !this.isPasswordVisible
        this.passwordInput = (this.isPasswordVisible)
          ? { type: 'text', icon: 'visibility' }
          : { type: 'password', icon: 'visibility_off' }
      }
    }
  }
</script>

<style scoped>
  .card {
    background-color: rgba(255, 255, 255, 0.75);
  }

  /* The following fix is required to position the btn icon at the center. 
  This is a bug in Vuetify where the icon moves at the top due to height: inherit property */
  .toolbar-fix{
    height: auto;
    width: auto;
  }

  .router-link {
    color: #0D47A1; /* blue darken-4 color*/
  }
</style>
