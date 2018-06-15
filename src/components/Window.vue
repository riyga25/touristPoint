<template>
    <div class="window-background">
        <div class="window">
            <div class="window-header">
                <div>
                    <slot name="header">
                    </slot>
                </div>
                <button class="button-no" @click.stop="close">&#x274c;</button>
            </div>
            <div class="window-body">
                <slot name="body">
                </slot>
            </div>
            <div class="modal-window">
                <slot name="footer">
                </slot>
                <button class="button btn-cancel" @click.stop="close">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .window-background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .window {
        background: #fff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', sans-serif;
    }

    .window-header,
    .modal-window {
        padding: 15px;
        display: flex;
    }

    .window-header {
        background: white;
        border-bottom: 1px solid #eeeeee;
        color: black;
        justify-content: space-between;
        align-items: baseline;
        font-family: 'Roboto Slab', serif;
        font-size: 18px;
    }

    .modal-window {
        border-top: 1px solid #eeeeee;
        justify-content: space-evenly;
    }

    .window-body {
        position: relative;
        padding: 20px 10px;
    }

    .button-no {
        border: none;
        padding: 5px 10px 5px 10px;
        cursor: pointer;
        font-weight: bold;
        color: #fff;
        background: transparent;
    }

    .button {
        color: white;
        border: none;
        padding: 10px 20px 10px 20px;
        cursor: pointer;
    }

    .btn-accept {
        background: #0073E6;
    }

    .btn-cancel {
        background: #989898;
    }
</style>
