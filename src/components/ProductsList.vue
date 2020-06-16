<template>
  <div>
    <section class="produtos-container">
      <transition mode="out-in">
        <div class="produtos" v-if="products" key="produtos">
          <div class="produto" v-for="(product, index) in products" :key="index">
            <router-link to="/">
              <img v-if="product.fotos" :src="product.fotos[0]" :alt="product.fotos[0].titulo" />
              <p class="preco">{{ product.preco }}</p>
              <h2 class="titulo">{{ product.nome }}</h2>
              <p class="">{{ product.descricao }}</p>
            </router-link>
          </div>
          <PaginateProducts :totalProducts="totalProducts" :productsPerPage="productsPerPage" />
        </div>
        <div class="sem-resultados"
          v-else-if="products && products.length == 0"
          key="sem-resultados"
        >
          <p>Busca sem resultados. Tente buscar por outro termo.</p>
        </div>
        <LoadingPage v-else key="carregando"/>
      </transition>
    </section>
  </div>
</template>

<script>
import PaginateProducts from '@/components/PaginateProducts.vue';
import { serialize } from '../utils/helpers';
import service from '../services/services';

export default {
  name: 'ProductsList',
  data: () => ({
    products: null,
    totalProducts: 0,
    productsPerPage: 9,
  }),
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `produto?_limit=${this.productsPerPage}${query}`;
    },
  },
  methods: {
    getProducts() {
      this.products = null;
      service.get(this.url).then((response) => {
        if (response.headers['x-total-count']) {
          this.totalProducts = Number(response.headers['x-total-count']);
        }
        this.products = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  components: {
    PaginateProducts,
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: white;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>
