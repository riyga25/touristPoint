<template>
  <v-container>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn slot="activator" color="primary" dark>Добавить категорию</v-btn>
        <v-card>
          <v-form ref="form">
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
              <v-btn color="primary" @click="clearForm" dark flat @click.native="dialog = false">Закрыть</v-btn>
              <v-btn color="primary" dark flat @click="submit(category)" @click.native="dialog = false">Добавить</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-list>
          <v-list
            v-for="item in categories"
            :key="item.id"
            no-action
            xs12
          >
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action @click="deleteCategory(item.id)">
                <v-icon>delete</v-icon>
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
      name: "categories",
      data(){
        return{
          category:{
            name:'',
            color:''
          },
          dialog: false
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
              this.clearForm();
          });
        },
        deleteCategory(itemId){
          this.$store.dispatch('deleteCategory',itemId);
        },
        clearForm(){
          this.$refs.form.reset()
        }
      }
    }
</script>

<style scoped>
  .dialog__container{
    margin-bottom: 20px;
  }
  i{
    cursor: pointer;
  }
  .list > .list{
    border-bottom: 1px solid #FBFBFB;
  }
</style>
