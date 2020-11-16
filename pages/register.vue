<template>
  <div class="registerContainer">
    <v-form class="inputContainer pa-10">
      <h1 class="font-weight-light text-center mb-4">
        Sign up for free
      </h1>
      <v-text-field 
        type="email" 
        @keyup="listenForValid" 
        v-model="name" 
        prepend-icon="mdi-tag-faces" 
        label="Name" 
      />
      <v-text-field 
        type="email" 
        @keyup="listenForValid" 
        v-model="email" 
        prepend-icon="mdi-face-agent" 
        label="Email" 
      />
      <v-text-field 
        prepend-icon="mdi-lock-check" 
        @keyup="listenForValid" 
        v-model="password" 
        type="password" 
        label="Password" 
      />
      <v-text-field 
        prepend-icon="mdi-lock-open" 
        @keyup="listenForValid" 
        v-model="conpw" 
        type="password" 
        label="Confirm password" 
      />
      <v-btn 
        @click="tryRegister" 
        small 
        color="green" 
        :disabled="pwmatchandemail" 
        class="loginButton mt-4"
      >
        Register
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      conpw: '',
      pwmatchandemail: true
    }
  },
  methods: {
    async tryRegister () {
      try {
        await this.$store.dispatch('user/register', { 
          email: this.email, 
          password: this.password, 
          name: this.name, 
          password_confirmation: this.conpw 
        });
        this.$store.dispatch('user/login', { email: this.email, password: this.password})
          .then(response => {    
            this.$router.push('/');
          })
          .catch(e => {
            throw new Error(e);
          })
      } catch (e) {
        alert(e);
      }
    },
    listenForValid () {
      if(
        this.email !== '' && 
        this.password !== '' && 
        this.conpw !== '' && 
        this.password === this.conpw 
        && this.password.length > 7 
        && this.conpw.length > 7
      ) {
        this.pwmatchandemail = false;
      }
    }
  }
}
</script>

<style lang="scss">
.registerContainer {
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