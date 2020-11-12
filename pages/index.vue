<template>
  <div class="pa-10 homeContainer">
    <Upper />
    <Middle />
    <Lower />
  </div>
</template>

<script>
import Upper from "@/components/Home/Upper";
import Middle from "@/components/Home/Middle";
import Lower from "@/components/Home/Lower";
export default {
  components: {
    Upper,
    Middle,
    Lower
  }
}
</script>

<style lang="scss">

</style>