<template>
    <Carousel/>
    <div></div>
</template>

<script>
export default{
    name: 'ClubShow',
    mounted(){
        console.log('ClubShow mounted id : ' + this.$route.params.id);
    },
    props: {
        imagePath: {
            type: String,
            required: true
        },
        pays: {
            type: String,
            required: true
        },
        nomResort: {
            type: String,
            required: true
        },
        descriptionResort: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
}
</script>

<script setup>
import Carousel from '@/components/Carousel/Carousel.vue'
</script>