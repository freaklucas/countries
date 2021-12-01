<template>
  <div id="app">
    <h2>Olá!!!</h2>
    <Teste />
    <div class="">
      <ul>
        <li v-for="reg in region" :key="reg.id">
          {{ reg.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Teste from "./components/Teste";

// import axios from "axios";

import countries from "./services/countries";

export default {
  name: "App",
  components: { Teste },
  data() {
    return {
      region: [],
    };
  },
  mounted() {
    // axios
    //   .get("https://restcountries.com/v2/regionalbloc/eu")
    //   .then((response) => (this.info = response));
    countries.listar().then((res) => {
      console.log(res.data);
      this.region = res.data;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  height: 100vh;
}

body {
  margin: 0;
}
</style>
