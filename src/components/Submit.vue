<template>
    <button type="submit" @click="submit">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        methods: {
            submit() {
                let currentRoute = this.$root.currentRoute;
                console.warn('Form on the ' + currentRoute + ' page has been submitted!');
            }
        }
    };
</script>
