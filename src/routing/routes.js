import Home from '../pages/mainpage.vue';
import buisnessman from '../pages/buisnessman.vue';
import addPlace from '../pages/addPlace';
import Auth from '../pages/Auth';


export default [
    { path: '/', name: 'home', component: Home },
	{ path: '/addPlace', name: 'addPlace', component: addPlace },
	{ path: '/buisnessman', name: 'buisnessman', component: buisnessman },
    { path: '/auth', name: 'enter', component: Auth }
]
