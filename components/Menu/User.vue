<template>
  <div dark class="UserInformation mt-5 mb-5">
    <p text to="/profile" x-small class="userInfoName font-weight-light">
      {{ user.name }}
    </p>
    <div>
      <p class="green--text font-weight-light">
        Online
      </p>
    </div>
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
.UserInformation {
  color: white;
  text-align: center;
}

.userInfoName {
  text-transform: capitalize;
}
</style>