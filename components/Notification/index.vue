<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      msg: 'notifications/msg'
    })
  }
}
</script>

<style>

</style>