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
  }
}
</script>

<style lang="scss">
.profileContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9%;

  .saveButton {
    width: 100%;
  }
}
</style>