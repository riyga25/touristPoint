<template>
  <div class="sign">
  <form class="mt-5" @submit.prevent="enterUser">
    <div class="form-group">
      <label for="email">Ваш Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Введите Email" required v-model="user.email">
    </div>
    <div class="form-group">
      <label for="password">Ваш пароль:</label>
      <input type="password" class="form-control" id="password" placeholder="Введите пароль" required v-model="user.password">
    </div>
    <button type="submit" class="btn btn-primary">Войти</button>
  </form>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        user:{
          email:'',
          password:''
        }
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
