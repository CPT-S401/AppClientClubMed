<template>
  <div class="flex items-center justify-center bg-gray-100 h-full">
    <div class="max-w-md rounded overflow-hidden shadow-lg h-full flex flex-col">
      <div class="px-6 py-4 flex-1">
        <div class="font-bold text-xl mb-2 text-black">{{ title }}</div>
        <hr class="border border-black">
        <br>
        <p class="text-gray-700 text-base">{{ description }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <p class="text-gray-700 text-lg font-bold">
          {{ price ? price + " €" : "Activité incluse" }}
        </p>
      </div>
    </div>
  </div>
</template>

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
    price: {
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
