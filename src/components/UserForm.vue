<template>
  <form action="">
    <label for="nome">Nome</label>
    <input type="text" id="name" name="name" v-model="nome">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email">
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" v-model="senha">
    <label for="cep">CEP</label>
    <input type="text" id="cep" name="cep" v-model="cep" @keyup="preencherCep">
    <label for="street">Rua</label>
    <input type="text" id="street" name="street" v-model="rua">
    <label for="number">Número</label>
    <input type="text" id="number" name="number" v-model="numero">
    <label for="neighborhood">Bairro</label>
    <input type="text" id="neighborhood" name="neighborhood" v-model="bairro">
    <label for="city">Cidade</label>
    <input type="text" id="city" name="city" v-model="cidade">
    <label for="state">Estado</label>
    <input type="text" id="state" name="state" v-model="estado">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import getCep from '@/services/cepService';

export default {
  name: 'UserForm',
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, '');
      console.log(cep);
      if (cep.length === 8) {
        getCep(cep).then((response) => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
        });
      }
    },
  },
  computed: {
    nome: {
      get() {
        return this.$store.state.user.nome;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { nome: value });
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { email: value });
      },
    },
    senha: {
      get() {
        return this.$store.state.user.senha;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { senha: value });
      },
    },
    cep: {
      get() {
        return this.$store.state.user.cep;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { cep: value });
      },
    },
    rua: {
      get() {
        return this.$store.state.user.rua;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { rua: value });
      },
    },
    numero: {
      get() {
        return this.$store.state.user.numero;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { numero: value });
      },
    },
    bairro: {
      get() {
        return this.$store.state.user.bairro;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { bairro: value });
      },
    },
    cidade: {
      get() {
        return this.$store.state.user.cidade;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { cidade: value });
      },
    },
    estado: {
      get() {
        return this.$store.state.user.estado;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { estado: value });
      },
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
