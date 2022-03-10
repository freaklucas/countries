<template>
  <div class="container">
    <h3>Região escolhida:</h3>
    {{ url }}
  </div>
</template>

<script>
export default {
  name: "CountrySelected",
  props: {
    url: String,
  },
};
</script>

<style>
</style>