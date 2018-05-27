<template>
    <div>
        <custom-header></custom-header>
        <slot></slot>
        <custom-footer></custom-footer>
    </div>
</template>

<script>
    import CustomHeader from '../part/Header.vue';
    import CustomFooter from '../part/Footer.vue';

    export default {
        components: {
            CustomHeader,
            CustomFooter
        }
    }
</script>
