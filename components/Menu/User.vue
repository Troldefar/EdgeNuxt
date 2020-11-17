<template>
  <div dark class="UserInformation mt-5 mb-5">
    <p text x-small class="userInfoName font-weight-light" @click="openUser">
      {{ user.name }}
      <v-icon x-small color="green" class="mb-1">
        mdi-checkbox-blank-circle
      </v-icon>
    </p>
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
  methods: {
    openUser() {
      this.$router.push(`/profile`);
    }
  }
}
</script>

<style>
.UserInformation {
  color: white;
  text-align: center;
}

.userInfoName {
  cursor: pointer;
  text-transform: capitalize;
}
</style>