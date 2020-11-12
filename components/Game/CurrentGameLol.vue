<template>
  <div>
    <v-switch
      v-model="voiceChat"
      label="Voice chat"
    />
    <v-switch
      v-model="tryhard"
      label="Tryhard"
    />
    <v-switch
      v-model="multipleGames"
      label="Multiple games (Possibly)"
    />
    <v-switch
      v-model="aram"
      label="ARAM"
    />
    <v-switch
      v-model="tft"
      label="Team fight tactics"
    />
    <v-switch
      v-model="ranked"
      label="Ranked"
    />
    <v-switch
      v-model="normal"
      label="Normal"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      voiceChat: false,
      tryhard: false,
      multipleGames: false,
      aram: false,
      tft: false,
      ranked: false,
      normal: false
    }
  }
}
</script>

<style>

</style>