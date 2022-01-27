<template>
  <div class="container">
    <h2 class="title">Busque aqui sua cidade/região/país</h2>
    <div class="main">
      <ul>
        <h2 class="selects">Escolher por</h2>
        <select class="selec">
          <option disabled value="">Escolha uma opção</option>
          <option value="region">Região</option>
          <option value="capital">Capital</option>
          <option value="lenguage">Lingua</option>
          <option value="country">País</option>
          <option value="code">Código</option>
        </select>
        <button class="but">Pesquisar:</button>
        <div class="images">
          <img src="@/assets/images/bandeirabr.png" alt="bandeira do brasil" />
          <img
            src="@/assets/images/bandeiraAl.png"
            alt="bandeira da alemanha"
          />
          <img src="@/assets/images/bandeiraJp.png" alt="bandeira do japão" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>