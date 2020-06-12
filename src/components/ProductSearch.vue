<template>
  <form action="">
    <input type="text" name="busca" id="busca" v-model="search" />
    <input type="submit" id="lupa" value="Buscar" @click.prevent="searchProducts" />
  </form>
</template>

<script>
export default {
  name: 'ProductSearch',
  data: () => ({
    search: '',
  }),
  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style></style>
