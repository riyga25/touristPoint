<template>
    <div class="place-scroll__change">
        <span class="place-scroll__change-edit"></span>
        <span class="place-range__change-delete"></span>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .place-scroll__change {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .place-scroll__change-edit {
        width: 20px;
        height: 20px;
        background: url('../assets/images/edit.png');
        background-size: 100%;
    }

    .place-range__change-delete {
        width: 20px;
        height: 20px;
        background: url('../assets/images/delete.png');
        background-size: 100%;
    }
</style>
