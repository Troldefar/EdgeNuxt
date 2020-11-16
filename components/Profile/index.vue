<template>
  <div>
    User profile ;)
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  }
}
</script>

<style>

</style>