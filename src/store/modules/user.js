import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    id: '',
    user: 'guest',
    admin: 'admin@admin.ru'
  },
  mutations: {
    checkUser(state,user){

      if(user === state.admin){
        state.user = 'admin'
      }
      if(user !== state.admin){
        state.user = 'user'
      }
    },
    guest(state){
      state.user = 'guest';
    },
    setId(state, id = '') {
      state.id = id;
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password).then(newUser=>{
          let arr = {}
          arr.email = newUser.user.email;
          arr.uid = newUser.user.uid;
          arr.emailVerified = newUser.user.emailVerified;
          arr.blocked = false;
          fb.database().ref('users').push(arr);
        });
        commit('checkUser', user.user.email);
        commit('setId', user.user.uid);
        commit('setLoading', false)
        this.$router.push('/')
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password);
        commit('checkUser', user.user.email);
        commit('setId', user.user.uid);
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error
      }
    },
    checkUser({commit},user){
      commit('checkUser',user.email);
      commit('setId', user.uid);
    },
    logoutUser ({commit}) {
      fb.auth().signOut().then(()=>{
          commit('guest');
          location.reload();
      }
      );
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    getUserUid(state) {
      return state.id;
    }
  }
}
