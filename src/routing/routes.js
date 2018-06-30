import main from '@/pages/main.vue';
import checkAuth from './auth-guard'
import place from '@/pages/User/Ad'
import user_places from '@/pages/User/AdList'
import user_placeAdd from '@/pages/User/placeAdd'
import login from '@/pages/Login'
import registration from '@/pages/Registration'
import page404 from '@/pages/404'

export default [
    { path: '/', name: 'main', component: main },
    { path: '*', name: 'page404', component: page404 },
    { path: '/place/:id', props: true, name: 'place', component: place},
    { path: '/places', name: 'user_places', component: user_places, beforeEnter: checkAuth},
    { path: '/place_add', name: 'newAd', component: user_placeAdd, beforeEnter: checkAuth},
    { path: '/login', name: 'login', component: login},
    { path: '/registration', name: 'reg', component: registration}
]
