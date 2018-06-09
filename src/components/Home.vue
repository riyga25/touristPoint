<template>
    <main-position>
        <nav>
            <filters @filters-applied="setFilteredPlaces" ref="filters"></filters>
        </nav>
        <main>
            <div class="container">
                <div class="filters-shop">
                    <span class="text-1">Показано: {{ Places1 }} из {{ Places2 }}
                        <span class="filters-shop__reset" @click="resetFilters">(очистить фильтры)</span>
                    </span>
                </div>
                <div class="places">
                    <div class="places__map">
                        <img src="../assets/images/places-map.png">
                    </div>
                    <div class="places__scroll">
                        <div v-if="Places1">
                            <place v-for="place in filteredPlaces" :place="place" :key="place.id"></place>
                        </div>
                        <div v-else class="places__not-found text-2">
                            Заведения не найдены
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </main-position>
</template>

<script>
    import MainPosition from './pages/Positions/Main.vue';
    import Filters from './Filters.vue';
    import Place from './Place.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            MainPosition,
            Filters,
            Place
        },
        data() {
            return {
                filteredPlaces: this.$store.getters.places
            }
        },
        computed: {
            ...mapGetters([
                'places',
                'Places2'
            ]),
            Places1() {
                return this.filteredPlaces.length;
            }
        },
        methods: {
            setFilteredPlaces(filteredPlaces) {
                this.filteredPlaces = filteredPlaces;
            },
            resetFilters() {
                this.$refs.filters.resetFilters();
            }
        },
        watch: {
            places: function() {
                this.$refs.filters.applyFilters();
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
        width: 816px;

        img {
            flex: 1;
            max-width: 100%;
            border: 1px solid #E0E0E0;
        }
    }

    .places__scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 490px;
        overflow-y: auto;
        border-top: 1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
    }

    .places__not-found {
        margin-top: 20px;
    }
</style>
