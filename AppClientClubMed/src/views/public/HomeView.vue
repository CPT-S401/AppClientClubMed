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
