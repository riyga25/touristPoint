<template>
    <header>
	    <filters
             :dialog="filters"
             @close="closeModal"
        />
        <v-toolbar
          app
          dark
          color="primary"
        >
          <v-toolbar-side-icon
            @click="drawer = !drawer"
            class="hidden-md-and-up"
          ></v-toolbar-side-icon>
          <v-toolbar-title>
            <router-link to="/" tag="span" class="pointer">TouristPoint</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
              v-for="link in links"
              :key="link.title"
              :to="link.url"
              flat
            >
              <v-icon left>{{link.icon}}</v-icon>
              {{link.title}}
            </v-btn>
            <v-btn
              @click="onLogout"
              flat
              v-if="isUserLoggedIn"
              >
              <v-icon left>exit_to_app</v-icon>
              Выйти
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer
          width="250"
          app
          temporary
          v-model="drawer"
          >
          <v-list>
            <v-list-tile>
              <v-list-tile-title @click="openModal()">Фильтры</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="link of links"
              :key="link.title"
              :to="link.url"
            >
              <v-list-tile-action>
                <v-icon>{{link.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="link.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-if="isUserLoggedIn"
              @click="onLogout"
            >
              <v-list-tile-action>
                <v-icon>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="'Выйти'"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
    </header>
</template>

<script>
    import filters from '../components/filters.vue';
    export default {
        name: 'Header',
		components: {
            filters
        },
        data(){
            return{
              drawer: false,
              filters: false
            }
        },
        computed: {
          isUserLoggedIn () {
            return this.$store.getters.isUserLoggedIn
          },
          links () {
            if (this.isUserLoggedIn) {
              return [
                {title: 'Добавить место', icon: 'note_add', url: '/place_add'},
                {title: 'Мои места', icon: 'list', url: '/places'}
              ]
            }

            return [
              {title: 'Войти', icon: 'home', url: '/login'},
              {title: 'Регистрация', icon: 'person_add', url: '/registration'}
            ]
          }
        },
        methods: {
          onLogout () {
            this.$store.dispatch('logoutUser');
            this.$router.push('/');
          },
          openModal() {
            this.drawer = false;
            this.filters = true;
          },
          closeModal() {
            this.filters = false;
          }
        }

    }
</script>

<style lang="scss">
    .pointer {
      cursor: pointer;
    }
</style>
