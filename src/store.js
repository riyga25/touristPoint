import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import places from './assets/places';
import map from './map';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        map
    },
    state: {
        stipend: 2000,
        places,
      categories:[
        {
          id: 1,
          name: 'Кафе'
        },
        {
          id: 2,
          name: 'Ресторан'
        },
        {
          id: 3,
          name: 'Кинотеатр'
        },
        {
          id: 4,
          name: 'Бар'
        }
      ]
    },
    actions: {
        setStipend(context, stipend) {
            context.commit('setStipend', stipend);
        },
        createPlace(context, place) {
            context.commit('createPlace', place);
        },
        deletePlaceById(context, id) {
            context.commit('deletePlaceById', id);
        }
    },
    mutations: {
        setStipend(state, stipend) {
            state.stipend = stipend;
        },
        createPlace(state, place) {
            state.places.push(place);
        },
        deletePlaceById(state, id) {
            state.places = state.places.filter(place => place.id != id);
        }
    },
    getters: {
        stipend: state => {
            return state.stipend;
        },
        categories: state => {
            return state.categories;
        },
        places: state => {
            return state.places;
        },
        Places2: state => {
            return state.places.length;
        },
        getPlaceById: (state, getters) => placeId => {
            return getters.places.find(place => place.id == placeId);
        },
        getPlaceStar: state => place => {
            let rating = 0;
            let reviews = place.review;

            if (reviews) {
                reviews.forEach(review => {
                    rating += review.star;
                });

                rating /= reviews.length;
            }

            return rating;
        },
        getPlacePercentOfStipend: state => place => {
            return place ? Math.round(place.averageCheck / parseFloat(state.stipend) * 100) : 0;
        },
        getPlaceReviewNumber: state => place => {
            return place && place.review ? place.review.length : 0;
        },
        getNewPlaceId: (state, getters) => {
            let maxPlaceId = Math.max(...getters.places.map(place => place.id), 0);

            return ++maxPlaceId;
        }
    }
});
