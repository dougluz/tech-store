<template>
  <section>
    <h1>🛒 Compre ou Venda 🎉</h1>
    <ProductSearch />
    <ProductsList />
  </section>
</template>

<script>
import ProductSearch from '@/components/ProductSearch.vue';
import ProductsList from '@/components/ProductsList.vue';

export default {
  name: 'Home',
  components: {
    ProductSearch,
    ProductsList,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>
