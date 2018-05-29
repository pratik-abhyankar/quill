<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs10 sm6 md5 lg4>
          <v-card class="elevation-24">
            <v-card-text>
              <div class="headline text-xs-center">Login</div>
              <v-form>
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
              <v-btn color="primary" block>Login</v-btn>
            </v-card-actions>
            <v-card-actions>
              <div class="body-1">
                <router-link to="forgot-password-page">Forgot Password?</router-link>
              </div>
              <v-spacer></v-spacer>
              <div class="body-1">
                Don't have a profile yet? 
                <router-link to="create-profile-page" class="router-link">
                  Create new!
                </router-link>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
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
  .content {
    background-image: url('~@/assets/login-background.jpg');
    background-size: cover;
  }
  .container {
    background-color: rgba(25, 118, 210, 0.25);
  }
  .card {
    background-color: rgba(255, 255, 255, 0.75);
  }
</style>
