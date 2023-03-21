<template>
  <div>
    <Carousel />
    <div class="h-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        class="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
        v-for="(activity, index) in activities"
        :key="index"
        @mouseover="showDetails(index)"
        @mouseout="hideDetails(index)"
      >
        <img class="w-full h-auto" :src="activity.imgSrc" :alt="activity.title" />
        <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 transition duration-500 transform" :class="{ '-translate-y-full': !activity.showDetails }">
          <div class="py-2 px-4">
            <h2 class="text-white text-lg font-bold">{{ activity.title }}</h2>
            <p class="text-white font-bold">{{ activity.description }}</p>
            <p class="text-white font-bold">{{ activity.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue";

export default {
  name: "ClubShow",
  components: {
    Carousel,
  },
  mounted() {
    console.log("ClubShow mounted id : " + this.$route.params.id);
  },
  data() {
    return {
      activities: [
        {
          title: "Activité 1",
          description: "Description de l'activité 1",
          imgSrc: "https://via.placeholder.com/800x400",
          type: "Type d'activité 1",
          showDetails: false,
        },
        {
          title: "Activité 2",
          description: "Description de l'activité 2",
          imgSrc: "https://via.placeholder.com/800x400",
          type: "Type d'activité 2",
          showDetails: false,
        },
        {
          title: "Activité 3",
          description: "Description de l'activité 3",
          imgSrc: "https://via.placeholder.com/800x400",
          type: "Type d'activité 3",
          showDetails: false,
        },
      ],
    };
  },
  methods: {
    showDetails(index) {
      this.activities[index].showDetails = true;
    },
    hideDetails(index) {
      this.activities[index].showDetails = false;
    },
  },
};
</script>
