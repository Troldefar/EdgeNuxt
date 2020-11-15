<template>
  <div class="pa-10">
    <Settings />
  </div>
</template>

<script>
import settings from '@/components/Settings/settings'
export default {
  components: [
    settings
  ],
  data () {
    return {
      dialog: false,
      darkMode: true,
      notifications: false,
      readyToGame: false,
      visible: false,
      invitesAllowed: false
    }
  }
}
</script>

<style>

</style>