<template>
  <div class="container">
    <h2 class="title">Busque aqui sua cidade/região/país</h2>
    <div class="main">
      <ul>
        <h2 class="selects">Escolher por</h2>
        <select v-model="selected" class="selec">
          <option disabled value="">Escolha uma opção</option>
          <option value="eu">EU</option>
          <option value="capital">Capital</option>
          <option value="lenguage">Lingua</option>
          <option value="country">País</option>
          <option value="code">Código</option>
        </select>
        <button class="button-7" @click="search">Pesquisar:</button>
        <div class="images">
          <img src="@/assets/images/bandeirabr.png" alt="bandeira do brasil" />
          <img
            src="@/assets/images/bandeiraAl.png"
            alt="bandeira da alemanha"
          />
          <img src="@/assets/images/bandeiraJp.png" alt="bandeira do japão" />
        </div>
        <div class="content-select" v-for="image in images" :key="image.id">
          <h3>Conteúdo selecionado:</h3>
          <img :src="`$image[0].name`" alt="" />
          {{ image.data }} || {{ image.flags.png }}
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      region: {},
      selected: {},
      images: {},
    };
  },
  methods: {
    search() {
      const headers = { "Content-Type": "application/json" };
      axios
        .get(`https://restcountries.com/v2/regionalbloc/${this.selected}`, {
          //regionalbloc/${this.selected}
          headers,
        })
        .then((res) => {
          this.region = res.data;
          this.images = res.data.json;
          // this.region = res.data;
          console.log(this.region);

          console.log(`selecionei : ${this.selected}`);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 52px;
  animation: flipTitle 3s;
}

@keyframes flipTitle {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}

@media (max-width: 620px) {
  .title {
    font-size: 20px;
  }

  .container {
    width: 80%;
  }
}

.main {
  margin-top: 12px;
  margin-bottom: 22px;
}

.main button {
  margin: 12px;
}

.selects {
  margin-bottom: 12px;
}

.button-7 {
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-7:hover,
.button-7:focus {
  background-color: #07c;
}

.button-7:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-7:active {
  background-color: #0064bd;
  box-shadow: none;
}
</style>
