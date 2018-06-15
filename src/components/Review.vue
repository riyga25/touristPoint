<template>
    <div class="review-scroll">
        <div class="review-scroll__header">
            <span class="text-1 review-author">{{ review.author }}</span>
            <span class="review-star"><star :value="review.star"></star></span>
        </div>
        <div class="review-scroll__text text-1-dark">
            {{ review.text }}
        </div>
    </div>
</template>

<script>
    import Star from './Star.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            Star
        },
        props: {
            review: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .review-scroll {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }

    .review-scroll__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .review-scroll__text {
        height: 112px;
        padding: 16px 16px 22px 16px;
        box-sizing: border-box;
        border: 1px solid #E5E5E5;
        background: #FFFFFF;
    }

</style>
