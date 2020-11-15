<template>
  <div class="loginContainer">
    <v-form class="inputContainer pa-10">
      <h1 class="font-weight-light text-center mb-4">
        Edge
      </h1>
      <v-text-field type="email" prepend-icon="mdi-face-agent" label="Email" />
      <v-text-field prepend-icon="mdi-lock-check" type="password" label="Password" />
      <v-btn @click="tryLogin" small color="green" class="loginButton mt-4">
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  methods: {
    async tryLogin () {
      try {
        this.$store.state.user.isLoggedIn = true;
        this.$router.push('/');
        //await this.$store.dispatch('user/login');
      } catch (e) {
        alert(e);
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