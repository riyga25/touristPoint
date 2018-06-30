<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <h1>Регистрация</h1>
              <v-card-text>
                <v-form>
                  <v-text-field name="email" label="Почта" type="email"  v-model="user.email"></v-text-field>
                  <v-text-field name="phone" label="Телефон" type="tel"  v-model="user.phone"></v-text-field>
                  <v-text-field name="name" label="ФИО" type="text"  v-model="user.name"></v-text-field>
                  <v-text-field name="password" label="Пароль" type="password" v-model="user.password"></v-text-field>
                  <v-text-field name="password2" label="Повторите пароль" type="password" v-model="user.confirmPassword"></v-text-field>
                </v-form>
                <v-alert :value="error" type="error" v-if="error">
                  <strong>Упс!</strong> Пароли не совпадают или вы забыли их ввести.
                </v-alert>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="routeBack">Назад</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="registerUser">Зарегистрироваться</v-btn>
              </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>
<script>
  import firebase from 'firebase';

 export default {
   name:'sign-up',
   data(){
     return{
       user:{
         email:'',
         password:'',
         confirmPassword:'',
         phone:'',
         name:''
       },
       error:false
     }
   },
   methods:{
     registerUser(){
       if(this.user.password !== this.user.confirmPassword || this.user.password.length<6){
         this.error = true;
       } else{
         firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password)
           .then(()=>{
           this.$emit('regSuccess','sign-in');
           })
           .catch(error =>{
             console.log(error);
           })
     }
     },
     routeBack(){
       this.$router.go(-1);
     }
   }
 }
</script>
