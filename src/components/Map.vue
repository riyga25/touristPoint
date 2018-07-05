<template>
  <div id="map" :style="{ 'width': width, 'height': height }"></div>
</template>

<script>
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
		var circle = new ymaps.Circle([this.currentCoords, this.distance], {}, {geodesic: true, 
		                                                                   fillColor: "#4161E1",
                                                                           fillOpacity: 0.2,
                                                                           strokeColor: "#000080",
                                                                           strokeOpacity: 0.5,
                                                                           strokeWidth: 1 });       
        this.myPoint.add(circle);
		var pointList = [];
		for (var i = 0; i < (this.filteredPlaces.length); i++){
		    
		    pointList.push(
			  {
			    type: 'Point',
			    coordinates: this.filteredPlaces[i].coords
			  }
			);
		 
		}		
		var objects = ymaps.geoQuery(this.map.geoObjects).searchInside(circle);
		
		this.circledPlaces = [];		
		objects.each(function(pm) {console.log(pm.properties.get('hintContent'));});		
		
		const me = new ymaps.Placemark(this.currentCoords, {
            hintContent: 'Я здесь',
            balloonContent: 'Мое местоположние: ' + this.$store.getters.currentCoords[0] + ' : ' + this.$store.getters.currentCoords[1]
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#000080'
        });
		this.myPoint.add(me);
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
