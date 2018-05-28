<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md5 lg4>
          <v-card class="elevation-24">
            <v-card-text>
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
              <v-spacer></v-spacer>
              <v-btn color="primary" block>Login</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
            <br>
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
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>
