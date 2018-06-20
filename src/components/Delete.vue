<template>
      <window :showCancelButton="true" v-show="isWindowVisible" @close="closeWindow">
        <template slot="header">
            Удаление места
        </template>

        <template slot="body">
            удалить место?
        </template>

        <template slot="footer">
            <button class="button btn-accept" @click.stop="Delete">
              Удалить
            </button>
        </template>
    </window>
</template>

<script>
    import Window from './Window.vue';

    export default {
        components: {
            Window
        },
        props: {
            placeId: null
        },
        data() {
            return {
                isWindowVisible: false
            }
        },
        methods: {
            showWindow() {
                this.isWindowVisible = true;
            },
            closeWindow() {
                this.isWindowVisible = false;
            },
            Delete() {
                this.$store.dispatch('deletePlaceById', this.placeId);
                this.closeWindow();
            }
        }
    }
</script>
