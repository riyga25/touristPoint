import Vue from 'vue/dist/vue';
import app from './app.vue';
import router from './routing/router';
import places from './assets/places.js';
import 'normalize.css';
import './assets/styles/main.scss';

import Sub from './components/Sub.vue';
Vue.component('v-submit', Sub);

new Vue({
  el: '#app',
  router,
  data() {
    return {
      stipendSize: 2000,
      places
    }
  },
  render: h => h(app)
});
