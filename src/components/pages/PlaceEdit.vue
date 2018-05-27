<template>
    <main-location>
        <nav>
            <div class="container">
                <div class="nav">
                    <div>
                        <div class="nav__back">
                            <v-link class="text-1" href="/">
                              &laquo; Вернуться назад
                            </v-link>
                        </div>
                        <h3 class="nav__title text-2">
                          Добавление места
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
                            <label class="text-1" for="name">
                              Название:
                            </label>
                            <input type="text" name="name" id="name" placeholder="Введите название">
                            <label class="text-1" for="address">
                              Адрес:
                            </label>
                          <input type="text" name="address" id="address" placeholder="Введите адрес">
                            <label class="text-1" for="average-check">
                              Средний чек:
                            </label>
                          <input type="number" name="average_check" id="average-check"
                                   placeholder="Введите значение." min="1" step="0.01">
                            <label class="text-1" for="category">
                              Категория:
                            </label>
                            <select name="category" id="category">
                                <option value="kino">
                                  Кинотеатр
                                </option>
                                <option value="saloon" selected>
                                  Бар
                                </option>
                                <option value="cafe">
                                  Кафе
                                </option>
                                <option value="restaurant">
                                  Ресторан
                                </option>
                            </select>
                            <label class="text-1" for="photo">
                              Фото:
                            </label>
                          <input type="text" name="photo_url"
                                   value="https://www.google.ru/search?q=%D0%B1%D0%B0%D1%80&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwispsy5laTbAhXBoCwKHUxICLcQ_AUICygC&biw=1707&bih=819&dpr=1.13#imgrc=ruI0T8Avv2Dk4M:"
                                   disabled><input type="file" name="photo" id="photo" accept="image/*">
                            <img src="../../assets/images/bar.jpeg">
                            <v-submit class="text-1">
                              Добавить
                            </v-submit>
                        </form>
                        <div class="content__map">
                            <span class="content__map_title text-1">
                              Укажите место на карте:
                            </span>
                            <img src="../../assets/images/places-map.png">
                        </div>
                    </div>
                </section>
            </div>
        </main>


    </main-location>
</template>

<script>
    import MainLocation from './Location/Main.vue';
    export default {
        components: {
            MainLocation
        }
    }
</script>

<style lang="scss">
    nav {
        border-bottom: 1px solid #0073E6;
    }
    .content__map {
      display: flex;
      flex-direction: column;

      img {
        flex: 1;
        width: 816px;
        border: 1px solid #0073E6;
      }
    }

    .content__map_title {
      margin-bottom: 8px;
    }
    select {
        background: #fff ;
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
        }

        img {
            box-sizing: border-box;
            width: 400px;
            border: 1px solid #0073E6;
            padding: 8px;
            margin-bottom: 24px;
        }

        #photo {
            display: none;
        }
    }


</style>
