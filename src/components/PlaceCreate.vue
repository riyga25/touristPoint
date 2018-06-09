<template>
    <main-position>
        <nav>
            <div class="container">
                <div class="nav">
                    <div>
                        <div class="nav__back">
                            <router-link to="/" class="text-1">&laquo; Вернуться к списку</router-link>
                        </div>
                        <h3 class="nav__title text-2">
                            <template>Добавление места</template>
                        </h3>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <div class="container">
                <section>
                    <div class="content">
                        <form class="content__form">
                            <label class="text-1" for="name">Название:</label>
                            <input v-model="place.name" type="text" name="name" id="name" placeholder="Введите название">

                            <label class="text-1" for="address">
                              Адрес:
                            </label>
                            <input v-model="place.address" type="text" name="address" id="address" placeholder="Введите адрес">

                            <label class="text-1" for="average-check">
                              Средний чек:
                            </label>
                            <input v-model="place.averageCheck" type="number" name="average_check" id="average-check"
                                   placeholder="Введите размер среднего чека, руб." min="1" step="0.01">

                            <label class="text-1">
                              Категория:
                            </label>
                            <select v-model="place.category">
                                <option></option>
                                <option v-for="category in categories" :value="{ id: category.id, name: category.name }">{{ category.name }}</option>
                            </select>

                            <label class="text-1" for="photo">
                              Фото:
                            </label>
                            <input type="text" name="photo_url"
                                   value="http://photo-bar.com"
                                   disabled>
                            <input type="file" name="photo" id="photo" accept="image/*">

                            <img src="../assets/images/bar.jpeg">

                            <button class="text-1" type="submit" @click.prevent="createPlace">
                              Добавить
                            </button>
                        </form>
                        <div class="content__map">
                            <span class="content__map_title text-1">
                              Укажите место на карте:
                            </span>
                            <img src="../assets/images/places-map.png">
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </main-position>
</template>

<script>
    import MainPosition from './pages/Positions/Main.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            MainPosition
        },
        data() {
            return {
                place: {
                    id: null,
                    name: '',
                    address: '',
                    averageCheck: 0,
                    category: {
                        id: null,
                        name: ''
                    }
                }
            }
        },
        computed: {
            ...mapGetters([
                'categories',
                'getNewPlaceId'
            ])
        },
        methods: {
            createPlace()
            {
                this.place.id = this.getNewPlaceId;
                this.$store.dispatch('createPlace', this.place);
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    nav {
        border-bottom: 1px solid #BDBDBD;
    }

    select {
        padding: 8px 15px 8px 16px;
        margin-bottom: 24px;
    }

    .nav {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        height: 137px;
        justify-content: space-evenly;
    }

    .nav__back {
        position: relative;
        left: -10px;
        margin-bottom: 8px;
    }

    .content {
        display: flex;
        justify-content: space-between;
        padding: 30px 0 30px 0;
    }

    .content__form {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        width: 400px;

    label {
        display: block;
        margin-bottom: 8px;
    }

    input, select {
        padding: 8px 15px 8px 16px;
        margin-bottom: 24px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

    button {
        padding: 10px;
        color: #fff;
        background: #0073E6;
        border: none;
        cursor: pointer;
    }

    img {
        box-sizing: border-box;
        width: 400px;
        border: 1px solid #BDBDBD;
        padding: 8px;
        margin-bottom: 24px;
    }

    #photo {
        display: none;
    }
    }

    .content__map {
        display: flex;
        flex-direction: column;

    img {
        flex: 1;
        width: 816px;
        border: 1px solid #E0E0E0;
    }
    }

    .content__map_title {
        margin-bottom: 8px;
    }
</style>
