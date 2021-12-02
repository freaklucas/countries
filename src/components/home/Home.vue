<template>
  <div class="home">
    <Header />
    <Filters />
  </div>
</template>

<script>
import Header from "../template/Header.vue";
import Filters from "../template/Filters.vue";
export default {
  name: "Home",
  components: {
    Header,
    Filters,
  },
};
</script>

<style>
</style>