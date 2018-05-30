import Home from '../components/Home.vue';
import PlaceEdit from '../components/PlaceEdit.vue';
import PlaceDelete from '../components/Del.vue';
import PageNotFound from '../components/PageNotFound.vue';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/place/create', name: 'place-create', component: PlaceEdit },
  { path: '/place/edit/:id', name: 'place-edit', component: PlaceEdit },
  { path: '/place/delete/:id', name: 'place-delete', component: PlaceDelete },
  { path: "*", component: PageNotFound }
]
