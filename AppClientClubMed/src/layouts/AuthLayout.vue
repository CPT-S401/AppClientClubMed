<template>
    <main>
        <h1>Dashboard</h1>
        <router-view/>
        <Footer/>
    </main>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
</script>