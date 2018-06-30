<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                prepend-icon="phone"
                name="phone"
                label="Телефон"
                type="tel"
                v-model="phone"
                :rules="phoneRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Почта"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="confirm-password"
                label="Повторите пароль"
                type="password"
                :counter="6"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :loading="loading"
              :disabled="!valid || loading"
            >Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  export default {
    data () {
      return {
        email: '',
        password: '',
        phone: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'Обязательное поле',
          v => emailRegex.test(v) || 'Почта должна быть валидна'
        ],
        passwordRules: [
          v => !!v || 'Обязательное поле',
          v => (v && v.length >= 6) || 'Пароль должен быть больше 6 символов'
        ],
        confirmPasswordRules: [
          v => !!v || 'Обязательное поле',
          v => v === this.password || 'Пароли не совпадают'
        ],
        phoneRules: [
          v => !!v || 'Обязательное поле',
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }

          this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/')
            })
            .catch(() => {})
        }
      }
    }
  }
</script>
