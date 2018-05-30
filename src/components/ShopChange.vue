<template>
  <div class="place-scroll__change">
    <span class="place-scroll__change-edit"><router-link :to="{ name: 'place-edit', params: { id: placeId } }"></router-link></span>
    <span class="place-range__change-delete"><router-link :to="{ name: 'place-delete', params: { id: placeId } }"></router-link></span>
  </div>
</template>

<script>
    export default {
      props: {
        placeId: {
          type: Number
        }
      }

    }
</script>

<style lang="scss">
    .place-scroll__change {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
    }

      .place-scroll__change-edit a {
        display: block;
        width: 20px;
        height: 20px;
        background: url('../assets/images/edit.png');
        background-size: 100%;

    }

      .place-range__change-delete a {
        display: block;
        width: 20px;
        height: 20px;
        background: url('../assets/images/delete.png');
        background-size: 100%;

    }
</style>
