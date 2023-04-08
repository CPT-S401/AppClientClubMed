<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import SearchDestination from '@/components/SearchDestination.vue'

import { onMounted } from 'vue'
import { controllers } from '@/stores';

onMounted(async () => {
    controllers().ClubController.GetAll()
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});
</script>

<template>
    <div class="bg-[url('..\components\images\home\imgHome.jpg')] bg-cover h-screen ">
        <SearchBar class="w-[75vw] ml-[12.5vw] mt-[40vh]" />
    </div>
    <SearchDestination class="p-[5vh]" />
    <!-- <div v-for="club in clubs">

    </div> -->
</template>
