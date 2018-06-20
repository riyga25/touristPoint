<template>
    <div id="app">
      <transition name="router-page" mode="out-in" enter-active-class="animated zoomInUp" leave-active-class="animated zoomOut">
        <router-view></router-view>
      </transition>

    </div>
</template>

<script>
    export default {
      beforeCreate() {
        this.$store.dispatch('preparePlaces');
        this.$store.dispatch('prepareCategories');
                }
    }
</script>
