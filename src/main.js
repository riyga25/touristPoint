import Vue from 'vue/dist/vue';
import vuetify from 'vuetify'
import App from './App.vue';
import router from './routing/router';
import store from './store/base';

import 'normalize.css';
import './assets/styles/main.scss';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.scss';

Vue.use(vuetify);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
