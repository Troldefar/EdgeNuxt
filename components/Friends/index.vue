<template>
  <div>
    <h2 class="font-weight-light">
      Friends
    </h2>
    <v-btn x-small class="mb-2" color="primary">
      Friend requests (0)
    </v-btn>
    <hr class="mb-4">
    <div>
      <v-text-field 
        v-model="search"
        dense
        :search-input.sync="search"
        outlined
        label="Search for a user"
        :debounce-search="0"
      />
    </div>
    <div class="usersFound">
      Users found:
      <v-card class="pa-5 mb-2" v-for="(item, index) in users" :key="index">
        {{ item.name }} 
        <hr class="mt-2">
        {{ item.email }} 
        <br>
        <v-btn v-if="!checkIfFriends(item.id)" color="green" small class="mt-2" dark @click="befriend(item)">
          Befriend
        </v-btn>
        <v-btn v-else color="green" disabled small class="mt-2" dark @click="befriend(item)">
          Already friends
        </v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  fetch() {
    this.$store.dispatch('users/all', this.search);
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    async befriend (value) {
      try {
        await this.$store.dispatch('users/invite', { user_id: this.user.id, friend_id: value.id })
        this.$store.commit('notifications/add', 'Friend request sended');
      } catch (e) {
        this.$store.commit('notifications/add', e);
      }
    },
    checkIfFriends (value) {
      console.log(value);
    }
  },
  computed: {
    ...mapGetters({
      users: 'users/all',
      user: 'user/user',
      invites: 'users/invites'
    })
  },
  watch: {
    search() {
      this.$fetch();
    },
    deep: true
  },
  async created () {
    await this.$store.dispatch('users/checkFriendRequests', this.user.id);
  }
}
</script>

<style>
.usersFound {
  height: 70vh;
  overflow-y: auto;
}
</style>