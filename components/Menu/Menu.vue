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
      :class="item.title === 'Game' ? 'gameButton' : ''"
      class="pa-3 white-text menuTab"
      v-for="(item, index) in menuItems" 
      :key="index" 
      @click="route(item.title)"
      text
    >
      <v-icon small class="white-text">
        {{ item.icon }}
      </v-icon>
      <p>
        {{ item.title }}
      </p>
    </span>
    <v-btn
      small
      prepend-icon="mdi-logout"
      class="white-text logoutBtn"
      text
      @click="logout"
    >
      <v-icon>
        mdi-logout
      </v-icon>
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
          icon: 'mdi-data-matrix-edit'
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
  background: url('https://w.wallhaven.cc/full/j5/wallhaven-j5oe3y.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .gameButton {
    border-top: 1px solid white;
  }

  .menuTab:hover {
    color: black;
    background: rgb(204, 196, 196);
  }
}
</style>