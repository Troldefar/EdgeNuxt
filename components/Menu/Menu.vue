<template>
  <div class="pa-5 MenuComponent">
    <v-btn 
      to="/"
      text
      dark
    >
      Edge
    </v-btn>
    <User />
    <p
      color="primary"
      small
      class="mt-2 mb-2 white-text menuTab"
      v-for="(item, index) in menuItems" 
      :key="index" 
      @click="route(item.title)"
      text
    >
      <v-icon class="mr-2 white-text">
        {{ item.icon }}
      </v-icon>
      {{ item.title }}
    </p>
  </div>
</template>

<script>

import User from '@/components/Menu/User';

export default {
  data () {
    return {
      menuItems: [
        {
          title: 'Game',
          icon: 'mdi-keyboard-variant'
        },
        {
          title: 'Statistics',
          icon: 'mdi-chart-areaspline'
        },
        {
          title: 'Themes',
          icon: 'mdi-brush'
        },
        {
          title: 'Friends',
          icon: 'mdi-human-male-male'
        },
        {
          title: 'Ranks',
          icon: 'mdi-clipboard-list-outline'
        },
        {
          title: 'Badges',
          icon: 'mdi-shield-half-full'
        },
        {
          title: 'Earnings',
          icon: 'mdi-cash-register'
        },
        {
          title: 'Logs',
          icon: 'mdi-format-list-numbered'
        },
        {
          title: 'Settings',
          icon: 'mdi-cog-clockwise'
        },
        {
          title: 'Teams',
          icon: 'mdi-handshake'
        }
      ]
    }
  },
  components: {
    User
  },
  methods: {
    route (value) {
      this.$router.push(`/${value}`);
    }
  }
}
</script>

<style lang="scss">
.MenuComponent {
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;

  .menuTab {
    cursor: pointer;
    font-size: 0.7rem;
    transition: all 0.3s ease-in;
  }

  .menuTab:hover {
    color: rgb(44, 121, 148);
  }

  .mt-2 {
    margin-top: 5%;
  }

  .mb-2 {
    margin-bottom: 5%;
  }
}
</style>