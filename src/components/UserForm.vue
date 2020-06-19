<template>
  <form action="">
    <label for="nome">Nome</label>
    <input type="text" id="name" name="name" v-model="name">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email">
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" v-model="password">
    <label for="cep">CEP</label>
    <input type="text" id="cep" name="cep" v-model="cep">
    <label for="street">Rua</label>
    <input type="text" id="street" name="street" v-model="street">
    <label for="number">Número</label>
    <input type="text" id="number" name="number" v-model="number">
    <label for="neighborhood">Bairro</label>
    <input type="text" id="neighborhood" name="neighborhood" v-model="neighborhood">
    <label for="city">Cidade</label>
    <input type="text" id="city" name="city" v-model="city">
    <label for="state">Estado</label>
    <input type="text" id="state" name="state" v-model="state">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {

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
