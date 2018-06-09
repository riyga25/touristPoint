<template>
    <span class="star">
        <span :style="{ 'width': ratingPercent + '%' }" class="star__1"></span>
    </span>
</template>

<script>
    export default {
        props: {
            value: {
                type: Number
            }
        },
        computed: {
            ratingPercent() {
                return (this.value / 5) * 100;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .star {
        display: inline-block;
        width: 80px;
        height: 16px;
        background: url('../assets/images/star1.png') repeat-x;
        margin-right: 8px;
    }

    .star__1 {
        display: inline-block;
        height: 16px;
        background: url('../assets/images/star2.png') repeat-x;
    }
</style>
