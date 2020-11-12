<template>
  <div class="middleHome" style="margin: 30px 0px;">
    <v-card class="pa-5 mr-2 earth">
      <p>
        Quick overview
      </p>
    </v-card>
    <v-card class="pa-5">
      <p>
        Logs overview
      </p>
      <hr class="mt-2 mb-2">
      <p class="logText">
        10:22 - Team member (Josh) just won a game!
      </p>
      <p class="logText">
        09:56 - Team member (Random dude) just lost a game!
      </p>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.middleHome {
  display: flex;
  height: 40vh;

  .earth {
    background: url('https://w.wallhaven.cc/full/lq/wallhaven-lqygzl.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    p {
      z-index: 100;
      color: white;
    }
  }

  .logText {
    font-size: 0.7rem;
  }

  div {
    flex: 1;
  }
}
</style>