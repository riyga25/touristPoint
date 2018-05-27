import Vue from 'vue';
import Link from './components/Link.vue';
import Sub from './components/Sub.vue';
import routes from './routes';
import { places } from './assets/places';
import 'normalize.css';
import './assets/styles/main.scss';
Vue.component('v-link', Link);
Vue.component('v-submit', Sub);
const app = new Vue({
    el: '#app',
    data() {
        return {
            currentRoute: window.location.pathname,
            stipendSize: 2000,
            places
        }
    },
    computed: {
        ViewComponent() {
            const looksLike = routes[this.currentRoute];
            return looksLike
                ? require('./components/pages/' + looksLike + '.vue').default
                : require('./components/pages/PageNotFound.vue').default;
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
});

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
});
