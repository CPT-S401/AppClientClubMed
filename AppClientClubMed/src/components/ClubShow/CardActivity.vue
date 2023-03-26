<template>
  <div class="relative rounded-lg overflow-hidden shadow-md">
    <div class="absolute top-0 left-0 right-0">
      <img class="w-full h-auto" :src="imgSrc" alt="Card image" @mouseenter="showInfo = true" @mouseleave="showInfo = false">
    </div>
    <div class="card-activity bg-black bg-opacity-50 py-2 px-4" :class="{ 'show': showInfo }">
      <div class="text-white text-lg font-bold mb-2">{{ title }}</div>
      <p class="text-white font-bold mt-2" v-show="showInfo">{{ description }}</p>
    </div>
  </div>
</template>

<style>
  .card-activity {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    transform: translateY(100%);
  }
  
  .card-activity.show {
    transform: translateY(0%);
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
    }
  },
  data() {
    return {
      showInfo: false
    }
  }
};
</script>
