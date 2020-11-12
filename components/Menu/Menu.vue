<template>
  <div class="pa-10 MenuComponent">
    <v-btn 
      to="/"
      text
      dark
    >
      Edge
    </v-btn>
    <User />
    <span
      color="primary"
      small
      class="mt-2 mb-2 white-text menuTab"
      v-for="(item, index) in menuItems" 
      :key="index" 
      @click="route(item.title)"
      text
    >
      <v-icon small class="mr-2 white-text" style="color:white;">
        {{ item.icon }}
      </v-icon>
      {{ item.title }}
    </span>
  </div>
</template>

<script>

import User from '@/components/Menu/User';

export default {
  data () {
    return {
      menuItems: [
        {
          id: 1,
          title: 'Statistics',
          value: '/statistics',
          icon: 'mdi-chart-areaspline'
        },
        {
          id: 2,
          title: 'Themes',
          value: '/themes',
          icon: 'mdi-brush'
        },
        {
          id: 3,
          title: 'Friends',
          value: '/friends',
          icon: 'mdi-human-male-male'
        },
        {
          id: 4,
          title: 'Ranks',
          value: '/ranks',
          icon: 'mdi-clipboard-list-outline'
        },
        {
          id: 5,
          title: 'Badges',
          value: '/badges',
          icon: 'mdi-shield-half-full'
        },
        {
          id: 6,
          title: 'Earnings',
          value: '/earnings',
          icon: 'mdi-cash-register'
        },
        {
          id: 7,
          title: 'Logs',
          value: '/logs',
          icon: 'mdi-format-list-numbered'
        },
        {
          id: 8,
          title: 'Settings',
          value: '/settings',
          icon: 'mdi-cog-clockwise'
        },
        {
          id: 9,
          title: 'Teams',
          value: '/teams',
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

  .menuTab {
    cursor: pointer;
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