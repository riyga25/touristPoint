<template>
  <div id="app">
    <head>
      <meta charset="UTF-8">
      <title>Прогуляй стипендию</title>
      <link rel='stylesheet' href='dist/style.css'>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
    </head>
    <header class="header">
      <div class="container_header">
        <div class="left-column">
          <a href="/" class="header_title">Прогуляй стипендию</a>
          <label class="header-input">
            <span>Размер стипендии: </span><input type="text" id="form-color"/>
          </label>
        </div>
        <div class="right-column">
          <span class="input-sf">&#8381</span>
          <a href="" class="header-button">Добавить место</a>
        </div>
      </div>
    </header>
    <main>
      <header class="container-inner">
        <a class="next" href="/"> <span>« Вернуться к списку</span></a>
        <h2>Добавление места</h2>
      </header>
      <section>
        <form class="content">
          <div class="place-form">
            <div class="form-field">
              <label class="form-label">Название</label>
              <input class="input" type="text" name="name" placeholder="Введите название">
            </div>
            <div class="form-field">
              <label class="form-label">Адрес:</label>
              <input class="input" type="text" name="address" placeholder="Введите название">
            </div>
            <div class="form-field">
              <label class="form-label">Средний чек</label>
              <input class="input" type="text" name="averageCheck" placeholder="Введите число">
            </div>
            <div class="form-field">
              <label class="form-label">Категория:</label>
              <div class="select">
                <select name="typeId">
                  <option>Бар</option>
                  <option>Кафе</option>
                  <option>Ресторан</option>
                  <option>Кинотеатр</option>
                </select>
              </div>
            </div>
            <div class="form-field">
              <label class="form-label">Фото:</label>
              <label for="file" class="input image-input">
                <span class="placeholder">Выберите фотографию:</span>
              </label>
              <input class="image-input" type="file" name="file" id="file">
            </div>
            <div class="form-field">
              <div class="image-input">
                <img src="./assets/1111.jpg" alt="bar"/>
              </div>
            </div>
            <button type="submit" class="form-button">Добавить</button>
          </div>
          <div class="right-column1">
            <label class="form-label">Укажите место на карте</label>
            <div class="form-map"><img src="./assets/maps.jpg" alt="map"></div>
          </div>
        </form>
      </section>
    </main>
    <footer class="footer">
      <a href="https://www.simbirsoft.com/" target="_blank">Simbirsoft</a>
    </footer>
    <v-button :onClick="consoleClick">Custom</v-button>
  </div>
</template>

<script>
import button from './components/button'

export default {
  name: 'App',
  components: {
    'v-button': button
  },
  methods: {
    consoleClick() {
      console.log('Button clicked')
    }
  }
}
</script>

<style>
@import "./assets/scss/base.scss";
</style>
