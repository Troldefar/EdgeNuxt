<template>
  <div class="pa-10 themeContainer">
    <v-dialog
      v-model="dialog"
      content-class="customizeTheme"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          dark 
          v-bind="attrs"
          color="primary"
          v-on="on"
        >
          Customize
        </v-btn>
      </template>
      <v-card class="customizeTheme pa-10">
        <h2 class="font-weight-light text-center mb-2">
          Customize
        </h2>
        <hr>
        <v-switch
          v-model="darkMode"
          label="Dark mode"
        />
        <v-switch
          v-model="notifications"
          label="Notifications"
        />
        <v-switch
          v-model="readyToGame"
          label="Ready to game"
        />
        <v-switch
          v-model="visible"
          label="Visible"
        />
        <v-switch
          v-model="invitesAllowed"
          label="Invites allowed"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
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

<style lang="scss">
.themeContainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .customizeTheme {
    height: 60vh;
    width: 60vw;
    background: red;
  }
}
</style>