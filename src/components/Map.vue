<template>
  <div id="map" :style="{ 'width': width, 'height': height }"></div>
</template>

<script>
  import Push from 'push.js';

  export default {
    data() {
      return {
	    circledPlaces: [],
	    myPoint: null,
        map: {
          type: Object
        }
      }
    },
    props: {
      width: {type: String, default: '100%'},
      height: {type: String, default: '100%'},
      center: {type: Array, default: () => [54.314680, 48.395923]},
      zoom: {type: Number, default: 12},
      clickable: {type: Boolean, default: false},
	    showplaces: {type: Boolean, default: false},
      places: {type: Array},
      controls : {type: Array, default: () => ['zoomControl']},
    },
    computed: {
      filteredPlaces() {	    
	    return this.$store.getters.places;
	  },
	  currentCoords() {
	    return this.$store.getters.currentCoords;
	  },
	  distance() {
	    return this.$store.getters.distance;	    
	  },
	},
	methods: {
	  showMe(){
	    if (this.myPoint == null){
		  this.myPoint = new ymaps.GeoObjectCollection();
		  this.map.geoObjects.add(this.myPoint);
      } else {		  
        this.myPoint.removeAll();
      }
        const me = new ymaps.Placemark(this.currentCoords,{
              hintContent: 'Я здесь',
              balloonContent: 'Мое местоположние: ' + this.$store.getters.currentCoords[0] + ' : ' + this.$store.getters.currentCoords[1]
          }, {
              preset: 'islands#dotIcon',
              iconColor: '#000080'
          });
      this.myPoint.add(me);
      
      // временная переменная, массив должен быть такого вида 
      let objects = ymaps.geoQuery([
          {
              type: 'Point',
              coordinates: [55.73, 37.75],
          },
          {
              type: 'Point',
              coordinates: [55.10, 37.45],
          },
          {
              type: 'Point',
              coordinates: [55.25, 37.35],
          }
        ]).addToMap(this.map);
        // конец временной переменной
      
      var circle = new ymaps.Circle(
        [this.currentCoords, this.distance], 
        {}, 
        {
          geodesic: true, 
          fillColor: "#4161E1",
          fillOpacity: 0.2,
          strokeColor: "#000080",
          strokeOpacity: 0.5,
          strokeWidth: 1,
          draggable: true //убрать потом
        }
      );

      // попытка следить за кругом
      circle.events.add('drag',()=>{
        var objectsInsideCircle = objects.searchInside(circle);
        // console.log(this.filteredPlaces);

        if(objectsInsideCircle._objects.length > 0){
          
          Push.create("touristPoint", {
          body: "Рядом с вами обнарушено заведение",
          timeout: 4000,
          onClick: function () {
              window.focus();
              this.close();
          }
          });
        }
        objectsInsideCircle.setOptions('preset', 'islands#redIcon');
        objects.remove(objectsInsideCircle).setOptions('preset', 'islands#blueIcon');
      });
      
      this.myPoint.add(circle);
	  },
	  placeGeoObjects() {
	    this.map.geoObjects.removeAll(); 
	    for (var i = 0; i < (this.filteredPlaces.length); i++){                  
          const pm = new ymaps.Placemark(this.filteredPlaces[i].coords, {
            hintContent: this.filteredPlaces[i].title,
            balloonContent: this.filteredPlaces[i].description
          });
		  this.map.geoObjects.add(pm);                                    
        }		
	  }
	},
	watch: {
	  filteredPlaces: function () {	  
        if ((this.showplaces)&&(typeof ymaps != "undefined")) {
		  ymaps.ready(() =>
            {
			  if (typeof this.map.geoObjects != "undefined"){
                this.placeGeoObjects(); 
			  } 
            });		
	    } 			
      },
	  map: function () {		  
		if ((this.showplaces)&&(this.map)) {
		  this.placeGeoObjects(); 
		}			 
      },
	  currentCoords: function (newVal, oldVal) {	    
	    if ((this.showplaces)&&(this.map)&&((parseFloat(newVal).toFixed(6)!= parseFloat(oldVal).toFixed(6)))) {
	      this.showMe();
		}
	  },
	  distance: function (newVal, oldVal) {	    
	    if ((this.showplaces)&&(this.map)&&(newVal != oldVal)) {
	      this.showMe();
		}
	  }
	},
    created() {	  
      this.$store.dispatch('getMap').then(map => {
        this.map = map;

        if (this.map) {
          this.map.setCenter(this.center, this.zoom);
          
          if (this.clickable) {
            this.map.events.add('click', (e) => {
			        this.map.geoObjects.removeAll();
			        const pm = new ymaps.Placemark(e.get('coords'), {
                  hintContent: "new place",
                  balloonContent: "-"
                });
			        this.map.geoObjects.add(pm);
              this.$emit('map-clicked', e.get('coords'));
            });
          }			  
        }
      })
    }
  }
</script>
