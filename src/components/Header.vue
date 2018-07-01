<template>
    <header>
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
            <router-link to="/" tag="span" class="pointer">
              <i class="icon icon--left">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 612 612"><path d="M516.316 337.52l94.233 193.581c3.832 7.873-.196 14.314-8.952 14.314H10.402c-8.756 0-12.785-6.441-8.952-14.314L95.684 337.52c1.499-3.079 5.528-5.599 8.952-5.599h80.801c2.49 0 5.853 1.559 7.483 3.442 5.482 6.335 11.066 12.524 16.634 18.65 5.288 5.815 10.604 11.706 15.878 17.735h-95.891c-3.425 0-7.454 2.519-8.952 5.599L58.163 505.589h495.67l-62.421-128.242c-1.498-3.08-5.527-5.599-8.953-5.599h-96.108c5.273-6.029 10.591-11.92 15.879-17.735 5.585-6.144 11.2-12.321 16.695-18.658 1.628-1.878 4.984-3.434 7.47-3.434h80.971c3.423 0 7.451 2.518 8.95 5.599zm-71.775-132.292c0 105.776-88.058 125.614-129.472 227.265-3.365 8.26-14.994 8.218-18.36-.04-37.359-91.651-112.638-116.784-127.041-198.432-14.181-80.379 41.471-159.115 122.729-166.796 82.64-7.812 152.144 56.979 152.144 138.003zm-65.427 0c0-40.436-32.779-73.216-73.216-73.216s-73.216 32.78-73.216 73.216c0 40.437 32.779 73.216 73.216 73.216s73.216-32.779 73.216-73.216z" fill="#FFF"/></svg>
              </i>
              TouristPoint
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down" v-show="whichUser">
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
              v-if="whichUser !== 'guest'"
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
              v-if="whichUser !== 'guest'"
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
    export default {
        name: 'Header',
        data(){
            return{
              drawer: false
            }
        },
        computed: {
          whichUser () {
            return this.$store.getters.user;
          },
          links () {
            if (this.whichUser === 'user') {
              return [
                {title: 'Добавить место', icon: 'note_add', url: '/place_add'},
                {title: 'Мои места', icon: 'list', url: '/places'}
              ]
            }
            else if (this.whichUser === 'guest') {
              return [
                {title: 'Войти', icon: 'home', url: '/login'},
                {title: 'Регистрация', icon: 'person_add', url: '/registration'}
              ]
            }
            else if (this.whichUser === 'admin') {
              return [
                  {title: 'Пользователи', icon: 'group', url: '/users'},
                  {title: 'Mecтa', icon: 'place', url: '/places_all'},
                  {title: 'Категории', icon: 'store_mall_directory', url: '/categories'}
              ]
            }
          }
        },
        methods: {
          onLogout () {
            this.$store.dispatch('logoutUser');
            this.$router.push('/');
          }
        }

    }
</script>

<style lang="scss">
    .pointer {
      cursor: pointer;
    }
</style>
