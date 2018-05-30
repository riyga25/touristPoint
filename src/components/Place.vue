<template>
    <div class="place-scroll text-1"
         :class="{ active: itemActive }"
         @click="switchItemState"
         @mouseenter="switchControlsState"
         @mouseleave="switchControlsState"
    >
        <shop-change :placeId="place.id" :class="{ hidden: !controlsActive }">
        </shop-change>
        <div class="place-scroll__title">
          {{ place.name }}
        </div>
        <div class="place-scroll__reviews">
            <star
              class="text-1" :value="rating">
            </star>
            <span
              class="text-1">(Отзывов: {{ reviewNumber }})
            </span>
        </div>
        <div>
            <span class="text-1">
              Средний чек:
            </span>
            <span class="place-scroll__average-check">
              {{ place.averageCheck }} &#x20bd; ({{ percentOfStipend }})
            </span>
        </div>
        <div>
            <span class="text-1">
              {{ place.category ? place.category.name : '' }}
            </span>,
            <span class="place-item__address text-1">
              {{ place.address }}
            </span>
        </div>
    </div>
</template>

<script>
    import ShopChange from './ShopChange.vue';
    import Star from './Star.vue';

    export default {
        components: {
          ShopChange,
          Star
        },
        props: {
            place: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                controlsActive: false,
                itemActive: false
            }
        },
        computed: {
            rating() {
                let rating = 0;
                let reviews = this.place.review;
                if (reviews) {
                    reviews.forEach(function(review) {
                        rating += review.rating;
                    });
                    rating /= reviews.length;
                }
                return rating;
            }, reviewNumber() {return this.place.review ? this.place.review.length : 0;
            }, percentOfStipend() {
                let value = (this.place.averageCheck / parseFloat(this.$root.stipendSize)) * 100;

                return isFinite(value) ? value.toFixed() + '% стипендии' : 'Error';
            }
        },
        methods: {
            switchControlsState() {this.controlsActive = !this.controlsActive;
            }, switchItemState() {
                this.itemActive = !this.itemActive;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .place-scroll {
        position: relative;
        box-sizing: border-box;
        border: 1px solid #E0E0E0;
        margin-bottom: 16px;
        padding: 8px 8px 8px 16px;
        width: 392px;
        height: 112px;
        background: #fff;
        flex: 1;
        cursor: pointer;

        &:hover {
            border: 1px solid blueviolet;
        }
    }

    .place-scroll__title {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: #333333;
        margin-bottom: 8px;
    }

    .place-scroll__reviews {
        margin-bottom: 8px;
    }

    .place-scroll__average-check, .place-item__address {
        color: #333333;
    }

    .place-scroll__reviews {
        display: flex;
        align-content: center;
    }

    .active:after, .active:before {
        right: 100%;
        top: 50%;
        border: 1px solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .active:after {
        border-right-color: #FFF;
        border-width: 24px;
        margin-top: -24px;
    }
    .active:before {
        border-right-color: #E0E0E0;
        border-width: 25px;
        margin-top: -25px;
    }

    .active:hover:before {
        border-right-color: blueviolet;
    }
</style>
