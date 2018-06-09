import Vue from 'vue/dist/vue';
import App from './App.vue';
import router from './routing/router';
import store from './store';
import 'normalize.css';
import './assets/styles/main.scss';
import Submit from './components/Submit.vue';
Vue.component('v-submit', Submit);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

