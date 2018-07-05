import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import map from './modules/map';
import ads from './modules/ads'
import user from './modules/user'
import shared from './modules/shared'
import categories from './modules/categories'
import admin from './modules/admin'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        map,
        ads,
        user,
        shared,
        categories,
        admin
    },
});
