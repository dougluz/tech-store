<template>
  <section >
    <div v-if="product" class="produto">
      <ul class="fotos" v-if="product.fotos">
        <li v-for="(foto, index) in products.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo">
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="preco">{{ product.preco | numeroPreco }}</p>
        <p class="descricao">{{ product.descricao }}</p>
        <button class="btn" v-if="product.vendido === 'false'">Comprar</button>
        <button class="btn" disabled v-else>Produto Vendido</button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script>
import service from '../services/services';

export default {
  data: () => ({
    product: null,
  }),
  name: 'Produto',
  props: ['id'],
  methods: {
    getProduct() {
      service.get(`/produto/${this.id}`).then((response) => {
        this.product = response.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
