import * as fb from 'firebase'

class Ad {
  constructor ({
    title = '',
    description = '',
    ownerId = '',
    imageSrc = '',
    coords = [],
    promo = false,
    id = null
  }) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
    this.coords = coords
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    },
    updateAd (state, {title, description, id}) {
      const ad = state.ads.find(a => {
        return a.id === id
      });

      ad.title = title;
      ad.description = description
    },
    removeAd (state, id) {
      const adIndex = state.ads.reduce((adIndex, ad, index) => {
        if (ad.id === id) {
          adIndex = index;
        }
        return adIndex;
      }, null);

      if (adIndex !== null) {
        state.ads.splice(adIndex, 1);
      }
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError');
      commit('setLoading', true);

      const image = payload.image;

      try {
        const newAd = new Ad({
          ...payload,
          ownerId: getters.getUserUid,
        });

        const ad = await fb.database().ref('ads').push(newAd);
        const imageExt = image.name.slice(image.name.lastIndexOf('.'));
        const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image);
        const imageSrc = await fileData.ref.getDownloadURL();

        await fb.database().ref('ads').child(ad.key).update({
          imageSrc
        });

        commit('setLoading', false);
        commit('createAd', {
          ...newAd,
          id: ad.key,
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError');
      commit('setLoading', true);

      const resultAds = [];

      try {
        const fbVal = await fb.database().ref('ads').once('value');
        const ads = fbVal.val();

        Object.keys(ads).forEach(key => {
          const ad = ads[key];
          resultAds.push(
            new Ad({
              ...ad,
              id: key
            })
          )
        });

        commit('loadAds', resultAds);
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
    async updateAd ({commit}, {title, description, id}) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await fb.database().ref('ads').child(id).update({
          title, description
        });
        commit('updateAd', {
          title, description, id
        });
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    },
    async removeAd ({commit}, id) {
      commit('setLoading', true);

      try {
        await fb.database().ref('ads').child(id).remove();
        commit('removeAd', id);
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state, getters) {
      return state.ads.filter(ad => {
        return ad.ownerId === getters.getUserUid
      })
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    },
	places (state) {      
	  var adsRandCoords = []
	  for (var i = 0; i < (state.ads.length); i++){                  
          adsRandCoords.push(state.ads[i]); 
          adsRandCoords[i].coords = [54.3 + (Math.random()*5)/100, 48.35 + (Math.random()*5)/100]  		  
        }
		//console.log(adsRandCoords);
      return adsRandCoords;	  
    },
  }
}
