import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
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
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password);
        commit('checkUser', user.email);
        commit('setLoading', false)
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
        commit('checkUser', user.email);
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error
      }
    },
    checkUser({commit},user){
      commit('checkUser',user.email);
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
    }
  }
}
