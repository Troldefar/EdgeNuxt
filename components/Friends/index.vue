<template>
  <div>
    <h2 class="font-weight-light">
      Friends
    </h2>
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
        <v-btn color="green" small class="mt-2" dark @click="befriend(item.id)">
          Befriend
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
    befriend (value) {
      console.log(value);
    }
  },
  computed: {
    ...mapGetters({
      users: 'users/all'
    })
  },
  watch: {
    search() {
      this.$fetch();
    },
    deep: true
  }
}
</script>

<style>
.usersFound {
  height: 70vh;
  overflow-y: auto;
}
</style>