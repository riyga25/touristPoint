import Home from '../pages/mainpage.vue';
import buisnessman from '../pages/buisnessman.vue';
import addPlace from '../pages/addPlace';
// import Auth from '../pages/Auth';
import  SignIn from '../components/signin';
import  SignUp from '../components/signup';
import test from '../components/tezt' //потом выпилить этот компонент

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/auth', name: 'enter', component: SignIn },
    { path: '/registry', name: 'reg', component: SignUp },
	{ path: '/addPlace', name: 'addPlace', component: addPlace },
	{ path: '/buisnessman', name: 'buisnessman', component: buisnessman },
	{ path: '/test', name: 'test', component: test },
]