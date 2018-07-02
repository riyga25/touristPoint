<template>
	<v-app id="app">
    <Header></Header>
      <v-content>
        <transition :name="transitionType" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-content>
    <footer></footer>
	</v-app>
</template>

<script>
import Header from "./components/Header";
import firebase from "firebase";

export default {
		name: "App",
    components: {Header},
    data(){
      return{
        transitionType : 'slide-left'
      }
    },
	methods: {
	  updMyCoords() {
        setInterval(() => {
		  var geolocation = window.ymaps.geolocation;
		  geolocation.get({
            provider: 'auto',
            mapStateAutoApply: false
          }).then((result) => {                   
		    this.$store.commit('setCurrentCoords', result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.InternalToponymInfo.Point.coordinates);           
		  });	   
        }, 3000); 
      }
	},
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionType = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
    },
    beforeCreate(){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.dispatch('checkUser', user);
        }
      });

      this.$store.dispatch('fetchAds');
      this.$store.dispatch('fetchCategories');
    },
	created() {
	  this.updMyCoords();
	}
}
</script>

<style lang="scss" scoped>
  .slide-left-enter, .slide-right-leave-to {
    -webkit-transform: translate(40px, 0);
    transform: translate(40px, 0);
    opacity: 0;
  }
  .slide-left-leave-to, .slide-right-enter {
    -webkit-transform: translate(-40px, 0);
    transform: translate(-40px, 0);
    opacity: 0;
  }
  .slide-right-enter-active,
  .slide-left-enter-active,
  .slide-right-leave-active,
  .slide-left-leave-active {
    transition: all .3s ease-out;
  }

  .slide-fade-enter-active {
    transition: all .6s ease;
  }
  .slide-fade-leave-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(50px);
    opacity: 0;
  }
</style>
