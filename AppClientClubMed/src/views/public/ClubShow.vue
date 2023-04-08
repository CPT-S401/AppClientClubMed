<template>
    <div class="bg-white">
        <div class="container mx-auto">
            <div class="py-8">
                <div class="max-w-5xl mx-auto h-full">
                    <Carousel :images="images" />
                </div>
            </div>
        </div>
        <div class="bg-white flex justify-center">
            <div class="bg-primary-blue max-w-4xl w-full h-full mt-8 mb-8 p-8 rounded-lg shadow-2xl">
                <h1 class="text-3xl text-white font-bold mb-4">{{ club.nom }}</h1>
                <hr>
                <br>
                <p class="text-gray-100 mb-4">{{ club.description }}</p>
                <hr>
                <br>
                <p class="text-gray-100 mb-4"><span class="font-bold">Email:</span> {{ club.email }}</p>
            </div>
        </div>
        <div v-if="domaineskiable != null">
            <div class="bg-white flex justify-center">
                <div class="bg-primary-blue max-w-4xl w-full h-full mt-8 mb-8 p-8 rounded-lg shadow-2xl">
                    <h1 class="text-3xl text-white font-bold mb-4">{{ domaineskiable.nomStation }}</h1>
                    <hr>
                    <br>
                    <p class="text-gray-100 mb-4">{{ domaineskiable.description }}</p>
                    <hr>
                    <br>
                    <div class="flex justify-between mb-4">
                        <p class="text-gray-100"><span class="font-bold">Altitude basse :</span> {{
                            domaineskiable.altitudeBasse }} m</p>
                        <p class="text-gray-100"><span class="font-bold">Altitude haute :</span> {{
                            domaineskiable.altitudeHaute }} m</p>
                    </div>
                    <p class="text-gray-100 mb-4"><span class="font-bold">Longueur des pistes :</span> {{
                        domaineskiable.longeurPistes }} km</p>
                    <p class="text-gray-100 mb-4"><span class="font-bold">Nombre de pistes :</span> {{
                        domaineskiable.nbPistes }}</p>
                    <p class="text-gray-100 mb-4"><span class="font-bold">Info ski :</span> {{
                        domaineskiable.infoSki }}</p>
                </div>
            </div>
        </div>
        <div v-if="restaurants.length > 0" class="m-6 p-6 rounded-lg border-2 border-primary-blue">
            <h1 class="text-3xl text-primary-blue font-bold mb-4 ml-4">Les restaurants :</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="restaurant in restaurants" :key="restaurant.id" class="h-full">
                    <CardResto :title="restaurant.nom" :description="restaurant.description" :imgSrc="restaurant.imgSrc"
                        class="flex flex-col h-full" />
                </div>
            </div>
        </div>
        <div v-if="bars.length > 0" class="m-6 p-6 rounded-lg border-2 border-primary-blue">
            <h1 class="text-3xl text-primary-blue font-bold mb-4 ml-4">Les bars :</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="bar in bars" :key="bar.id" class="h-full">
                    <CardBar :title="bar.nom" :description="bar.description" :imgSrc="bar.imgSrc"
                        class="flex flex-col h-full" />
                </div>
            </div>
        </div>
        <div v-if="activities.length > 0" class="m-6 p-6 rounded-lg border-2 border-primary-blue">
            <h1 class="text-3xl text-primary-blue font-bold mb-4 ml-4">Les activités :</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="activity in activities" :key="activity.id" class="h-full">
                    <CardActivity :title="activity.nom" :description="activity.description" :price="activity.prix"
                        class="flex flex-col h-full" />
                </div>
            </div>
        </div>
        <div class="m-6 p-6 rounded-lg border-2 border-primary-blue">
            <h1 class="text-3xl text-primary-blue font-bold mb-4 ml-4">La Carte :</h1>

            <Map :latitude="club.latitude" :longitude="club.longitude"></Map>
        </div>
    </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel/Carousel.vue'
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> merge-alain-clem
import CardActivity from '@/components/ClubShow/CardActivity.vue'
import CardBar from '@/components/ClubShow/CardBar.vue'
import CardResto from '@/components/ClubShow/CarResto.vue'
import Map from '@/components/ClubShow/Map.vue'

import { onMounted, ref, reactive } from 'vue'
import { controllers } from '@/stores';

const id = window.location.pathname.split('/').pop()

const clubActivities = ref([])
var club = reactive({})
var domaineskiable = reactive({})
var activities = reactive([])
var bars = reactive([])
var restaurants = reactive([])
var images = reactive([])

onMounted(async () => {
    try {
        const response = await controllers().ClubController.GetById(id);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
        console.log(response)
>>>>>>> merge-alain-clem
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        const responseActivities = await controllers().ActivitesController.GetByClub(id);
        const responseBars = await controllers().BarsController.GetByClub(id);
        const responseRestaurants = await controllers().RestaurantsController.GetByClub(id);

        activities = responseActivities.data.map(activity => {
            return {
                id: activity.id,
                nom: activity.nomActivite,
                description: activity.description,
                duree: activity.duree,
                ageMin: activity.ageMin,
                prix: activity.prix
            };
        });

        restaurants = responseRestaurants.data.map(restaurant => {
            return {
                id: restaurant.id,
                nom: restaurant.nom,
                description: restaurant.description,
                imgSrc: restaurant.multimedia[0].lien
            }
        })

        bars = responseBars.data.map(bar => {
            return {
                id: bar.id,
                nom: bar.nom,
                description: bar.description,
                imgSrc: bar.multimedia[0].lien
            }
        })

        club.nom = response.data[0].nomClub;
        club.description = response.data[0].descriptionClub;
        club.latitude = response.data[0].latitude;
        club.longitude = response.data[0].longitude;
        club.email = response.data[0].email;

        images = response.data[0].multimedia.map(image => {
            return {
                img: image.lien
            }
        })

        domaineskiable.nomStation = response.data[0].domaineSkiable.nom;
        domaineskiable.description = response.data[0].domaineSkiable.description;
        domaineskiable.altitudeBasse = response.data[0].domaineSkiable.altitudeBasse;
        domaineskiable.altitudeHaute = response.data[0].domaineSkiable.altitudeHaute;
        domaineskiable.longeurPistes = response.data[0].domaineSkiable.longeurPistes;
        domaineskiable.nbPistes = response.data[0].domaineSkiable.nbPistes;
        domaineskiable.infoSki = response.data[0].domaineSkiable.infoSki;

    } catch (error) {
        console.log(error);
    }
});
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> merge-alain-clem
</script>