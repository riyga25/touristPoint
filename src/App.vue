<template>
    <div id="app">
        <router-view></router-view>
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
