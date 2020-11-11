<template>
  <div class="main">
    <Menu />
    <nuxt />
  </div>
</template>

<script>

import Menu from '@/components/Menu/Menu';

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
    Menu
  }
}
</script>

<style lang="scss">

/* width */
::-webkit-scrollbar {
  width: 0px !important;
}

/* Coolors */

:root {
  --main-color: #202c39;
  --main-font: #f0efeb;
  --main-font-size: 1rem;
}

html, body {
  height: 100%;
}

#__nuxt, #__layout {
  height: 100%;
}

.main {
  background-color: var(--main-color);
  height: 100%;
}

.pa-10 {
  padding: 1rem;
}
</style>