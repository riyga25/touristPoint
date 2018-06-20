import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import api from './axios';
import map from './map';
import places from './assets/places'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        map,
        places,
        api
    },
    state: {
      stipend: 2000,
      places: [],
    categories: [ {
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
      }]
    },
  mutations: {
    setPlaces(state, places) {state.places = places;},
    setCategories(state, categories) {state.categories = categories;},
    setStipend(state, stipend) {state.stipend = stipend;},
    createPlace(state, place) {state.places.push(place);},
    deletePlaceById(state, id) {state.places = state.places.filter(place => place.id != id);},
    createReview(state, { review, place }) {place.reviews.push(review);},
  },
    getters: {
        stipend: state => {return state.stipend;},
        categories: state => {return state.categories;},
        places: state => {return state.places;},
        Places2: state => {return state.places.length;},
        getPlaceById: (state, getters) => placeId => {return getters.places.find(place => place.id == placeId);},
        getPlaceStar: state => place => {
            let star = 0;
            let reviews = place.review;

            if (reviews) {
                reviews.forEach(review => {
                    star += review.star;
                });

                star /= reviews.length;
            }

            return star;
        },
        getPlacePercentOfStipend: state => place => {return place ? Math.round(place.averageCheck / parseFloat(state.stipend) * 100) : 0;},
        getPlaceReviewNumber: state => place => {return place && place.review ? place.review.length : 0;}
    }
});









