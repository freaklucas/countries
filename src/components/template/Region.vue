<template>
  <div class="region">
    <Header />
    <div class="container">
      <ul>
        <select v-model="selected">
          <h3>Escolha região</h3>
          <option value="" disabled>Escolha uma opção</option>
          <option>Africa</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
        <button class="but" @click="toSearch">Pesquisar:</button>
        <div class="images">
          <span>Categoria selecionada:</span>
          <div class="imagens" v-for="image in images" :key="image.id">
            <img :src="`${image.flag}`" alt="" />
            {{ image.data[0].flag }} | {{ image.data }}
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
      region: {},
      selected: "",
      images: {},
      svg: {},
      elements: {},
    };
  },
  methods: {
    toSearch() {
      const headers = { "Content-Type": "application/json" };
      axios
        .get(`https://restcountries.com/v2/regionalbloc/${this.selected}`, {
          headers,
        })
        .then((res) => {
          this.region = res.data;
          this.images = res.data.json;
          // this.region = res.data;
          console.log(this.region);
          console.log(this.images);
        })
        .catch((e) => {
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