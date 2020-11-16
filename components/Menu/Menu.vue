<template>
  <div class="MenuComponent">
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
      class="pa-3 white-text menuTab"
      v-for="(item, index) in menuItems" 
      :key="index" 
      @click="route(item.title)"
      text
    >
      <v-icon class="mr-2 white-text">
        {{ item.icon }}
      </v-icon>
      {{ item.title }}
    </span>
    <v-btn
      small
      prepend-icon="mdi-logout"
      class="mt-4 white-text menuTab logoutBtn"
      @click="logout"
    >
      <v-icon small class="mr-1">
        mdi-logout
      </v-icon>
      Logout
    </v-btn>
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
          title: 'Friends',
          icon: 'mdi-human-male-male'
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
    },
    async logout () {
      try {
        await this.$store.dispatch('user/logout');  
        this.$router.push('/login');
      } catch (e) {
        this.$store.commit('notifications/add', e);
      }
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
  position: relative;
  height: 100%;

  .logoutBtn {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }

  .menuTab {
    cursor: pointer;
    font-size: 0.7rem;
    transition: all 0.3s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menuTab:hover {
    color: rgb(44, 121, 148);
  }
}
</style>