<template>
  <div dark class="UserInformation mt-5 mb-5">
    <span text to="/profile" x-small class="menuTab userInfoName">
      {{ user.name }}
    </span>
    <div class="menuTab">
      Status: 
      <span class="green--text">
        Online
      </span>
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
}

.userInfoName {
  text-transform: capitalize;
}
</style>