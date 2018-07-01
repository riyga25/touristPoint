<template>
  <v-card>
    <v-form @submit.prevent="submit">
      <v-container>
        <v-card-title> Добавить категорию</v-card-title>
        <v-layout row wrap>
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
          <v-btn type="submit">Добавить</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </v-card>

</template>

<script>
    export default {
      name: "categories",
      data(){
        return{
          category:{
            name:'',
            color:''
          }
        }
      },
      computed:{
          categories(){
            return this.$store.getters.categories;
          }
      },
      methods:{
        submit(){
          this.$store.dispatch('createCategory',this.category);
        }
      }
    }
</script>

<style scoped>
  .flex{
    margin-right: 10px;
  }
</style>
