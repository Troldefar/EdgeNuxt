<template>
  <div dark class="UserInformation">
    <p text x-small class="userInfoName font-weight-light" @click="openUser">
      {{ user.name }}
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