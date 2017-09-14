
<style scoped lang="less">
.index {
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
}
</style>
<template>
    <div class="index">
        <carousel></carousel>
    </div>
</template>
<script>
import Carousel from '../components/carousel.vue'
export default {
    components: {
        Carousel
    },
    methods: {
        handleStart() {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        }
    }
}
</script>

