<template>
  <nav class="menu">
    <ul>
      <h2>Filtrar por</h2>
      <router-link to="/" tag="select" active-class="active" exact>
        <option value="">Região</option>
        <option value="">Capital</option>
        <option value="">Língua</option>
        <option value="">País</option>
        <option value="">Código de ligação</option>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>