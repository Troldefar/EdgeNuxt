<template>
  <div class="upperHome">
    <v-card class="pa-3 mr-2 greenishBackground">
      <p>
        Recently played games
      </p>
      <hr>
      <p class="logText">
        10:22 - Completed a mythic+ dungeon (World of warcraft)
      </p>
      <p class="logText">
        04:20 - Completed a summoners rift game (League of legends)
      </p>
    </v-card>
    <v-card class="pa-3 mr-2 blueishBackground">
      <p>
        Recently wins
      </p>
      <hr>
      <p class="logText">
        10:22 - Completed a mythic+ dungeon (World of warcraft)
      </p>
      <p class="logText">
        04:20 - Completed (Won) a summoners rift game (League of legends)
      </p>
      <p class="logText">
        04:20 - Completed (Lost) a summoners rift game (League of legends)
      </p>
    </v-card>
    <v-card class="pa-3 purpleishBackground">
      <p>
        Recently played people
      </p>
      <hr>
      <p class="logText">
        10:22 - Daniel, Lasse, Martin (Hvem?), Nick
      </p>
      <p class="logText">
        04:20 - Daniel, Lasse, Martin (Hvem?), Nick
      </p>
    </v-card>
    <iframe src="https://discord.com/widget?id=776496209245241405&theme=dark" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.upperHome {
  display: flex;

  .greenishBackground {
    background: #2a9d8f;
  }

  .blueishBackground {
    background: #457b9d;
  }

  .purpleishBackground {
    background: #b5838d;
  }

  div {
    flex: 1;
  }
}
</style>