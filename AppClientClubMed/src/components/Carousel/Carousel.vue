<template>
    <div class="relative w-full">
        <div class="h-96 overflow-hidden">
            <div v-for="(image, index) in images" :key="index">
                <img class="w-full h-full object-cover rounded" :src="image.img"
                    v-show="currentImageIndex === index || currentImageIndex === -1">
            </div>
        </div>
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button @click="prevImage" class="text-white font-bold bg-black px-4 py-2 rounded-l-lg">Précédent</button>
        </div>
        <div class="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button @click="nextImage" class="text-white font-bold bg-black px-4 py-2 rounded-r-lg">Suivant</button>
        </div>
    </div>
</template>  
  
<script>
export default {
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentImageIndex: 0,
        };
    },
    methods: {
        prevImage() {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
            } else {
                this.currentImageIndex = this.images.length - 1;
            }
        },
        nextImage() {
            if (this.currentImageIndex < this.images.length - 1) {
                this.currentImageIndex++;
            } else {
                this.currentImageIndex = 0;
            }
        }
    }
};
</script>