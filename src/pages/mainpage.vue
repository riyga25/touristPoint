<template>
    <main>
      <v-layout>
        <v-toolbar dark color="primary">
          <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title>TouristPoint</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" temporary absolute width="200">
          <v-list class="pt-0" dense>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Вход</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <div class="places__map">
          <yandex-map
               :places="filteredPlaces" :controls="['zoomControl']" @placemark-clicked="switchPlaceState"
          >
          </yandex-map>
      </div>
    </main>
</template>

<script>
    import YandexMap from '../components/Map.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            YandexMap
        },
        data() {
            return {
                filteredPlaces: this.$store.getters.places,
                drawer: false,
            }
        },
        methods: {
          switchPlaceState() {
            //TODO: implement this method
          }
        }
    }
</script>

<style lang="scss" scoped>
    nav {
        border-bottom: 1px solid #BDBDBD;
    }

    .filters-shop {
        padding: 28px 0 21px 0;
    }

    .filters-shop__reset {
        cursor: pointer;
    }

    .places {
        display: flex;
        height: 624px;
        padding-bottom: 47px;
    }

    .places__map {
      min-width: 100%;
      min-height: 100%;
      width: 100vw;
      height: 100vh;
    }

    .places__scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 460px;
        overflow-y: auto;
        border-top: 1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
    }

    .places__not-found {
        margin-top: 20px;
    }
</style>
