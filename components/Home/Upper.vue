<template>
  <div class="upperHome">
    <v-card class="pa-3 mr-2 greenishBackground">
      <p>
        Recently played games
      </p>
      <hr class="mb-5">
    </v-card>
    <v-card class="pa-3 mr-2 blueishBackground">
      <p>
        Recently wins
      </p>
      <hr class="mb-5">
    </v-card>
    <v-card class="pa-3 purpleishBackground">
      <p>
        Recently played people
      </p>
      <hr class="mb-5">
    </v-card>
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