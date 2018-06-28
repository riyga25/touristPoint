import Home from '../pages/mainpage.vue';
import Auth from '../pages/Auth';
import  SignIn from '../components/signin';
import  SignUp from '../components/signup';

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/auth', name: 'enter', component: SignIn },
    { path: '/registry', name: 'reg', component: SignUp }
]
