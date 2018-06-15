<template>
    <div class="place-scroll text-1"
         :class="{ active: itemActive }"
         @click="openDetailPage"
         @mouseenter="switchControlsState"
         @mouseleave="switchControlsState"
    >
        <place-change :placeId="place.id" :class="{ hidden: !controlsActive }"></place-change>
        <div class="place-scroll__title">{{ place.name }}</div>
        <div class="place-scroll__reviews">
            <star class="text-1" :value="star"></star>
            <span class="text-1">
              (Отзывов: {{ reviewNumber }})
            </span>
        </div>
        <div>
            <span class="text-1">
              Средний чек:
            </span>
            <span class="place-scroll__average-check">{{ place.averageCheck }} &#x20bd; ({{ percentOfStipend }})
            </span>
        </div>
        <div>
            <span class="text-1">{{ place.category ? place.category.name : '' }},</span>
            <span class="place-scroll__address text-1">{{ place.address }}</span>
        </div>
    </div>
</template>

<script>
    import PlaceChange from './PlaceChange.vue';
    import Star from './Star.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            PlaceChange,
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
            ...mapGetters([
                'getPlaceStar',
                'getPlacePercentOfStipend',
                'getPlaceReviewNumber'
            ]),
            percentOfStipend() {
                let percentOfStipend = this.getPlacePercentOfStipend(this.place);

                return isFinite(percentOfStipend) ? percentOfStipend + '% стипендии' : 'Error'
            },
            star() {
                return this.getPlaceStar(this.place);
            },
            reviewNumber() {
                return this.getPlaceReviewNumber(this.place);
            }
        },
        methods: {
            switchControlsState() {
                this.controlsActive = !this.controlsActive;
            },
            switchItemState() {
                this.itemActive = !this.itemActive;
            },
            openDetailPage() {
                this.$router.push({ name: 'place-detail', params: { id: this.place.id }});
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
        cursor: pointer;

        &:hover {
            border: 1px solid #BDBDBD;
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

    .place-scroll__average-check, .place-scroll__address {
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
        border-right-color: #BDBDBD;
    }
</style>
