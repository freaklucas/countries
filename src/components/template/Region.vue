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
    <h3>Selecione a região</h3>
    <Menu />
  </nav>
</template>

<script>
import countries from "../../services/countries";
import Menu from "../template/Menu.vue";

export default {
  name: "Filters",
  components: {
    Menu,
  },
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