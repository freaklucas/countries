<template>
  <nav class="menu">
    <ul>
      <!-- <h2>Filtrar por</h2> -->
      <!-- <router-link to="/region" tag="select" active-class="active" exact>
        <option value="">Região</option>
        <option value="">Capital</option>
        <option value="">Língua</option>
        <option value="">País</option>
        <option value="">Código de ligação</option>
      </router-link> -->
      <!-- <router-link to="/region">Região</router-link> -->
      <h2>Teste</h2>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>Região</option>
        <option>Capital</option>
        <option>Língua</option>
        <option>País</option>
        <option>Code</option>
      </select>
      <button class="but" @click="selectState(selected)">Pesquisar:</button>
      <select name="" id="">
        <option>
          {{ stateSelected }}
        </option>
        <option>Central</option>
        <option>São Paulo</option>
        <option>Portugues</option>
        <option>Brasil</option>
        <option>PT-BR</option>
      </select>
      <hr />

      <!-- <h2>Usando router-link:</h2>
      <router-link to="/region" tag="button">Pesquisar</router-link> -->
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: {},
      id: 1,
      selected: "",
      stateSelected: "",
    };
  },
  methods: {
    selectState(selected) {
      this.stateSelected = selected;
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