<template>
    <main-position>
        <main>
            <div class="container">
              <div>
                <form class="input-group mt-5">
                  <input type="text" class="form-control" placeholder="Добавьте место">
                  <span class="input-group-btn">
        <button class="btn btn-secondary" type="submit">Добавить!</button>
      </span>
                </form>
              </div>
                <div class="places">
                    <div class="places__map">
                        <yandex-map
                            class="places__map1" :places="filteredPlaces" :width="'816px'" :height="'624px'" @placemark-clicked="switchPlaceState"
                        >
                        </yandex-map>
                    </div>
                </div>
            </div>
        </main>
    </main-position>
</template>

<script>
    import MainPosition from './Position/Main.vue';
    import YandexMap from '../components/Map.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            MainPosition,
            YandexMap
        },
        data() {
            return {
                filteredPlaces: this.$store.getters.places
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
        display: flex;
        flex-direction: column;
    }

    .places__map1 {
        flex: 1;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
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
