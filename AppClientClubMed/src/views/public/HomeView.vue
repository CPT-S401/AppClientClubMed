<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import SearchDestination from '@/components/SearchDestination.vue'
</script>

<template>
    <div class="bg-[url('..\components\images\home\imgHome.jpg')] bg-cover h-screen ">
        <SearchBar class="w-[75vw] ml-[12.5vw] mt-[40vh]" />
    </div>
    <SearchDestination class="p-[5vh]" />
</template>

<!-- <script setup lang="ts">
import { controllers } from '@/stores';
onMounted(async () => {
    controllers().ClubController.getAll()
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});
</script> -->
