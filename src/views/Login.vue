<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email">
      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="login.password">
      <button class="btn" @click.prevent="logar">Login</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Perdeu a Senha?</a>
    </p>
    <CreateLogin />
  </section>
</template>

<script>
import CreateLogin from '@/components/CreateLogin.vue';

export default {
  data: () => ({
    login: {
      email: '',
      password: '',
    },
  }),
  components: {
    CreateLogin,
  },
  methods: {
    logar() {
      this.$store.dispatch('getUsuario', this.login.email);
      this.$router.push('/usuario');
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}

</style>
