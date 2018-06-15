<template>
    <main-position>
        <div class="not-found">
            <div class="not-found__back">
                <router-link to="/">&laquo; Вернуться на главную страницу</router-link>
            </div>
        </div>
    </main-position>
</template>

<script>
    import MainPosition from './pages/Position/Main.vue';

    export default {
        components: {
            MainPosition
        }
    }
</script>

<style lang="scss" scoped>
    .not-found {
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }

    .not-found__back {
        margin: 20px 0 20px 0;
    }

    .not-found__back {
        margin: 0 0 20px 0;

        a {
            color: #0073E6;
        }
    }
</style>
