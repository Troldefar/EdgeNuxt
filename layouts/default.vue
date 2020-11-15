<template>
  <v-app>
    <div class="main">
      <div v-if="isLoggedIn" class="menu">
        <Menu />
      </div>
      <div class="content">
        <nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>

import Menu from '@/components/Menu/Menu';
import User from '@/components/Menu/User';

export default {
  components: {
    Menu,
    User
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.user.isLoggedIn
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
    height: 100%;
    position: relative;
    background: rgb(35, 34, 34);

    .CurrentUser {
      position: absolute;
      bottom: 10px;
      width: 100%;
    }
  }

  .content {
    flex: 9;
    position: relative;
  }
}

@media screen and (max-width: 1100px) {
  body {
    display: none;
  }
}
</style>