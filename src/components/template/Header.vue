<template>
  <header class="header">
    <a class="home-logo">
      <img src="../../assets/images/logo.png" alt="logo da aplicação" />
    </a>
    <a class="home-back">
      <img src="../../assets/images/back.png" alt="botão de voltar" />
    </a>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0;
  box-shadow: 2px 2px 2px 2px #888888;
}

.home-logo {
  cursor: pointer;
}

.home-back {
  margin-right: 4px;
  cursor: pointer;
}
</style>