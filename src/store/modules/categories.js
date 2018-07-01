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
    async createCategory ({commit}, item) {
      commit('clearError');
      commit('setLoading', true);

      try {
        let category = await farebase.database().ref('categories').push(item);
        item.id = category.key;
        commit('setLoading', false);
        commit('createCategory',item);
        console.log('asda!!! '+item);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
  },
  mutations:{
    loadCategories(state,items){
      console.log('load '+items);
      state.categoiesAll = items;
    },
    createCategory(state,item){
      console.log(typeof(state.categoiesAll));
      state.categoiesAll.push(item);
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
