<template>
  <div class="flex items-center justify-center bg-gray-100 h-full">
    <div class="max-w-md rounded overflow-hidden shadow-lg h-full flex flex-col">
      <img :src="imgSrc" alt="Card image" class="w-full h-full object-cover">
      <div class="px-6 py-4 flex-1">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarBar',
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
