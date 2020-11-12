<template>
  <div class="main">
    <div class="menu">
      <Menu />
    </div>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>

import Menu from '@/components/Menu/Menu';
import User from '@/components/Menu/User';

export default {
  mounted () {
    this.$axios.get('/api/')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    Menu,
    User
  }
}
</script>

<style lang="scss">

/* Globals */

.mr-2 {
  margin-right: 5px;
}

.text-center {
  text-align: center;
}

.font-weight-light {
  font-weight: light;
}

.white-text {
  color: white;
}

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200&display=swap');

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
  font-family: 'Barlow Condensed', sans-serif;  
}

#__nuxt, #__layout {
  height: 100%;
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
    flex: 8;
    position: relative;
  }
}

.pa-10 {
  padding: 1rem;
}

@media screen and (max-width: 1100px) {
  body {
    display: none;
  }
}
</style>