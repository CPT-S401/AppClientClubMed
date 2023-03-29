<template>
    <div class="bg-white">
        <Carousel />
        <div class="bg-white flex justify-center">
            <div class="bg-primary-blue max-w-4xl w-full h-full mt-8 mb-8 p-8 rounded-lg shadow-2xl">
                <h1 class="text-3xl text-white font-bold mb-4">{{ club.nom }}</h1>
                <p class="text-gray-100 mb-4">{{ club.description }}</p>
                <div class="flex justify-between mb-4">
                    <p class="text-gray-100"><span class="font-bold">Latitude:</span> {{ club.latitude }}</p>
                    <p class="text-gray-100"><span class="font-bold">Longitude:</span> {{ club.longitude }}</p>
                </div>
                <p class="text-gray-100 mb-4"><span class="font-bold">Email:</span> {{ club.email }}</p>
            </div>
        </div>
        <div class="m-6 p-6 rounded-lg border-2 border-primary-blue">
            <h1 class="text-3xl text-primary-blue font-bold mb-4 ml-4">Les bars :</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="bar in bars" :key="bar.id" class="h-full">
                    <CardBar :nom="bar.nom" :description="bar.description" :imgSrc="bar.imgSrc"
                        class="flex flex-col h-full" />
                </div>
            </div>
        </div>
        <div class="m-6 p-6 rounded-lg border-2 border-primary-blue">
            <h1 class="text-3xl text-primary-blue font-bold mb-4 ml-4">Les activités :</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="activity in activities" :key="activity.id" class="h-full">
                    <CardActivity :title="activity.nom" :description="activity.description" :imgSrc="activity.imgSrc"
                        class="flex flex-col h-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel/Carousel.vue'
import CardActivity from '@/components/ClubShow/CardActivity.vue'
import CardBar from '@/components/ClubShow/CardBar.vue'

import { onMounted, ref, reactive } from 'vue'
import { controllers } from '@/stores';

const id = window.location.pathname.split('/').pop()

const clubActivities = ref([])
var club = reactive({})
var activities = reactive([])
var bars = reactive([])

onMounted(async () => {
    try {
        const response = await controllers().ClubController.GetById(id);
        const responseActivities = await controllers().ActivitiesController.GetActivitiesByClub(id);
        const responseBars = await controllers().BarsController.GetBarsByClub(id);

        activities = responseActivities.data.map(activity => {
            return {
                id: activity.id,
                nom: activity.nomActivite,
                description: activity.description,
                duree: activity.duree,
                ageMin: activity.ageMin,
                prix: activity.prix,
                imgSrc: "https://preview.redd.it/nhk8jg3psng71.jpg?auto=webp&s=0614423637af7440921c3932759d8a90a24981fb"
            };
        });

        bars = responseBars.data.map(bar => {
            return {
                id: bar.id,
                nom: bar.nom,
                description: bar.description,
                imgSrc: "https://preview.redd.it/nhk8jg3psng71.jpg?auto=webp&s=0614423637af7440921c3932759d8a90a24981fb"
            }
        })

        console.log(bars)

        clubActivities.value = response.data.clubActivities;
        club.nom = response.data.nom;
        club.description = response.data.description;
        club.latitude = response.data.latitude;
        club.longitude = response.data.longitude;
        club.email = response.data.email;

    } catch (error) {
        console.log(error);
    }
});
</script>