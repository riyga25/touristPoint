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
    let requiresAuth = to.meta.users;
    let user = Firebase.auth().currentUser;
    let checkUser = 'guest';

    if(requiresAuth){
        if(user){
            store.dispatch('checkUser',user);
            checkUser = store.getters.user;

            if(checkUser === requiresAuth){
                next();
            }else{
                next('/')
            }
        }else{
            store.commit('guest');
            checkUser = 'guest';

            if(checkUser === requiresAuth){
              next();
            }else{
              next('/')
            }
        }
    }else{
        next();
    }
});
export default router;
