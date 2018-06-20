<template>
    <div class="place-scroll__change">
        <span class="place-scroll__change-edit" @click.stop="openEditPage"><a></a></span>
        <span class="place-scroll__change-delete" @click.stop="$refs.window.showWindow()"><a></a></span>
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
                type: String
            }
        },
        methods: {
            openEditPage() {
                this.$router.push({ name: 'place-edit', params: { id: this.placeId }});
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
        background: url('../assets/images/change.png');
        background-size: 100%;
    }

    .place-scroll__change-delete a {
        display: block;
        width: 20px;
        height: 20px;
        background: url('../assets/images/del.png');
        background-size: 100%;
    }
</style>
