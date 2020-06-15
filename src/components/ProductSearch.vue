<template>
  <form action="">
    <input type="text" name="busca" id="busca" v-model="search" placeholder="Buscar..."/>
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

<style scoped>
form {
  max-width: 680px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url('../assets/search.svg') no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
