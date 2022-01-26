<template>
  <div class="container">
    <h2 class="title">Busque aqui sua cidade/região/país</h2>
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
</style>