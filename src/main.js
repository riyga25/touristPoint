import Vue from 'vue/dist/vue';
import vuetify from 'vuetify'
import firebase from 'firebase'
import router from './routing/router';
import store from './store/store';

import App from './App.vue';

import './assets/styles/main.scss';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(vuetify);

var config = {
    apiKey: "AIzaSyAGqryckvGc3Nsg6-HKteOz5h-gar6efCg",
    authDomain: "vuepwa-f2d08.firebaseapp.com",
    databaseURL: "https://vuepwa-f2d08.firebaseio.com",
    projectId: "vuepwa-f2d08",
    storageBucket: "vuepwa-f2d08.appspot.com",
    messagingSenderId: "218131564289"
};
firebase.initializeApp(config);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
