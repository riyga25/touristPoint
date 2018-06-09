<template>
    <header>
        <div class="container">
            <div class="header">
                <h2 class="header__title">
                  Прогуляй стипендию!
                </h2>
                <div class="header__stipend-size">
                    <label class="text-1">
                      Размер стипендии:
                    </label>
                    <input class="text-2" v-model="stipend">
                    &#x20bd;
                </div>
                <div class="header__right-link">
                    <router-link to="/place/create" class="text-1">
                      Добавить место
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        computed: {
            stipend: {
                get() {
                    return this.$store.getters.stipend;
                },
                set(value) {
                    this.$store.dispatch('setStipend', value);
                }
            }
        }
    }
</script>

<style lang="scss">
    header {
        color: #fff;
        background: #4296EA;

        .text-1 {
            color: #fff;
        }
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

    .header__right-link {
        background: #0073E6;
        line-height: 50px;
        text-align: center;
        width: 192px;
    }

    .header__stipend-size input {
        border: none;
        background: #0073E6;
        line-height: 50px;
        text-align: center;
        padding: 0;
        color: #fff;
        width: 112px;
    }
</style>
