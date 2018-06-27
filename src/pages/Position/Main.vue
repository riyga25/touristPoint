<template>
    <div>
        <custom-header></custom-header>
        <slot></slot>
        <custom-footer></custom-footer>
    </div>
</template>
<script>
    import CustomHeader from '../../components/Header.vue';
    import CustomFooter from '../../components/Footer.vue';

    export default {
        components: {
            CustomHeader,
            CustomFooter
        }
    }
</script>
