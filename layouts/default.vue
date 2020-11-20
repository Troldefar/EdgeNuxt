<template>
  <v-app>
    <div class="main">
      <div v-if="loggedIn" class="menu">
        <Menu />
      </div>
      <div class="content">
        <UpperMenu style="margin-left:2px;" />
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
import UpperMenu from '@/components/Menu/UpperMenu';
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
  background: white !important;
}


.logText {
  font-size: 0.7rem;
}

.main {
  height: 100%;
  display: flex;
  background: #2E4397;
  background: -webkit-linear-gradient(top left, #2E4397, #3675FF);
  background: -moz-linear-gradient(top left, #2E4397, #3675FF);
  background: linear-gradient(to bottom right, #2E4397, #3675FF);
  .menu {
    flex: 1;
    background-color: #111c33;
    box-shadow: 0px 0px 0px 2px black;
    .CurrentUser {
      position: absolute;
      bottom: 10px;
      width: 100%;
    }
  }
  .content {
    flex: 10;
    .userMenu {
      background-color: #14213d;
      position: relative;
      box-shadow: 0px 0px 0px 2px black;
      .userBellContainer {
        position: absolute;
        right: 25px;
        top: 35%;
      }
    }
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