import farebase from 'firebase';

export default{
  state:{
    categoriesAll:[]
  },
  actions:{
    async fetchCategories({commit}) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const fbVal = await farebase.database().ref('categories').once('value');
        const categories = fbVal.val();

        let newArr = [];

        Object.keys(categories).forEach(key => {
          let category = categories[key];
          let newItem = {
            name: category.name,
            color: category.color,
            id: key
          };
          newArr.push(
            newItem
          )
        });

        commit('loadCategories', newArr);
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
    async createCategory ({commit}, newItem) {
      commit('clearError');
      commit('setLoading', true);

      try {
        let category = await farebase.database().ref('categories').push(newItem);
        newItem.id = category.key;
        commit('setLoading', false);
        commit('createCategory',newItem);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
    async deleteCategory ({commit}, item) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await farebase.database().ref('categories').child(item).remove();
        commit('setLoading', false);
        commit('deleteCategory',item);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
  },
  mutations:{
    loadCategories(state,items){
      state.categoriesAll = items;
    },
    createCategory(state,item){
        console.log('mutation '+ item.name);
      state.categoriesAll.push(item);
    },
    deleteCategory(state,key){
      let index = state.categoriesAll.findIndex(category => category.id === key);
      if (index > -1) {
        state.categoriesAll.splice(index, 1);
      }
    }
  },
  getters:{
    categories(state){
      return state.categoriesAll;
    },
    categoryById (state) {
      return categoryId => {
        return state.categoriesAll.find(category => category.id === categoryId)
      }
    }
  }
}
