<template>
    <main-position>
        <nav>
            <div class="container">
                <div class="detail">
                    <div>
                        <div class="detail__back">
                            <router-link to="/" class="text-1">
                              &laquo; Вернуться к списку
                            </router-link>
                        </div>
                        <h3 class="detail__title">
                            <template v-if="place">
                                <div class="text-2">
                                    {{ place.name }} <star class="star text-1" :value="star"></star>
                                </div>
                                <div>
                                    <span class="text-1">{{ place.category ? place.category.name : '' }},</span>
                                    <span class="place-address text-1">{{ place.address }}</span>
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-2">
                                  Место не найдено
                                </div>
                            </template>
                        </h3>
                    </div>
                </div>
            </div>
        </nav>
        <main>
          <transition name="pl-detail" enter-active-class="animated zoomInUp" leave-active-class="animated zoomOut">
            <div v-show="place" class="container">
                <svg viewBox="0 0 32 32">
                    <circle :style="{ 'stroke-dasharray': percentOfStipend + ' 100' }" r="16" cx="16" cy="16" />
                </svg>
                <div class="content">
                    <div class="place-shop">
                        <div class="place-shop__main">
                            <div>
                                <span class="text-1">
                                  Cредний чек:
                                </span> <span class="text-1-dark">{{ place && place.averageCheck }} &#x20bd;</span>
                            </div>
                            <span class="text-1">
                              Здесь можно прогулять
                            </span>
                            <span class="text-1-dark">{{ isFinite(percentOfStipend) ? percentOfStipend + '% стипендии' : 'error' }}</span>
                        </div>
                        <div class="place-shop__images">
                          <img class="place-shop__images_photo" :src="place && place.image">
                            <div class="place-shop__images_map">
                              <yandex-map :width="'400px'" :height="'400px'" :places="[place]" :center="place && [place.lat, place.lon]" :zoom="15"></yandex-map>
                            </div>
                        </div>
                    </div>
                    <div class="place-reviews">
                        <div class="place-reviews__header">
                            <span class="text-1-dark">
                              Отзывы:
                            </span>
                          <button @click.stop="$refs.window.showWindow()" class="text-1">
                            Написать отзыв
                          </button>
                        </div>
                      <div v-if="place && place.reviews && place.reviews.length" class="place-reviews__items">
                         <review v-for="review in place.reviews" :review="review" :key="review.id"></review>
                        </div>
                        <div class="text-2 text-center" v-else>
                          Отзывов пока нет.Будьте первым!
                        </div>
                      <review-create :placeId="place && place.id" ref="window"></review-create>
                    </div>
                </div>
            </div>
          </transition>
        </main>
    </main-position>
</template>

<script>
    import MainPosition from './pages/Position/Main.vue';
    import Star from './Star.vue';
    import Review from './Review.vue';
    import ReviewCreate from './ReviewAdd.vue';
    import YandexMap from './Map.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            MainPosition, Star, Review, ReviewCreate,YandexMap
        },
        computed: {
            ...mapGetters([
                'getPlaceById', 'getPlaceStar', 'getPlacePercentOfStipend', 'getPlaceReviewNumber'
            ]),
            place() {
                return this.getPlaceById(this.$route.params.id);
            },
            percentOfStipend() {
                return this.getPlacePercentOfStipend(this.place);
            },
            star() {
                return this.getPlaceStar(this.place);
            },
            reviewNumber() {
                return this.getPlaceReviewNumber(this.place);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        padding: 0 0 48px 0;
    }

    .detail__title {
        font-weight: normal;
    }

    nav {
        border-bottom: 1px solid #BDBDBD;
    }

    .detail {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        height: 137px;
        justify-content: space-evenly;
    }

    .detail__back {
        position: relative;
        left: -8px;
        margin-bottom: 8px;
    }

    .star {
        margin-left: 5px;
    }

    svg {
        width: 40px;
        height: 40px;
        transform: rotate(-90deg);
        border-radius: 50%;
        position: relative;
        top: -10px;
    }

    circle {
        fill: #A1CCF7;
        stroke: #0073E6;
        stroke-width: 32;
    }

    .place-shop__main {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
    }

    .place-reviews {
        display: flex;
        flex-direction: column;
        width: 816px;
        position: relative;
        top: -18px;
    }

    .place-reviews__items {
        height: 584px;
        overflow-y: auto;
    }

    .place-reviews__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        span {
            border-bottom: 1px solid #E5E5E5;
            width: 608px;
            padding-top: 8px;
        }

        button {
            width: 192px;
            height: 32px;
            padding: 8px 16px 8px 16px;
            color: #fff;
            background: #0073E6;
            border: none;
            cursor: pointer;
        }
    }

    .place-shop {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
    }

    .place-shop__images {
        display: flex;
        flex-direction: column;
    }

    .place-shop__images_photo {
        box-sizing: border-box;
        border: 1px solid #BDBDBD;
        padding: 8px;
        width: 400px;
        height: 168px;
        margin-bottom: 16px;
    }

    .place-shop__images_map {
        box-sizing: border-box;
        border: 1px solid #E0E0E0;
    }

    .place-address {
        color: #333333;
    }
</style>
