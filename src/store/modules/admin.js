import * as fb from 'firebase';

export default{
    state:{
        users:[]
    },
    actions:{
        async fetchUsers ({commit}) {
            commit('clearError');
            commit('setLoading', true);
      
            try {
            const fbVal = await fb.database().ref('users').once('value').then(users=>{
                let resultFetch = [];
                let enterArr = users.val();
                Object.keys(enterArr) .forEach(item => {
                    let thisUser = enterArr[item];
                    resultFetch.push(thisUser);
                });
                commit('addUsers', resultFetch);
            });

            commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message);
                commit('setLoading', false);
                throw error
                }
        },
    },
    mutations:{
        addUsers(state,items){
            state.users = items;
        }
    },
    getters:{
        allUsers(state){
            return state.users;
        }
    }
}