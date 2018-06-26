<template>
  <div>
    <div class="container-fluid navbar-inverse bg-inverse">
      <div class="row">
        <div class="col">
          <nav class="navbar">
            <form class="form-inline d-flex justify-content-end">
              <div v-if="!signComplete">
                <button class="btn btn-outline-success mr-3" type="button" @click="switchSign('sign-in')">Войти</button>
                <button class="btn btn-outline-success" type="button" @click="switchSign('sign-up')">Регистрация</button>
              </div>
              <span v-else>{{email}}</span>
            </form>
          </nav>
        </div>
      </div>
    </div>
    <div class="container" v-if="!isMainPage">
      <div class="row">
        <div class="col">
          <signin v-if="sign === 'sign-in'" @addUser="isMainPage = $event.mainPage,signComplete = $event.complete, email = $event.email, uid = $event.uid"></signin>
          <signup v-else @regSuccess=" sign = $event"></signup>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row">
        <div class="col">
          <mainpage :uid="uid"></mainpage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import signin from './components/signin.vue'
  import signup from './components/signup.vue'
  import mainpage from './components/mainpage.vue'

  export default {
    name: 'app',
    data(){
      return{
        sign:'sign-in',
        isMainPage:false,
        signComplete:false,
        email:'',
        uid:''
      }
    },
    components:{
      signin,
      signup,
      mainpage
    },
    methods:{
      switchSign(currentSign){
        this.sign = currentSign;
      }
    }
  }
</script>

<style>
  span{
    color: black;
  }
</style>
