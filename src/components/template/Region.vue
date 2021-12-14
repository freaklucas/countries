<template>
  <div class="region">
    <Header />
    <div class="container">
      <ul>
        <select v-model="selected">
          <h3>Escolha região</h3>
          <option value="" disabled selected>Escolha uma opção</option>
          <option value="" v-for="reg in region" :key="reg.id">
            {{ reg.name }}
          </option>
        </select>
        <button class="but" @click="toSearch">Pesquisar:</button>
      </ul>
    </div>
    <div class="images">
      <img src="@/assets/images/bandeirabr.png" alt="bandeira do brasil" />
      <img src="@/assets/images/bandeiraAl.png" alt="bandeira da alemanha" />
      <img src="@/assets/images/bandeiraJp.png" alt="bandeira do japão" />
      <h3>Teste de image</h3>
      <div class="imagens" v-for="image in images" :key="image.id">
        {{ image.svg }}
      </div>
    </div>
    <div class="img">
      <h3>Teste de image2</h3>
      <div class="imagens" v-for="image in images" :key="image.id">
        {{ image.data.flag }}
      </div>
      <div class="segundo" v-for="element in elements" :key="element.name">
        {{ element.name }}
      </div>
    </div>
  </div>
</template>

<script>
// import countries from "../../services/countries";
import Header from "../template/Header.vue";
import axios from "axios";
// import Menu from "../template/Menu.vue";

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
  // mounted() {
  //   countries.listar().then((res) => {
  //     console.log(res.data);
  //     this.region = res.data;
  //   });
  // },

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

    console.log(this.selected);
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
</style>