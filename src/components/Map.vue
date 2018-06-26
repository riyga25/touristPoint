<template>
  <div id="map" :style="{ 'width': width, 'height': height }"></div>
</template>

<script>
  export default {
    data() {
      return {
        map: {
          type: Object
        }
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
    created() {
      this.$store.dispatch('getMap').then(map => {
        this.map = map;

        if (this.map) {
          this.map.setCenter(this.center, this.zoom);
          this.addPlacemarks();

          if (this.clickable) {
            this.map.events.add('click', (e) => {
              this.$emit('map-clicked', e.get('coords'));
            });
          }
        }
      })
    }
  }
</script>
