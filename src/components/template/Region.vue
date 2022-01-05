<template>
  <div class="region">
    <Header />
    <div class="container">
      <ul>
        <select v-model="selected">
          <h3>Escolha região</h3>
          <option value="" disabled>Escolha uma opção</option>
          <option>EU</option>
          <option>EFTA</option>
          <option>CARICOM</option>
          <option>PA</option>
          <option>AU</option>
          <option>USAN</option>
          <option>EEU</option>
          <option>AL</option>
          <option>ASEAN</option>
          <option>CAIS</option>
          <option>CEFTA</option>
          <option>NAFTA</option>
          <option>SAARC</option>
        </select>
        <button class="but" @click="toSearch">Pesquisar:</button>
        <div class="images">
          <span>Categoria selecionada:</span>
          <div class="imagens" v-for="image in images" :key="image.flag">
            <img :src="image.data[0].flag" alt="" />
            {{ image.data[0].flag }}
          </div>
        </div>
      </ul>
    </div>
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
  created() {},
  methods: {
    toSearch() {
      axios
        .get(`https://restcountries.com/v2/regionalbloc/${this.selected}`)
        .then((res) => {
          this.region = res.data[0].flag;
          console.log(this.region);
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log(e);
        });
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