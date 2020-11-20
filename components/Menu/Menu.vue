<template>
  <div class="MenuComponent">
    <span class="pa-3">
      <v-icon small>
        mdi-graph-outline
      </v-icon>
      Dashboard
    </span>
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
      <v-icon small class="white-text mr-1">
        {{ item.icon }}
      </v-icon>
      {{ item.title }}
    </span>
    <v-btn
      small
      prepend-icon="mdi-logout"
      class="white-text logoutBtn pa-2"
      text
      @click="logout"
    >
      <v-icon small>
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
  height: 99.8%;

  .logoutBtn {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }

  .menuTab {
    font-size: 0.8rem;
    cursor: pointer;
  }
}
</style>