<template>
  <div>
    <v-switch
      v-model="voiceChat"
      label="Voice chat"
    />
    <v-switch
      v-model="tryHard"
      label="Tryhard"
    />
    <v-switch
      v-model="multipleGames"
      label="Multiple games (Possibly)"
    />
    <v-switch
      v-model="wingman"
      label="Wingman"
    />
    <v-switch
      v-model="fiveVersusFive"
      label="5 vs 5 ranked"
    />
    <v-switch
      v-model="deathmatch"
      label="Deathmatch"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      voiceChat: false,
      tryHard: false,
      multipleGames: false,
      wingman: false,
      fiveVersusFive: false,
      deathmatch: false
    }
  }
}
</script>

<style>

</style>