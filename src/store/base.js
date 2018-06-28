import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import map from './modules/map';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        map
    },
});