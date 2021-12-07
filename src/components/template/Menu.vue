<template>
  <nav class="menu">
    <ul>
      <select v-model="selected">
        <option disabled value="">Filtrar por</option>
        <option value="region">Região</option>
        <option value="capital">Capital</option>
        <option value="lenguage">Lingua</option>
        <option value="country">País</option>
        <option value="code">Código</option>
      </select>
      <button class="but" @click="toRegion">Pesquisar:</button>
      <div class="images">
        <img src="@/assets/images/bandeirabr.png" alt="bandeira do brasil" />
        <img src="@/assets/images/bandeiraAl.png" alt="bandeira da alemanha" />
        <img src="@/assets/images/bandeiraJp.png" alt="bandeira do japão" />
      </div>
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

.images {
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin-top: 50px;
}
</style>