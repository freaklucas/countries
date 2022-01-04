<template>
  <div class="region">
    <Header />
    <div class="container">
      <ul>
        <select v-model="selected">
          <h3>Escolha região</h3>
          <option value="" disabled>Escolha uma opção</option>
          <option v-for="reg in region" :key="reg.id">
            {{ reg.name }}
          </option>
        </select>
        <button class="but" @click="toSearch">Pesquisar:</button>
      </ul>
    </div>
    <div class="images">
      <div class="imagens" v-for="image in images" :key="image.id">
        {{ image.svg }}
      </div>
    </div>
    <span>Categoria selecionada:</span>
    <h3>
      {{ selected.flag }}
    </h3>
  </div>
</template>

<script>
import Header from "../template/Header.vue";
import axios from "axios";

export default {
  name: "Filters",
  components: {
    Header,
  },
  data() {
    return {
      region: [""],
      selected: "",
      images: [],
      svg: [],
      elements: [],
    };
  },
  created() {
    axios
      .get(`https://restcountries.com/v2/regionalbloc/eu/`)
      .then((res) => {
        this.region = res.data;
        console.log(this.region);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    toSearch() {
      this.$router.push({ name: this.selected });
    },
  },
};
</script>

<style>
select {
  margin-top: 20px;
  margin-left: 12px;
}
.text-center {
  margin-left: 24px;
}
</style>