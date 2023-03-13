<script setup lang="ts">
import iconPlus from './icons/iconPlus.vue';
</script>
<template>
    <div class="bg-white pl-5 pr-5">
        <h3 class="text-2xl text-primary-blue font-bold">
            <slot name="title"></slot>
        </h3>
        <div class="font-semibold">
            <slot name="buttons"></slot>
        </div>
        <div class="flex gap-10 pb-5" >
            <slot name="objectDisplay"></slot>
            <iconPlus class="w-20 text-primary-blue"/>
        </div>
  </div>
</template>