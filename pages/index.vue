<template>
  <div class="pa-10 homeContainer">
    <Upper class="upper" />
    <Middle class="lower" />
  </div>
</template>

<script>
import Upper from "@/components/Home/Upper";
import Middle from "@/components/Home/Middle";

export default {
  components: {
    Upper,
    Middle
  }
}
</script>

<style lang="scss">
.homeContainer {
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  .upper {
    flex: 2;
  }
  .lower {
    flex: 1;
  }
}
</style>