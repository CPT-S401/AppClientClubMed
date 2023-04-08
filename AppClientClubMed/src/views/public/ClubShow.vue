<template>
    <Carousel/>
</template>

<script>
export default{
    name: 'ClubShow',
    mounted(){
        console.log('ClubShow mounted id : ' + this.$route.params.id);
    },
}
</script>

<script setup>
import Carousel from '@/components/Carousel/Carousel.vue'
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
</script>