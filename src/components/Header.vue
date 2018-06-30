<template>
    <header>
	    <filters
             :dialog="filters" 
             @close="closeModal"			 
        />
        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                dark
                color="primary"
                app
                fixed
        >
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link class="text-white"  to="/">
                    TouristPoint
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>filter_list</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer
                v-model="drawer"
                temporary
                absolute
                width="250"
                app
        >
            <v-list dense>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <router-link class="text-main" to="/auth">
                                Вход
                            </router-link>							
                        </v-list-tile-title>
					<v-list-tile-title @click="openModal()">Фильтры</v-list-tile-title>	
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
				filters: false,
            }
        },
		methods: {
            openModal() {
                this.drawer = false;
			    this.filters = true;
            },
		    closeModal() {            
			    this.filters = false;
            }
        },

    }
</script>

<style lang="scss">
    .text-white{
        color: white;
    }
    .text-main{
        color: rgba(0,0,0,.54);
    }
</style>
