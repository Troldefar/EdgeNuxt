<template>
  <div>
    <div>
      <h2 class="font-weight-light">
        Setup accounts
      </h2>
      <hr class="mr-2 mb-2">
      <div v-for="(item, index) in settingButtons" :key="index" class="setupContainer mb-1">
        <div>
          <v-dialog
            v-model="dialog"
            content-class="customizeTheme"
          >
            <template v-slot:activator="{ on, attrs }">
            <v-btn 
              v-bind="attrs"
              color="primary"
              v-on="on"
              small
              @click="setup(item.title)"
            >
              Setup {{ item.title }}
            </v-btn>
            </template>
            <v-card class="customizeTheme pa-10">
              <h2 class="font-weight-light text-center mb-2">
                Setup {{ currentSetup }}
              </h2>
              <hr class="mb-4">
              <v-btn color="primary" class="mb-2" small>
                Link account
              </v-btn>
              <br>
              <v-btn color="primary" small>
                Manage this account
              </v-btn>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
    <div>
      <h2 class="font-weight-light mt-4">
        Additional settings
      </h2>
      <hr class="mr-2 mb-2">
      <v-dialog
        v-model="setupDialog"
        content-class="customizeTheme"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            dark
            small
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      settingButtons: [
        {
          title: 'Discord',
          img: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111370.svg',
          text: 'Setup discord'
        },
        {
          title: 'Battle.net',
          img: 'https://www.flaticon.com/svg/static/icons/svg/528/528114.svg',
          text: 'Setup discord'
        },
        {
          title: 'Riot',
          img: 'https://www.flaticon.com/svg/static/icons/svg/3750/3750075.svg',
          text: 'Setup discord'
        },
        {
          title: 'Steam',
          img: 'https://www.flaticon.com/svg/static/icons/svg/3/3782.svg',
          text: 'Setup discord'
        }
      ],
      currentSetup: null,
      setupDialog: false,
      dialog: false,
      darkMode: true,
      notifications: false,
      readyToGame: false,
      visible: false,
      invitesAllowed: false
    }
  },
  methods: {
    setup (value) {
      this.currentSetup = value
    }
  }
}
</script>

<style lang="scss">
.setupContainer{
  display: flex;
  flex-direction: column;
}
</style>