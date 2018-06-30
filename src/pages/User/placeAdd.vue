<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Добавление новового места</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field
            name="title"
            label="Введите название места"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Обязательное поле']"
          ></v-text-field>
          <v-text-field
            name="description"
            label="Опишите его"
            type="text"
            v-model="description"
            multi-line
            :rules="[v => !!v || 'Обязательное поле']"
          ></v-text-field>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning" @click="triggerUpload">
              Добавить фото
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none;"
              accept="image/*"
              @change="onFileChange"
            >
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" height="100" v-if="imageSrc">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 class="map-container">
            <yandex-map :clickable="true" @map-clicked='onMapClicked'></yandex-map>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || !image || loading"
              class="success"
              @click="createAd"
            >
              Добавить место
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import YandexMap from '@/components/Map.vue';

  export default {
    components:{
      YandexMap
    },
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false,
        image: null,
        imageSrc: '',
        coords: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image,
            coords: this.coords
          };

          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/places');
            })
            .catch(() => {})
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => {
          this.imageSrc = reader.result
        };
        reader.readAsDataURL(file);
        this.image = file
      },
      onMapClicked (data) {
        this.coords = data;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .map-container{
    height: 300px;
    margin: 20px 0;
  }
</style>
