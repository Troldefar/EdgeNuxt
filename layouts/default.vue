<template>
  <v-app>
    <div class="main">
      <div v-if="loggedIn" class="menu">
        <Menu />
      </div>
      <div class="content">
        <span v-if="msg !== ''" class="notificationDiv pa-2">
          {{ msg }}
        </span>
        <nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>

import Menu from '@/components/Menu/Menu';
import User from '@/components/Menu/User';
import { mapGetters } from 'vuex';

export default {
  components: {
    Menu,
    User
  },
  computed: {
    ...mapGetters({
      loggedIn: 'user/logged',
      msg: 'notifications/msg'
    })
  },
  beforeCreate() {
    if(!this.loggedIn) {
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">

.v-application p {
  margin: 0 !important
}

.greenishBackground {
  background: rgb(43, 143, 46);
}

.blueishBackground {
  background: rgb(36, 92, 142);
}

.purpleishBackground {
  background: rgb(103, 36, 103);
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Roboto:ital,wght@1,300&display=swap');

/* width */
::-webkit-scrollbar {
  width: 0px !important;
}

/* Coolors */

:root {
  --main-color: #3f5872;
  --main-font: #f0efeb;
  --main-font-size: 1rem;
}

html, body {
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

#__nuxt, #__layout {
  height: 100%;
}

.logText {
  font-size: 0.7rem;
}

.main {
  height: 100%;
  display: flex;

  .menu {
    flex: 1;
    background: rgb(35, 34, 34);

    .CurrentUser {
      position: absolute;
      bottom: 10px;
      width: 100%;
    }
  }

  .content {
    flex: 10;
  }
}

@media screen and (max-width: 1100px) {
  body {
    display: none;
  }
}

.notificationDiv {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.8rem;
  background: rgb(44, 95, 48);
  border-radius: 5px;
  transition: all 0.3s ease-in;
  z-index: 1000;
  width: 30%;
  text-align: center;
}
</style>