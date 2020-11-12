<template>
  <div class="lowerHome">
    <v-card class="pa-3 mr-2 greenishBackground">
      <p>
        Team news
      </p>
      <hr>
      <p class="logText">
        10:22 - Josh just joined the team, embrace him!
      </p>
      <p class="logText">
        04:20 - Josh left your group!
      </p>
      <p class="logText">
        00:20 - Martin (Hvem?) just invited Random guy to your group
      </p>
    </v-card>
    <v-card class="pa-3 mr-2 blueishBackground">
      <p>
        Recent favorite game news
      </p>
      <hr>
      <p class="logText">
        10:22 - Josh just joined the team, embrace him!
      </p>
      <p class="logText">
        04:20 - Josh left your group!
      </p>
    </v-card>
    <v-card class="pa-3 purpleishBackground">
      <p>
        Quickchat
      </p>
      <hr>
      <p class="logText mt-2 mb-2">
        10:22 - Josh: Wanna game? 
        <v-btn dark x-small color="primary">
          Reply
        </v-btn>
      </p>
      <p class="logText">
        04:20 - Lasse: Skal du med ud og ryge? 
        <v-btn dark x-small color="primary">
          Reply
        </v-btn>
      </p>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.lowerHome {
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