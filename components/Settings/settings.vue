<template>
  <div>
    <div>
      <h2 class="font-weight-light">
        Setup accounts
      </h2>
      <hr class="mr-2 mb-2">
      <div v-for="(item, index) in settingButtons" :key="index" class="setupContainer mb-10">
        <span v-if="item.title === 'Discord'">
          <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111370.svg" height="50" width="50" />
        </span>
        <span v-else-if="item.title === 'Battle.net'">
          <img src="https://www.flaticon.com/svg/static/icons/svg/528/528114.svg" height="50" width="50" />
        </span>
        <span v-else-if="item.title === 'Riot'">
          <img src="https://www.flaticon.com/svg/static/icons/svg/3750/3750075.svg" height="50" width="50" />
        </span>
        <span v-else-if="item.title === 'Steam'">
          <img src="https://www.flaticon.com/svg/static/icons/svg/3/3782.svg" height="50" width="50" />
        </span>
        {{ item.title }}
        <div>
          <v-btn 
            color="primary" 
            small
            @click.prevent="setup(item.title)"
          >
            Setup
          </v-btn>
        </div>
      </div>
    </div>
    <div>
      <h2 class="font-weight-light mt-4">
        Additional settings
      </h2>
      <hr class="mr-2 mb-2">
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
      currentSetup: null
    }
  },
  methods: {
    setup (value) {
      currentSetup = value;
    }
  }
}
</script>

<style lang="scss">
.setupContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>