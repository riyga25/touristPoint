<template>
    <v-container>
      <v-layout row justify-center>
        <v-card>
          <v-card-title>
            Места
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Поиск по месту"
                    single-line
                    hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
                  :headers="headers"
                  :items="places"
                  :search="search"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.title }}</td>
              <td class="justify-end layout icon-delete text-xs-right">
                <v-icon @click="deletePlace(props.item.id)">
                  delete
                </v-icon>
              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Поиск места "{{ search }}" не дал результатов.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "places",
        data(){
            return{
                headers:[
                    {text: 'Название места',value: 'title',sortable: false},
                    {
                        text:'',
                        value:'',
                        sortable: false
                    }
                ],
                search:''
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
            this.$store.dispatch('removeAd',key);
          }
      },
      mounted(){
          let places = this.$store.state.ads.ads;
          if(!places.length){
              this.$store.dispatch('fetchAds');
          }
      }
    }
</script>

<style lang="scss" scoped>
  i{
    cursor: pointer;
  }
  .icon-delete{
    i{
      position: relative;
      top: 50%;
      transform: translateY(-12px);
    }
  }
</style>
