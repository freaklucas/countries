<template>
  <div class="home">
    <Header />
    <Menu />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from "../template/Header.vue";
import Menu from "../template/Menu.vue";

export default {
  name: "Home",
  components: {
    Header,
    Menu,
  },
};
</script>

<style>
</style>