<template>
    <div class="places__map">
      <filters
        :dialog="filters"		
        @close="closeModal"		
      />
      <yandex-map        
        :controls="['zoomControl']"
		    :showplaces="true"
        @placemark-clicked="switchPlaceState"
      >
      </yandex-map>
      <v-btn
        fab
        color="primary"
        bottom
        right
        fixed
        @click="openModal()"
      >
        <v-icon>filter_list</v-icon>
      </v-btn>
    </div>
</template>

<script>
    import YandexMap from '../components/Map.vue';
    import filters from '../components/filters.vue';

    export default {
        components: {
          YandexMap,
          filters
        },
        data() {
            return {              
              filters: false
            }
        },
        methods: {
          switchPlaceState() {
            //TODO: implement this method
          },
          openModal() {
            this.filters = true;
          },
          closeModal() {
            this.filters = false;
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
      position: relative;

      .btn--floating .icon{
        height: 21px;
      }
      .dialog__contaner{
        margin-bottom: 0;
      }
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
