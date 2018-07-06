<template>
  <v-dialog v-model="dialog" max-width="300px">
    <v-card>
      <v-card-title>
        <span class="headline">Фильтры</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout align-center justify-center>
            <v-flex xs12 >
              <v-select
                :items= "categories"
                label="Категория"
              ></v-select>
              <h4>Минимальная оценка</h4>
              <star-rating :rating="4" :show-rating="false" v-bind:increment="0.5"
                                           v-bind:max-rating="5"
                                           inactive-color="#ddd"
                                           active-color="#FFB300"
                                           v-bind:star-size="16">
                                           </star-rating>
              <v-text-field label="Радиус, м." v-model="distanceFilter"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="setDafaultFilter()">Сбросить фильтры</v-btn>
        <v-btn color="blue darken-1" flat @click.native="applyFiler()">Применить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    import StarRating from 'vue-star-rating';

    export default {
    name: 'filters',
	components: {
	  StarRating,
    },
	props: ['dialog'],
	data () {
      return {
	    distanceFilter: 500,
      }
    },
    methods: {
      setDafaultFilter() {
	    this.distance = 500;
	    this.distanceFilter = 500;
        this.$emit('close');
      },
	  applyFiler() {	
        this.distance = this.distanceFilter;	  
        this.$emit('close');
      },
    },
    computed: {
      categories() {
	    var myCategories = [];
	    for (var i = 0; i < (this.$store.getters.categories.length); i++){                  
          myCategories.push(
		    {
			  'text': this.$store.getters.categories[i].name,
		      'value': this.$store.getters.categories[i].id,
		    }		  		  
		  );                    
        }
	    return myCategories;		
      },
	  distance: {
	    get: function () {
            return this.$store.getters.distance;
	    },
	    set: function (newValue) {
            this.$store.commit('setDistance', newValue);
	    }
	  },
    },
    mounted(){
        let category = this.$store.state.categoriesAll;
        if(!category) {
            this.$store.dispatch('fetchCategories');
        }
    }
  };
</script>