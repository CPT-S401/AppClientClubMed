<template>
  <div class="flex items-center justify-center bg-gray-100 h-full">
    <div class="max-w-md rounded overflow-hidden shadow-lg h-full flex flex-col">
      <img :src="imgSrc" alt="Card image" class="w-full h-full object-cover">
      <div class="px-6 py-4 flex-1">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">{{ description }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button @click="showInfo = !showInfo"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {{ showInfo ? 'Masquer' : 'Afficher' }} les détails
        </button>
      </div>
      <div v-show="showInfo" class="px-6 py-4">
        <p class="text-gray-700 text-base">Détails de l'activité...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarActivity',
  props: {
    nom: {
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
