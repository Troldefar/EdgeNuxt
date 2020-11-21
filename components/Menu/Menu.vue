<template>
  <div class="MenuComponent">
    <span class="text-center mt-2" style="height:20vh;">
      Dashboard
    </span>
    <span
      color="primary"
      small
      :class="item.title === 'Game' ? 'gameButton' : ''"
      class="mb-5 ml-4 white-text menuTab"
      v-for="(item, index) in menuItems" 
      :key="index" 
      @click="route(item.title)"
      text
    >
      <v-icon small class="white-text mr-4 ml-3">
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
          icon: 'mdi-wave'
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
  color: rgb(156, 148, 148);
  text-transform: uppercase;

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