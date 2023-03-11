<template>
    <Carousel/>
</template>

<script>
export default{
    name: 'ClubShow',
    mounted(){
        console.log('ClubShow mounted id : ' + this.$route.params.id);
    },
}
</script>

<script setup>
import Carousel from '@/components/Carousel.vue'
</script>