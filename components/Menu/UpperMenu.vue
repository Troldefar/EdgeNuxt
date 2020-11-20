<template>
  <div v-if="loggedIn" class="userMenu">
    <v-btn to="/" x-small class="mr-1 ml-2" color="primary">
      Edge
    </v-btn>
    <v-btn x-small to="/profile" color="primary">
      {{ user.name }}
    </v-btn>
    <v-badge
      class="userBellContainer"
      overlap
      :color="notifications.length > 0 ? 'error' : 'green'"
      content="0"
    >
      <v-icon small class="userBell">
        mdi-bell
      </v-icon>
    </v-badge>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      loggedIn: 'user/logged',
      user: 'user/user',
      notifications: 'notifications/all'
    })
  }
}
</script>

<style>
.userMenu {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
} 
</style>