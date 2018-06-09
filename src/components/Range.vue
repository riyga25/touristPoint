<template>
    <div>
        <vue-range
            :bgStyle="bgStyle"
            :processStyle="processStyle"
            :sliderStyle="sliderStyle"
            :height="height"
            :dotWidth="dotWidth"
            :dotHeight="dotHeight"
            :tooltip="tooltip"
            :value="value"
            @input="$emit('input', $event)"
            @drag-end="$emit('drag-end')"
        >
        </vue-range>
    </div>
</template>

<script>
    import vueRange from 'vue-slider-component';

    export default {
        components: {
            vueRange
        },
        data() {
            return {
                value: [0, 100],
                tooltip: false,
                height: 8,
                dotWidth: 8,
                dotHeight: 24,
                bgStyle: {
                    "backgroundColor": "#E0E0E0",
                },
                processStyle: {
                    "backgroundColor": "#0073E6"
                },
                sliderStyle: {
                    "backgroundColor": "#4296EA",
                    "borderRadius": "0"
                }
            }
        }
    }
</script>
