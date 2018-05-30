<template>
  <main-location>
    <nav>
      <div class="container">
        <div class="nav">
          <div>
            <div class="nav__back">
              <router-link to="/" class="text-1">&laquo; Вернуться к списку</router-link>
            </div>
            <h3 class="nav__title text-2">
              Удаление места
            </h3>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="container">
        <div class="content">
          <div v-if="place">
            <div class="content__title text-2">
              Удалить заведение?
            </div>
            <div>
              <button @click="remove">Да</button>
              <button class="button__no" @click="cancel">Отмена</button>
            </div>
          </div>
          <div v-else class="text-2">
            Заведение не найдено
          </div>
        </div>
      </div>
    </main>
  </main-location>
</template>

<script>
  import MainLocation from './pages/Location/Main.vue';

  export default {
    components: {
      MainLocation
    },
    methods: {
      remove() {
        alert('Место удалено.');
        this.$router.push('/');
      },
      cancel() {
        this.$router.push('/');
      }
    },
    computed: {
      place() {
        return this.$root.places.find(place => place.id == this.$route.params.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    border-bottom: 1px solid #BDBDBD;
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
    flex-direction: column;
    padding: 20px 0 20px 0;
  }

  .content__title {
    margin-bottom: 10px;
  }

  button {
    width: 100px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 10px;
    color: #fff;
    background: #0073E6;
    border: none;
  }
</style>
