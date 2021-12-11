<template>
  <nav class="menu">
    <ul>
      <h2 class="selects">Escolher por</h2>
      <select v-model="selected" class="selec">
        <option disabled value="">Escolha uma opção</option>
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
// import countries from "../../services/countries";

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
  // mounted() {
  //   countries.listar().then((res) => {
  //     console.log(res.data);
  //     this.region = res.data;
  //   });
  // },
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

.selects {
  font: semibold;
  color: blueviolet;
  margin-top: 18px;
  margin-bottom: 12px;
}
nav {
  margin-left: 2px;
}
</style>