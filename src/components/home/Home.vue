<template>
  <div class="home">
    <Header />
    <!-- <div class="">
      <ul>
        <li v-for="reg in region" :key="reg.id">
          {{ reg.name }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import Header from "../template/Header.vue";
// import countries from "./services/countries";

export default {
  components: {
    Header,
  },
  //   data() {
  //     return {
  //       region: [],
  //     };
  //   },
  //   mounted() {
  //     countries.listar().then((res) => {
  //       console.log(res.data);
  //       this.region = res.data;
  //     });
  //   },
};
</script>

<style>
</style>