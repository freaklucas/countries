<template>
  <nav class="region">
    <!-- <ul>
      <h2>Região</h2>
      <select>
        <option value="" disabled selected>Escolha uma opção</option>
        <option value="" v-for="reg in region" :key="reg.id">
          {{ reg.name }}
        </option>
      </select>
    </ul> -->
    <h3>Component Region</h3>
  </nav>
</template>

<script>
import countries from "../../services/countries";

export default {
  name: "Filters",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      region: [""],
    };
  },
  mounted() {
    countries.listar().then((res) => {
      console.log(res.data);
      this.region = res.data;
    });
  },
};
</script>

<style>
</style>