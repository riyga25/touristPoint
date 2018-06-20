<template>
  <div id="map" :style="{ 'width': width, 'height': height }"></div>
</template>

<script>
  export default {
    data() {
      return {
        map:null
      }
    },
    props: {
      width: {type: String, default: '500px'},
      height: {type: String, default: '500px'},
      center: {type: Array, default: () => [54.314680, 48.395923]},
      zoom: {type: Number, default: 12},
      clickable: {type: Boolean, default: false},
      places: {type: Array}
    },
    methods: {
      addPlacemarks() {
        this.places && this.places.forEach(place => {
          this.addMarker(place);
        });
      },
      addMarker(place) {
        const defaultPreset = this.$store.getters.getPlaceIconByCategoryId(place.category.id);
        const placemark = new ymaps.Placemark([place.lat, place.lon], { hintContent: place.name }, { preset: defaultPreset });

        this.map.geoObjects.add(placemark);

        placemark.events.add('click', () => {
          this.switchPlacemarkPreset(placemark, defaultPreset);
          this.$emit('placemark-clicked', place);
        });
      },
      switchPlacemarkPreset(placemark, defaultPreset) {
        const activePreset = this.$store.getters.defaultPlaceIcon;
        const currentPreset = placemark.options.get('preset');

        let preset = (currentPreset === activePreset) ? defaultPreset : activePreset;

        placemark.options.set({ preset: preset });
      },
      clearMap() {
        this.map.geoObjects.removeAll();
      }
    },
    beforeCreate() {
      this.$store.dispatch('getMap');
    },
    mounted() {
      this.$store.getters.map.then(map => {
        this.map = new map.Map('map', {
          center: [54.314680, 48.395923],
          zoom: 12
        });

        this.map.setCenter(this.center, this.zoom);
        this.addPlacemarks();

        if (this.clickable) {
          this.map.events.add('click', (e) => {
            this.$emit('map-clicked', e.get('coords'));
          });
        }
      }).catch(error => {
        console.error('Error occurred while loading Yandex.Maps:', error);
      });
    },
    watch: {
      places: function() {
        if (this.map) {
          this.clearMap();
          this.addPlacemarks();
        }
      }
    }
  }
</script>
