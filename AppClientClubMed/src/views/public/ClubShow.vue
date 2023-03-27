<template>
    <Carousel />
</template>


<script setup lang="ts">
import Carousel from '@/components/Carousel/Carousel.vue'
import CardActivity from '@/components/ClubShow/CardActivity.vue'

import { onMounted, ref } from 'vue'
import { controllers } from '@/stores';

const id = window.location.pathname.split('/').pop()

const clubActivities = ref([])

onMounted(async () => {
    try {
      const ah = "a";
        const response = await controllers().ClubController.GetById(id)
        console.log(response.data)
        clubActivities.value = response.data.clubActivities
    } catch (error) {
        console.log(error);
    }
});
</script>
