<template>
  <div class="fil">
    <select>
      <option value="" disabled selected>Escolha uma opção</option>
      <option value="" v-for="reg in region" :key="reg.id">
        {{ reg.name }}
      </option>
    </select>
  </div>
</template>

<script>
import countries from "../../services/countries";

export default {
  name: "Filters",
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