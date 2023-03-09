<template>
    <main>
        <div class="bg-[url('..\components\images\home\imgHome.jpg')] bg-cover h-screen ">
            <Header />
            <SearchBar class="w-[75vw] ml-[12.5vw] mt-[40vh]" />
        </div>
        <router-view/>
        <Footer/>
    </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>