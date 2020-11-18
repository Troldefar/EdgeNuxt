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
    <hr class="mb-4">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      logs: 'logs/logs'
    })
  },
  async fetch () {
    await this.$store.dispatch('logs/all');
    this.$store.commit('notifications/add', 'Logs was fetched from server');
  },
}
</script>

<style lang="scss">
.logsContainer {
  height: 100% !important;
  .inner {
    overflow-y: auto;
    height: 30vh;
  }
}
</style>