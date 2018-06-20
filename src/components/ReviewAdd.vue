<template>
    <window v-show="isWindowVisible" @close="closeWindow">
        <template slot="header">
            Оставить отзыв
        </template>

        <template slot="body">
            <form class="review-add">
                <div class="review-add__author">
                    <label class="text-1">Имя:</label>
                    <input class="text-1" v-model="review.author" type="text" placeholder="Введите свое имя">
                </div>
                <div class="review-create__text">
                    <label class="text-primary">Текст отзыва:</label>
                    <textarea v-model="review.text"></textarea>
                </div>
            </form>
        </template>

        <template slot="footer">
            <div class="review-add__rating">
                <span class="text-primary">Поставьте оценку:</span>
                <span class="star-rating star-5">
                    <input type="radio" name="star" value="1" v-model.number="review.star"><i></i>
                    <input type="radio" name="star" value="2" v-model.number="review.star"><i></i>
                    <input type="radio" name="star" value="3" v-model.number="review.star"><i></i>
                    <input type="radio" name="star" value="4" v-model.number="review.star"><i></i>
                    <input type="radio" name="star" value="5" v-model.number="review.star"><i></i>
                </span>
            </div>
            <button class="button button-accept" @click.stop="createReview">Отправить отзыв</button>
        </template>
    </window>
</template>

<script>
    import Window from './Window.vue';

    export default {
        components: {
            Window
        },
        props: {
            placeId: {
                type: String
            }
        },
        data() {
            return {
                isWindowVisible: false,
                review: {
                    text: '',
                    author: '',
                    rating: 1
                }
            }
        },
        methods: {
            showWindow() {
                this.isWindowVisible = true;
            },
            closeWindow() {
                this.isWindowVisible = false;
            },
            createReview() {
                this.$store.dispatch('createReview', { newReview: this.review, placeId: this.placeId });
                this.closeWindow();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .review-add__rating {
        display: flex;
        flex-direction: column;
    }

    .review-add__author, .review-create__text {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 8px;
        }

        input, textarea {
            box-sizing: border-box;
            width: 400px;
        }
    }

    .review-add__author {
        margin-bottom: 24px;

        input {
            height: 32px;
            padding: 8px 15px 8px 16px;
        }
    }

    .review-create__text {
        textarea {
            resize: none;
            height: 88px;
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
