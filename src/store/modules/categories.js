import farebase from 'firebase';

export default{
  state:{
    categoiesAll:[]
  },
  actions:{
    async fetchCategories({commit}) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const fbVal = await farebase.database().ref('categories').once('value');
        const categories = fbVal.val();
        console.log(categories);
        commit('loadCategories', categories);
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
    async createCategory ({commit}, item) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await farebase.database().ref('categories').push(item);

        commit('setLoading', false);
        commit('createCategory',item)
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
  },
  mutations:{
    loadCategories(state,items){
      state.categoiesAll = items;
    },
    createCategory(state,item){
      console.log(typeof(state.categoiesAll));
      // state.categoiesAll.push(item);
    }
  },
  getters:{
    categories(state){
      return state.categoiesAll;
    },
    categoryById (state) {
      return categoryId => {
        return state.categoiesAll.find(category => category.id === categoryId)
      }
    }
  }
}
