<template>
  <v-container>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn slot="activator" color="primary" dark>Добавить категорию</v-btn>
        <v-card>
            <v-card-title>
              <span class="headline">Новая категория</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm5>
                    <v-text-field
                      v-model="category.name"
                      label="Название"
                      clearable
                      required
                      :rules="[v => !!v || 'Обязательное поле']"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm5>
                    <v-text-field
                      v-model="category.color"
                      label="Цвет"
                      clearable
                      required
                      :rules="[v => !!v || 'Обязательное поле']"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark flat @click.native="dialog = false">Закрыть</v-btn>
              <v-btn color="primary" dark flat @click="submit(category)" @click.native="dialog = false">Добавить</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout row justify-center>
      <v-card>
        <v-card-title>
          Категории
          <v-spacer></v-spacer>
          <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Поиск по категориям"
                  single-line
                  hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="categories"
                :search="search"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="justify-end layout icon-delete text-xs-right">
              <v-icon @click="deleteCategory(props.item.id)">
                delete
              </v-icon>
            </td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Поиск категории "{{ search }}" не дал результатов.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: "categories",
      data(){
        return{
          category:{
            name:'',
            color:''
          },
          dialog: false,
          search:'',
          headers:[
              {
                  text: 'Название категории',
                  value: 'name',
                  sortable: false,
              },
              {
                  text:'',
                  value:''
              }
          ]
        }
      },
      computed:{
        categories(){
          return this.$store.getters.categories;
        }
      },
      methods:{
        submit(newCategory){
          this.$store.dispatch('createCategory',newCategory).then(()=>{
              this.category.name = '';
              this.category.color = '';
          })
        },
        deleteCategory(itemId){
          this.$store.dispatch('deleteCategory',itemId) ;
        }
      },
      mounted(){
          let category = this.$store.state.categoriesAll;
          if(!category){
              this.$store.dispatch('fetchCategories');
          }
      }
    }
</script>

<style lang="scss">
  .dialog__container{
    margin-bottom: 20px;
  }
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
  .list > .list{
    border-bottom: 1px solid #FBFBFB;
  }
</style>
