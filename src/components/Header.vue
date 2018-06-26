<template>
    <header>
        <div class="container">
            <div class="header">
                <h2 class="header__title">
                  TouristPoint!
                </h2>
            </div>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    header {
        color: #fff;
        background: black;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
    }

    .header__title {
        font-family: 'Roboto Slab', serif;
        font-size: 22px;
        font-weight: bold;
    }
</style>
