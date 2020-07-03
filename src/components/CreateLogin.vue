<template>
  <section>
    <h2>Crie a sua conta</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
      <UserForm v-if="create">
        <button @click.prevent="criarUsuario" class="btn btn-form">Criar Usuário</button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
  name: 'CreateLogin',
  data: () => ({
    create: false,
  }),
  components: {
    UserForm,
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch('criarUsuario', this.$store.state.user);
        await this.$store.dispatch('getUsuario', this.$store.state.user.email);
        await this.$router.push({ name: 'Usuario' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
