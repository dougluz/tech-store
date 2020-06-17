/* eslint-disable no-restricted-globals */
import Vue from 'vue';
import LoadingPage from '@/components/LoadingPage.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('LoadingPage', LoadingPage);

Vue.filter('numeroPreco', (valor) => {
  const preco = Number(valor);
  if (!isNaN(preco)) {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return 0;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
