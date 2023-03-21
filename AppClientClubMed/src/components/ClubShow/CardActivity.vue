<template>
  <div class="relative rounded-lg overflow-hidden shadow-md" @mouseenter="showInfo = true" @mouseleave="showInfo = false">
    <img class="w-full h-auto" :src="imgSrc" alt="Card image"/>
    <div class="absolute bottom-0 left-0 right-0 transition-all duration-500 transform" :class="{'translate-y-full': !showInfo}">
      <div class="bg-black bg-opacity-50 py-2 px-4">
        <h2 class="text-white text-lg font-bold">{{ title }}</h2>
        <p class="text-white font-bold" :class="{'opacity-0': !showInfo, 'opacity-100': showInfo}">{{ description }}</p>
        <p class="text-white font-bold" :class="{'opacity-0': !showInfo, 'opacity-100': showInfo}">{{ typeActivite }}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .transform {
    transition: transform 0.5s ease-in-out;
  }
</style>


<script>
export default {
  name: 'CardActivity',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    typeActivite: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showInfo: false
    }
  }
};
</script>
