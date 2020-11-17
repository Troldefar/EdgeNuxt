<template>
  <div class="logsContainer">
    <h2 class="font-weight-light">
      User activity
    </h2>
    <hr class="mb-4">
    <v-card class="mb-2 pa-3" v-for="(item, index) in logs" :key="index">
      {{ item.text }}
      <br>
      <span v-if="item.created_at">
        {{ new Date(item.created_at).toLocaleString() }}
      </span>
    </v-card>
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
  },
}
</script>

<style>
.logsContainer {
  height: 90vh;
  overflow-y: auto;
}
</style>