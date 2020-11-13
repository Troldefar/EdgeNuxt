<template>
  <div class="lowerHome">
    <v-card class="pa-3 mr-2 greenishBackground">
      <p>
        Team news
      </p>
      <hr class="mb-5">
    </v-card>
    <v-card class="pa-3 mr-2 blueishBackground">
      <p>
        Recent favorite game news
      </p>
      <hr class="mb-5">
    </v-card>
    <v-card class="pa-3 purpleishBackground">
      <p>
        Quickchat
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