<template>
  <div class="pa-10 themeContainer">
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
      <v-card class="customizeTheme">
        wow
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="scss">
.themeContainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .customizeTheme {
    height: 60vh;
    width: 60vh;
  }
}
</style>