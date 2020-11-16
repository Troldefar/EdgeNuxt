<template>
  <div class="loginContainer">
    <v-form class="inputContainer pa-10">
      <h1 class="font-weight-light text-center mb-4">
        Edge
      </h1>
      <v-text-field type="email" v-model="email" prepend-icon="mdi-face-agent" label="Email" />
      <v-text-field prepend-icon="mdi-lock-check" v-model="password" type="password" label="Password" />
      <v-btn x-small color="blue" to="/register">
        New around here?
      </v-btn>
      <v-btn @click="tryLogin" :loading="loginLoad" small color="green" class="loginButton mt-4">
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      loginLoad: false
    }
  },
  methods: {
    async tryLogin () {
      this.loginLoad = true;
      try {
        await this.$store.dispatch('user/login', { email: this.email, password: this.password});
        this.$router.push('/');
        this.loginLoad = false;
      } catch (e) {
        alert(e);
        this.loginLoad = false;
      }
    }
  }
}
</script>

<style lang="scss">
.loginContainer {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url('https://w.wallhaven.cc/full/rd/wallhaven-rd3pjw.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .inputContainer {
    background: rgb(49, 67, 107);
    border-radius: 10px;

    .loginButton {
      width: 100%;
    }
  }
}
</style>