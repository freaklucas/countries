<template>
  <nav class="menu">
    <ul>
      <h2>Teste</h2>
      <select v-model="selected">
        <option disabled value="">Selecione uma opção</option>
        <option value="region">Região</option>
        <option value="capital">Capital</option>
        <option value="lenguage">Lingua</option>
        <option value="country">País</option>
        <option value="code">Código</option>
      </select>
      <button class="but" @click="toRegion">Pesquisar:</button>
      <!-- <h2>Usando router-link:</h2>
      <router-link to="/region" tag="button">Pesquisar</router-link> -->
    </ul>
  </nav>
</template>

<script>
import countries from "../../services/countries";

export default {
  data() {
    return {
      name: {},
      id: 1,
      selected: "",
      stateSelected: "",
      sectedImage: "",
      selectStateImg: "",
      region: [""],
      Region: [],
    };
  },
  created() {
    this.getRegion();
  },
  mounted() {
    countries.listar().then((res) => {
      console.log(res.data);
      this.region = res.data;
    });
  },
  methods: {
    // selectState(selected) {
    //   this.stateSelected = selected;
    // },s
    toRegion() {
      this.$router.push({ name: this.selected });
    },
  },
};
</script>

<style>
.but {
  margin: 12px 12px 12px 12px;
  background-color: cadetblue;
  font-family: bold;
  text-align: center;
}
</style>