<template>
  <div>
    <h2 class="font-weight-light">
      Teams
    </h2>
    <v-dialog
      v-model="dialog"
      content-class="customizeTheme"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          x-small 
          color="green" 
          class="mt-2 mb-2"
          v-on="on"
          v-bind="attrs"
        >
          Create team
        </v-btn>
      </template>
      <v-card class="customizeTheme pa-10">
        <h2 class="font-weight-light">
          Create your team
        </h2>
        <hr>
        <v-form class="mt-3">
          <v-text-field
            v-model="teamName" 
            dense
            outlined
            label="Team name"
          />
          <v-text-field
            v-model="teamDescription"
            dense
            outlined
            label="Description"
          />
          <v-btn 
            x-small 
            color="green" 
            class="mt-2 mb-2"
            @click="createTeam"
          >
            Create team
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
    <hr class="mb-4">
    <div class="teamOuter">
      <v-text-field
        dense
        outlined
        v-model="search"
        :search-input.sync="search"
        label="Search for team"
      />
      <div class="teamInner">
        <v-card 
          class="pa-5 mb-2" 
          v-for="(item, index) in teams" 
          :key="index"
        >
          {{ item.teamname }}
          <hr>
          {{ item.description }}
        </v-card>
      </div>
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
      search: '',
      dialog: false,
      teamName: '',
      teamDescription: ''
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
  },
  methods: {
    async createTeam () {
      try {
        await this.$store.dispatch('teams/store', { teamname: this.teamName, description: this.teamDescription});
        this.$store.commit('notifications/add', this.teamName + ' Was created!');
      } catch (e) {
        this.$store.commit('notifications/add', e.response.data);
      }
    }
  }
}
</script>

<style lang="scss">
.teamOuter {
  .teamInner {
    height: 50vh;
    overflow-y: auto;
  }
}
</style>