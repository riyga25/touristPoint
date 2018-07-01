<template>
    <div id="app">
      <v-dialog v-model="dialog" persistent max-width="300px">
        <v-card>
          <v-card-title>
            <span class="headline">Фильтры</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout align-center justify-center>
			    <v-flex xs12 >
                  <v-select
                    :items= "getCategories"
                    label="Категории"
                  ></v-select>
                  <h4>Минимальная оценка</h4>
				  <star-rating :rating="4" :show-rating="false" v-bind:increment="0.5"
                                               v-bind:max-rating="5"
                                               inactive-color="#ddd"
                                               active-color="#f00"
                                               v-bind:star-size="16">
                                               </star-rating>
				  <v-text-field label="Радиус" ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close()">Сбросить фильтры</v-btn>
            <v-btn color="blue darken-1" flat @click.native="close()">Применить</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</div>
</template>

<script>
    import StarRating from 'vue-star-rating';

    export default {
    name: 'filters',
	  components: {
	    StarRating,
    },
	  props: ['dialog'],
    methods: {
      close() {
        this.$emit('close');
      },
    },
    computed: {
      getCategories(){
        return this.$store.getters.categories;
      }
    },
  };
</script>
