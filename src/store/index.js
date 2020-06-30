import Vue from 'vue';
import Vuex from 'vuex';

import service from '@/services/services';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    getUsuario(context, payload) {
      service.get(`/usuario/${payload}`).then((response) => {
        context.commit('UPDATE_USUARIO', response.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
  },
  modules: {},
});
