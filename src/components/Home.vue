<template>
    <main-location>
        <nav>
            <filters :places="places" @filters-applied="setFilteredPlaces" ref="filters"></filters>
        </nav>
        <main>
            <div class="container">
                <div class="filters-shop">
                    <span class="text-1">
                      Показано: {{ filteredPlacesNumber }} из {{ totalPlacesNumber }}
                        <span class="filters-shop__reset" @click="resetFilters">
                          (очистить фильтры)
                        </span>
                    </span>
                </div>
                <div class="places">
                    <div class="places__map">
                        <img src="../assets/images/places-map.png">
                    </div>
                    <div class="places__scroll">
                        <div v-if="filteredPlaces.length">
                            <place v-for="place in filteredPlaces" :place="place" :key="place.id">

                            </place>
                        </div>
                        <div v-else class="places__not-found text-2">
                            По этим данным ничего не найдено
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </main-location>
</template>

<script>
    import MainLocation from './pages/Location/Main.vue';
    import Filters from './Filters.vue';
    import Place from './Place.vue';

    export default {
        components: {
            MainLocation,
            Filters,
            Place
        },
        data() {
            return {
                places: this.$root.places ? this.$root.places : [],
                filteredPlaces: this.$root.places ? this.$root.places : []
            }
        },
        computed: {
            filteredPlacesNumber() {
                return this.filteredPlaces.length;
            },
            totalPlacesNumber() {
                return this.places.length;
            }
        },
        methods: {
            setFilteredPlaces(filteredPlaces) {
                this.filteredPlaces = filteredPlaces;
            },
            resetFilters() {
                this.$refs.filters.resetFilters();
            }
        }
    }
</script>

<style lang="scss" scoped>
    nav {
        border-bottom: 1px solid blueviolet;
    }

    .filters-shop {
        padding: 28px 0 21px 0;
    }

    .places__scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 490px;
        overflow-y: auto;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
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
      width: 816px;

      img {
        flex: 1;
        max-width: 100%;
        border: 1px solid blueviolet;
      }
    }
    .places__not-found {
        margin-top: 20px;
    }
</style>
