<template>
    <main-location>
      <div class="no-page">
        <div class="no-page__back">
          <router-link to="/">&laquo; Вернуться на главную страницу</router-link>
        </div>
      </div>
    </main-location>
</template>

<script>
    import MainLocation from './pages/Location/Main.vue';

    export default {
        components: {
            MainLocation
        }
    }
</script>
<style lang="scss" scoped>
  .no-page {
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }

  .no-page__back {
    margin: 0 0 20px 0;

    a {
      color: #0073E6;
    }
  }
</style>
