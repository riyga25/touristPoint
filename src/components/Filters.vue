<template>
    <div class="container">
        <div class="filters">
            <div class="filter-scroll">
                <div class="filter-scroll__stipend">
                    <label class="text-1">
                      Сколько: {{ Stipend1 }}% - {{ Stipend2 }}% стипендии
                    </label>
                    <range @drag-end="applyFilters" v-model="stipendPercentRange" ref="range"></range>
                </div>
                <div class="filter-scroll__star">
                    <label class="text-1">
                      Как:
                    </label>
                    <span class="star-rating star-5">
                        <input type="radio" name="star" value="1" v-model="star" @change="applyFilters"><i></i>
                        <input type="radio" name="star" value="2" v-model="star" @change="applyFilters"><i></i>
                        <input type="radio" name="star" value="3" v-model="star" @change="applyFilters"><i></i>
                        <input type="radio" name="star" value="4" v-model="star" @change="applyFilters"><i></i>
                        <input type="radio" name="star" value="5" v-model="star" @change="applyFilters"><i></i>
                    </span>
                </div>
                <div class="filter-scroll__place">
                    <label class="text-1">Где:</label>
                    <select v-model="categoryId" @change="applyFilters" >
                        <option></option>
                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Range from './Range.vue';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                stipendPercentRange: [],
                categoryId: null,
                star: null
            }
        },
        components:
          {
            Range
        },
        computed: {
            ...mapGetters([
                'places', 'categories', 'getPlaceStar', 'getPlacePercentOfStipend'
            ]),
            Stipend1()
            {
                return this.stipendPercentRange[0];
            },
            Stipend2()
            {
                return this.stipendPercentRange[1];
            }
        },
        methods: {
            getFilteredPlaces()
            {
                return this.places.filter(place =>
                {
                    let percentOfStipend = this.getPlacePercentOfStipend(place);
                    return (this.Stipend1 <= percentOfStipend) && (percentOfStipend <= this.Stipend2);
                }).filter(place =>
                {
                    return this.categoryId ? (place.category.id == this.categoryId) : true;
                }).filter(place =>
                {
                    let star = this.getPlaceStar(place);
                    return this.star ? (Math.round(star) == this.star) : true;
                });
            },
            applyFilters()
            {
                let filterPlace = this.getFilteredPlaces();
                this.$emit('filters-applied', filterPlace);
            },
            resetFilters()
            {
                this.categoryId = null;
                this.star = null;
                this.$refs.range.value = [0, 100];
                this.$emit('filters-applied', this.places);
            }
        }
    }
</script>

<style lang="scss" scoped>
    select {
        padding: 8px 15px 8px 16px;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

    label {
        margin-bottom: 12px;
    }

    .filters {
        margin: 0 0 20px 0;
    }

    .filter-scroll {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 136px;
    }

    .filter-scroll__stipend {
        display: flex;
        flex-direction: column;

        label, input {
            width: 816px;
        }
    }

    .filter-scroll__star {
        display: flex;
        flex-direction: column;

        label, div {
            width: 163px;
        }
    }

    .filter-scroll__place {
        display: flex;
        flex-direction: column;

        label, select {
            width: 193px;
        }
    }

    .star-rating {
        font-size: 0;
        white-space: nowrap;
        display: inline-block;
        height: 15px;
        overflow: hidden;
        position: relative;
        background: url('../assets/images/star1.png') repeat-x;
        background-size: contain;
    }

    .star-rating i {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 1;
        background: url('../assets/images/star2.png') repeat-x;
        background-size: contain;
    }

    .star-rating input {
        -moz-appearance: none;
        -webkit-appearance: none;
        opacity: 0;
        display: inline-block;
        height: 100%;
        margin: 0;
        padding: 0;
        z-index: 2;
        position: relative;
    }

    .star-rating input:hover + i,
    .star-rating input:checked + i {
        opacity: 1;
    }

    .star-rating i ~ i {
        width: 40%;
    }

    .star-rating i ~ i ~ i {
        width: 60%;
    }

    .star-rating i ~ i ~ i ~ i {
        width: 80%;
    }

    .star-rating i ~ i ~ i ~ i ~ i {
        width: 100%;
    }

    ::after,
    ::before {
        height: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-align: center;
        vertical-align: middle;
    }

    .star-rating.star-5 {
        width: 80px;
    }

    .star-rating.star-5 input,
    .star-rating.star-5 i {
        width: 20%;
    }

    .star-rating.star-5 i ~ i {
        width: 40%;
    }

    .star-rating.star-5 i ~ i ~ i {
        width: 60%;
    }

    .star-rating.star-5 i ~ i ~ i ~ i {
        width: 80%;
    }

    .star-rating.star-5 i ~ i ~ i ~ i ~ i {
        width: 100%;
    }
</style>
