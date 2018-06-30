import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Firebase from 'firebase';
import store from '@/store/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const currentUser = Firebase.auth().currentUser;
    let nowUser = store.getters.user;
    let requiresAuth = to.meta.users;

    if(currentUser){
        store.dispatch('checkUser',currentUser);
        next();
    }
    else{
        store.commit('guest');
        next();
    }

    if(requiresAuth){
        if(nowUser === requiresAuth){
            next();
        }
        else{
            next('/error');
        }
    }
    else{
        next()
    }

});
export default router;