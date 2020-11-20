<template>
  <div>
    <h2 class="font-weight-light">
      Teams
    </h2>
    <hr class="mb-4">
    <div>
      <v-text-field
        dense
        outlined
        v-model="search"
        :search-input.sync="search"
        label="Search for team"
      />
      <v-card 
        class="pa-5 mb-2" 
        v-for="(item, index) in teams" 
        :key="index"
      >
        {{ item }}
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      teams: 'teams/all'
    })
  },
  data () {
    return {
      search: ''
    }
  },
  fetch() {
    this.$store.dispatch('teams/all', this.search);
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

</style>