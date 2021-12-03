<template>
  <div class="home">
    <Header />
    <Menu />
    <!-- <Filters /> -->
  </div>
</template>

<script>
import Header from "../template/Header.vue";
import Menu from "../template/Menu.vue";
// import Filters from "../template/Filters.vue";

export default {
  name: "Home",
  components: {
    Header,
    Menu,
    // Filters,
  },
};
</script>

<style>
</style>