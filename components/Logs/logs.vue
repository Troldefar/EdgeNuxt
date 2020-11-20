<template>
  <div class="logsContainer pa-10">
    <h2 class="font-weight-light">
      User activity
    </h2>
    <hr class="mb-4">
    <div class="inner">
      <v-card class="mb-2 pa-5" v-for="(item, index) in logs" :key="index">
        {{ item.text }}
        <br>
        <span v-if="item.created_at">
          {{ new Date(item.created_at).toLocaleString() }}
        </span>
      </v-card>
    </div>
    <h2 class="font-weight-light mt-4">
      Game activity
    </h2>
    <div class="inner">
      <v-card class="mb-2 pa-5" v-for="(item, index) in games" :key="index">
        Completed
        <br>
        <span v-if="item.created_at">
          {{ new Date(item.created_at).toLocaleString() }}
        </span>
      </v-card>
    </div>
    <hr class="mb-4">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      logs: 'logs/logs',
      games: 'game/games'
    })
  },
  async fetch () {
    await this.$store.dispatch('game/all');
    await this.$store.dispatch('logs/all');
  }
}
</script>

<style lang="scss">
.logsContainer {
  height: 100% !important;
  .inner {
    height: 35vh;
    overflow-y: auto;
  }
}
</style>