<template>
  <div>
    <v-switch
      v-model="voiceChatWow"
      label="Voice chat"
    />
    <v-switch
      v-model="raid"
      label="Raid"
    />
    <v-switch
      v-model="mythicPlus"
      label="Mythic+"
    />
    <v-switch
      v-model="arenaSkirmish"
      label="Arena (Skirmish)"
    />
    <v-switch
      v-model="arenaRanked"
      label="Arena (Ranked)"
    />
    <v-switch
      v-model="rgb"
      label="Rated battlegrounds"
    />
  </div>  
</template>

<script>
export default {
  data () {
    return {
      voiceChatWow: false,
      raid: false,
      mythicPlus: false,
      arenaSkirmish: false,
      arenaRanked: false,
      rgb: false
    }
  }
}
</script>

<style>

</style>