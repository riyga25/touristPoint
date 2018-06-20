import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'Basic Y291cnNlcy1mcm9udGVuZDpybEdFT29WUndL';

export default {
    actions: {
        preparePlaces(context) {
            axios.post('/api/graphql', {
                query: `{
                    entities {
                        id,name,image,address,averageCheck, rating, lat, lon,category { id, name},
                        reviews {
                            id,text, author,rating
                        }
                    }
                }`
            }).then(response =>
            {
                context.commit('setPlaces', response.data.data.entities);
            })
              .catch(error => console.error('API "preparePlaces":', error));
        },
        prepareCategories(context)
        {
            axios.post('/api/graphql', {
                query: `{
                 categories {id, name }
                }`
            }).then(response =>
            {
                context.commit('setCategories', response.data.data.categories);
            })
              .catch(error => console.error('API "prepareCategories":', error));
        },
        createPlace(context, {
          newPlace, router
        })
        {
            axios.post('/api/graphql',
              {
                query: `mutation ($newPlace: EntityInput!, $categoryId: ID!) 
                {
                    createEntity(input: $newPlace, categoryId: $categoryId) 
                    {
                        id, name,address,averageCheck,image, lat,lon,category 
                        {  
                        id,name
                        }
                    }
                }`,
                variables:
                  {
                    newPlace:
                      {
                        name: newPlace.name,
                        address: newPlace.address,
                        averageCheck: newPlace.averageCheck,
                        image: newPlace.image,
                        lat: newPlace.lat,
                        lon: newPlace.lon
                    },
                    categoryId: newPlace.category.id
                }
            }).then(response =>
            {
                newPlace.id = response.data.data.createEntity.id;
                context.commit('createPlace', newPlace);
                router.push({ name: 'place-detail', params: { id: response.data.data.createEntity.id }});
            })
              .catch(error => console.error('API "createPlace":', error));
        },
        updatePlace(context,{ place, router }) {
            axios.post('/api/graphql', {
                query: `mutation ($placeId: ID!, $place: EntityInput!) {
                    updateEntity(id: $placeId, input: $place) {
                        id
                    }
                }`,
                variables: {
                    place:
                      {
                        name: place.name,
                        address: place.address,
                        averageCheck: place.averageCheck,
                        image: place.image,
                        lat: place.lat,
                        lon: place.lon
                    },
                    placeId: place.id
                }
            }).then(response => {
                router.push('/');
            }).catch(error => console.error('API "updatePlace":', error));
        },
        deletePlaceById(context, placeId) {
            axios.post('/api/graphql', {
                query: `mutation ($placeId: ID!) {
                    removeEntity(id: $placeId) {
                        id } }`,
                variables: {
                    placeId: placeId
                }
            }).then(response => {
                context.commit('deletePlaceById', response.data.data.removeEntity.id);
            }).catch(error => console.error('API "deletePlaceById":', error));
        },
        createReview(context, { newReview, placeId }) {
            axios.post('/api/graphql', {
                query: `mutation ($newReview: ReviewInput!, $placeId: ID!) {
                    createReview(input: $newReview, entityId: $placeId) {
                        text,
                        author,
                        rating
                    }
                }`,
                variables: {
                    newReview: {
                        text: newReview.text,
                        author: newReview.author,
                        rating: newReview.rating
                    },
                    placeId: placeId
                }
            }).then(response => {
                const place = context.getters.getPlaceById(placeId);
                context.commit('createReview', { review: newReview, place: place });
            }).catch(error => console.error('API "createReview":', error));
        }
    }
}
