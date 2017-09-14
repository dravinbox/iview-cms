<style>
.demo-carousel {
    height: 200px;
    line-height: 200px;
    overflow: hidden;
    background-color: palegoldenrod;
}
</style>

<template>
    <Carousel autoplay v-model="value2">
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>
</template>
<script>
export default {
    data() {
        return {
            value2: 0
        }
    }
}
</script>
