export default {
    state:
      {
        map: null,
        defaultPlaceIcon: 'islands#redDotIcon',
        placeCategoryMap: {
            1: 'islands#blueFoodCircleIcon', 2: 'islands#blueFoodCircleIcon', 3: 'islands#blueCinemaCircleIcon', 4: 'islands#blueBarCircleIcon'
        }
    },
  getters: {
    map: state =>
    {
      return state.map;
    },
    getPlaceIconByCategoryId: state => categoryId =>
    {
      return state.placeCategoryMap[categoryId] ? state.placeCategoryMap[categoryId] : state.placeCategoryMap[0];
    },
    defaultPlaceIcon: state => {
      return state.defaultPlaceIcon;
    }
  },
  mutations: {
    setMap(state, map) {state.map = map;
    },
  },
  actions: {
    getMap(context) {if (context.state.map) {
        return context.state.map;
      }

      const ymaps = new Promise((resolve, reject) => {
        const yandexMapScript = document.createElement('script');
        const ymapSource = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

        yandexMapScript.setAttribute('src', ymapSource);
        yandexMapScript.setAttribute('defer', '');
        document.body.appendChild(yandexMapScript);

        yandexMapScript.onload = () => {
          window.ymaps.ready(() => {
            resolve(window.ymaps);
          });
        };

        yandexMapScript.onerror = (error) => {
          context.commit('setMap', null);
          reject(error);
        };
      });

      context.commit('setMap', ymaps);

      return ymaps;
    }
  }
}
