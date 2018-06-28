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
                <v-list-tile-title>Выход</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
	  <router-link to="/addPlace">
	      <v-btn class="btn btn-outline-success mr-3" block="true">Добавить место</v-btn> 
	  </router-link>      
    </main>
</template>

<script>    
    
    export default {
	    name: 'buisnessman',
        components: {            
        },
        data() {
            return {
                drawer: false
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
