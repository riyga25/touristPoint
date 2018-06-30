import main from '@/pages/main.vue';
import place from '@/pages/User/Ad'
import user_places from '@/pages/User/AdList'
import user_placeAdd from '@/pages/User/placeAdd'
import login from '@/pages/Login'
import registration from '@/pages/Registration'
import page404 from '@/pages/404'

export default [
    { path: '/', name: 'main', component: main },
    { path: '*', name: 'page404', component: page404},
    { path: '/place/:id', props: true, name: 'place', component: place,meta:{users:'user'}},
    { path: '/places', name: 'user_places', component: user_places,meta:{users:'user'}},
    { path: '/place_add', name: 'newAd', component: user_placeAdd,meta:{users:'user'}},
    { path: '/login', name: 'login', component: login,meta:{users:'guest'}},
    { path: '/registration', name: 'reg', component: registration,meta:{users:'guest'}}
]
