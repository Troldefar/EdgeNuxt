<template>
  <div>
    <h2 class="font-weight-light">
      Logs
    </h2>
    <hr class="mb-4">
    <div>
      <p>Here you can see a detailed view of what happended throughout your account.</p>
    </div>
    <v-btn @click="getLogs" class="mt-2" small color="green">
      Refresh
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    getLogs () {
      this.$store.dispatch('logs/test');
    }
  },
  computed: {
    logs () {
      return this.$store.state.logs
    },
    ...mapGetters({
      logs: 'logs/all'
    })
  },
  mounted () {
    this.$store.dispatch('logs/all')
  }
}
</script>

<style>

</style>