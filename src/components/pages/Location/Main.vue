<template>
    <div>
        <custom-header></custom-header>
        <slot></slot>
        <custom-footer></custom-footer>
    </div>
</template>

<script>
    import CustomHeader from '../../Header.vue';
    import CustomFooter from '../../Footer.vue';

    export default {
        components: {
            CustomHeader,
            CustomFooter
        }
    }
</script>
