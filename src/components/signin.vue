<template>
  <div>
    <v-layout>
      <v-toolbar dark color="primary">
        <v-toolbar-title>
          <router-link to="/" class="header-link">TouristPoint</router-link>
        </v-toolbar-title>
      </v-toolbar>
    </v-layout>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-form>
              <h1>Авторизация</h1>
              <v-card-text>
                <v-text-field prepend-icon="email" name="login" label="Почта" type="email"  v-model="user.email"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" v-model="user.password"></v-text-field>
              </v-card-text>
              <v-alert v-if="error">qwq</v-alert>
              <v-card-actions>
                <v-btn color="primary" to="registry">Зарегистрироваться</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="enterUser">Войти</v-btn>
              </v-card-actions>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        user:{
          email:'',
          password:''
        },
        errorCheck: false
      }
    },
    methods:{
      enterUser(){
        firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password)
          .then(response => {
            const sett = {
              email:response.email,
              uid:response.uid,
              mainPage:true,
              complete:true
            };
            this.$emit('addUser',sett);
          })
      }
    }
  }
</script>
<style>


</style>
