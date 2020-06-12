<template>
  <div>
    <section class="produtos-container">
      <div class="" v-for="product in products" :key="product.id">
        <img v-if="product.fotos" :src="product.fotos[0]" :alt="product.fotos[0].titulo" />
        <p class="preco">{{ product.preco }}</p>
        <h2 class="titulo">{{ product.nome }}</h2>
        <p class="">{{ product.descricao }}</p>
      </div>
    </section>
    {{ url }}
  </div>
</template>

<script>
import service from '../services/services';

export default {
  name: 'ProductsList',
  data: () => ({
    products: null,
  }),
  methods: {
    getProducts() {
      service.get('produto').then((response) => {
        this.products = response.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
