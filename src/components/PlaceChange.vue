<template>
    <div class="place-scroll__change">
        <span class="place-scroll__change-edit"><router-link :to="{ name: 'place-edit', params: { id: placeId } }"></router-link></span>
        <span class="place-scroll__change-delete" @click="$refs.window.showWindow()"><a></a></span>
        <delete :placeId="placeId" ref="window"></delete>
    </div>
</template>

<script>
    import Delete from './Delete.vue';

    export default {
        components: {
           Delete
        },
        props: {
            placeId: {
                type: Number
            }
        }
    }
</script>

<style lang="scss" scoped>
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
        background: url('../assets/images/Change.png');
        background-size: 100%;
    }

    .place-scroll__change-delete a {
        display: block;
        width: 20px;
        height: 20px;
        background: url('../assets/images/Del.png');
        background-size: 100%;
    }
</style>
