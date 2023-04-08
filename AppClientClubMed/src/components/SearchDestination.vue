<script setup>
import { onMounted, ref } from 'vue'
import { controllers } from '@/stores'
import Card from '@/components/Card.vue'
import BlockSectionItem from '@/components/BlockSectionItem.vue'
<<<<<<< HEAD
<<<<<<< Updated upstream
import Card from './Card.vue';

=======
let clubs = ref([])
let pays = ref([])

onMounted(async () => {
    // controllers().PaysController.GetAll()
    //     .then((response) => {
    //         response.data.forEach(pays => {
    //             pays.value.push({
    //                 id: pays.id,
    //                 nom: pays.nom
    //             });
    //     });
    // });
=======
let clubs = ref([])
onMounted(async () => {
>>>>>>> merge-alain-clem
    controllers().ClubController.GetAll()
        .then((response) => {
            response.data.forEach(club => {
                clubs.value.push({
<<<<<<< HEAD
                    id: club.id,
                    name: club.nomClub,
                    description: club.description,
                    lien: club.lienMultimedia,
                    nompays: club.nomPays
=======
                    name: club.nom,
                    description: club.description,
                    lien: club.multimedia[0],
                    pays: club.pays
>>>>>>> merge-alain-clem
                });
            });
        })
        .catch((error) => {
            console.log(error)
        });
});
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> merge-alain-clem
</script>

<template>
    <BlockSectionItem>
        <template #title>Les pays :</template>
        <template #buttons>
            <div class="buttons categorie flex gap-2 text-primary-blue flex-wrap">
                <button v-for="Onepays in pays" v-bind="pays.nom" class="active">Pour les bouttons,</button>
            </div>
            <div class="buttons sousCategorie flex gap-2 text-primary-blue flex-wrap">
                <button>Pareil</button>
                <button>pour</button>
                <button class="active">les</button>
                <button>sous-categorie</button>
                <button>(pays)</button>
            </div>
        </template>
        <template #objectDisplay>
<<<<<<< HEAD
<<<<<<< Updated upstream
            <Card imagePath="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/109000/109366.jpg" pays="France" nom-resort="Rosière" description-resort="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Venam, labore..." :price="150"/>
            <Card imagePath="https://i.f1g.fr/media/madame/704x/sites/default/files/img/2017/06/10-destinations-pour-des-vacances-sur-une-ile-de-reve-photo-32.jpg" pays="France" nom-resort="Rosière" description-resort="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Venam, labore..." :price="150" />
            <Card imagePath="../components/images/home/imgHome.jpg" pays="France" nom-resort="Rosière" description-resort="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Venam, labore..." :price="150" />
        </template>
    </BlockSectionItem>
    <img src="" alt="">
=======
        </template>
    </BlockSectionItem>
    <div class="bg-white pb-3">
        <h1 class="text-2xl text-primary-blue font-bold">Tous les Club </h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4" style="justify-items: center;">
            <Card v-for="club in clubs" :idClub="club.id" :imagePath="club.lien" :pays="club.nompays" :nom-resort="club.name"
                :description-resort="club.description" :price="3710" />
        </div>
    </div>
>>>>>>> Stashed changes
=======
            <div v-for="club in clubs" :key="club.id">
                <Card v-for="club in clubs" :key="club.id" :pays="club.pays" :nomResort="club.name" :descriptionResort="club.description" :price="1500" :id="club.id" :imagePath="club.lien" />
            </div>
        </template>
    </BlockSectionItem>
>>>>>>> merge-alain-clem
</template>
 
<style>
.buttons button:not(.active) {
    box-sizing: border-box;
    padding: 5px 15px;
    border: 1px solid #00558A;
    border-radius: 1px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 10px 0px 0px 0px;
}

.buttons button:hover {
    border: 1px solid white;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.24) inset;
    background-color: #00558A;
    color: white;
}

.active {
    box-sizing: border-box;
    padding: 5px 15px;
    border: 1px solid white;
    border-radius: 1px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.24) inset;
    background-color: #00558A;
    color: white;
    margin: 10px 0px 0px 0px;
}
</style>