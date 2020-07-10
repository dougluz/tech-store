<template>
  <div>
    <section class="usuario">
      <nav class="sidenav">
        <li>
          <router-link :to="{ name: 'Usuario'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'compras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'vendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario-editar' }">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </nav>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Usuário',
  methods: {
    deslogar() {
      this.$store.dispatch('deslogarUsuario');
      this.$router.push('/login');
    },
  },
};
</script>

<style>

</style>
