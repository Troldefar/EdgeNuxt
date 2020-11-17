<template>
  <div class="profileContainer">
    <v-card class="pa-10">
      <v-text-field
        dense
        outlined
        disabled
        v-model="user.name" 
      />
      <v-text-field
        dense
        outlined
        disabled
        v-model="user.email" 
      />
      <v-btn 
        small 
        color="green saveButton" 
        disabled
      >
        Save
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  mounted () {
    this.$store.commit('notifications/add', 'User fetched');
  }
}
</script>

<style lang="scss">
.profileContainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .saveButton {
    width: 100%;
  }
}
</style>