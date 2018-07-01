<template>
    <v-container>
      <v-layout row justify-center>
        <v-flex xs12>
          <v-list>
            <v-list
              v-for="item in places"
              :key="item.id"
              no-action
              xs12
            >
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title}}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon @click="deletePlace(item.id)">delete</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "places",
        data(){
            return{
                headers:[
                    {text: 'Название',value: 'title'},
                ]
            }
        },
        computed:{
            places(){
                return this.$store.getters.ads;
            },
            loading () {
                return this.$store.getters.loading;
            }
        },
      methods:{
          deletePlace(key){
            this.$store.dispatch('deleteAd',key);
          }
      }
    }
</script>

<style scoped>
  i{
    cursor: pointer;
  }
</style>
