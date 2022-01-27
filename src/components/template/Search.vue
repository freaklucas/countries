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
        <button class="button-36">Pesquisar:</button>
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

.button-36 {
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 2.6rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2rem;
  }
}
</style>