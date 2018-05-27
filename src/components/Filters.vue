<template>
    <div class="container">
        <div class="filters">
            <div class="filter-scroll">
                <div class="filter-scroll__stipend">
                    <label class="text-1">
                      Сколько: {{ stipendPercentMin }}% - {{ stipendPercentMax }}% стипендии
                    </label>
                    <range @drag-end="applyFilters" v-model="stipendPercentRange" ref="slider">

                    </range>
                </div>
                <div class="filter-scroll__star">
                    <label class="text-1">
                      Как:
                    </label>
                    <span class="star-rating star-5">
                        <input type="radio" name="rating" value="1" v-model="rating" @change="applyFilters"><i></i>
                        <input type="radio" name="rating" value="2" v-model="rating" @change="applyFilters"><i></i>
                        <input type="radio" name="rating" value="3" v-model="rating" @change="applyFilters"><i></i>
                        <input type="radio" name="rating" value="4" v-model="rating" @change="applyFilters"><i></i>
                        <input type="radio" name="rating" value="5" v-model="rating" @change="applyFilters"><i></i>
                    </span>
                </div>
                <div class="filter-scroll__shop">
                    <label class="text-1" for="category">
                      Где:
                    </label>
                    <select name="category" id="category" v-model="categoryId" @change="applyFilters">
                        <option></option>
                        <option value="1">Кафе</option>
                        <option value="4">Бар</option>
                        <option value="2">Ресторан</option>
                        <option value="3">Кинотеатр</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Range from './Range.vue';

    export default {
        props: {
            places: {
                type: Array
            }
        },
        data() {
            return {
                stipendPercentRange: [],
                categoryId: null,
                rating: null
            }
        },
        components: {
            Range
        },
        computed: {
            stipendPercentMin() {
                return this.stipendPercentRange[0];
            },
            stipendPercentMax() {
                return this.stipendPercentRange[1];
            }
        },
        methods: {
            getFilteredPlaces() {
                let filteredShops = [];
                let shops = this.places;
                if (shops) {
                    shops.forEach(function (place) {
                        let inRange = this.filterRange(place);
                        let hasCategory = this.filterCategory(place);
                        let hasRating = this.filterRating(place);

                        if (inRange && hasCategory && hasRating) {
                            filteredShops.push(place);
                        }
                    }, this);
                }

                return filteredShops;
            },
            filterRange(place) {
              let percentOfStipend = (place.averageCheck / parseFloat(this.$root.stipendSize)) * 100;
                percentOfStipend = Math.round(percentOfStipend);
                return (this.stipendPercentMin <= percentOfStipend) && (percentOfStipend <= this.stipendPercentMax);
            },
            filterCategory(place) {
                return this.categoryId ? (place.category.id == this.categoryId) : true;
            },
            filterRating(place) {
                let placeRating = 0;
                let reviews = place.review;
                if (reviews) {reviews.forEach(function(review) {placeRating += review.rating;});
                    placeRating /= reviews.length;
                }
                placeRating = Math.round(placeRating);
                return this.rating ? (placeRating == this.rating) : true;
            },
            applyFilters() {let filteredPlaces = this.getFilteredPlaces();
                this.$emit('filters-applied', filteredPlaces);
            },
            resetFilters() {
                this.categoryId = null;
                this.rating = null;
                this.$refs.slider.value = [0, 100];
                this.$emit('filters-applied', this.places);
            }
        },
    }
</script>

<style lang="scss" scoped>
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
    select {
        background:  #fff;
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

    .filter-scroll__shop {
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
