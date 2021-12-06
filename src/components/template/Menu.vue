<template>
  <nav class="menu">
    <ul>
      <h2>Teste</h2>
      <select v-model="selected">
        <option disabled value="">Selecione uma opção</option>
        <option v-for="reg in region" :key="reg">
          {{ reg.name }}
        </option>
      </select>
      <button class="but" @click="selectState(selected)">Pesquisar:</button>
      <select name="" id="">
        <!-- v-model="sectedImage" -->
        <option>
          {{ stateSelected }}
        </option>
        <option>Central</option>
        <option>São Paulo</option>
        <option>Portugues</option>
        <option>Brasil</option>
        <option>PT-BR</option>
      </select>
      <button class="but" @click="selectStateImage(sectedImage)">
        Pesquisar:
      </button>
      {{
        selectStateImg
      }}
      <hr />

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
    };
  },
  mounted() {
    countries.listar().then((res) => {
      console.log(res.data);
      this.region = res.data;
    });
  },
  methods: {
    selectState(selected) {
      this.stateSelected = selected;
    },
    selectStateImage(sectedImage) {
      this.selectStateImg = sectedImage;
    },
    getRegion() {},
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