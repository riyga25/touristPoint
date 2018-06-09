import Home from '../components/Home.vue';
import PlaceEdit from '../components/PlaceEdit.vue';
import PlaceCreate from '../components/PlaceCreate.vue';
import PageNotFound from '../components/PageNotFound.vue';

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/place/create', name: 'place-create', component: PlaceCreate },
    { path: '/place/edit/:id', name: 'place-edit', component: PlaceEdit },
    { path: "*", component: PageNotFound }
]
