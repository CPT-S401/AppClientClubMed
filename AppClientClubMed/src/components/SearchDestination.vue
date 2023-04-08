<script setup>
import { onMounted, ref } from 'vue'
import { controllers } from '@/stores'
import Card from '@/components/Card.vue'
import BlockSectionItem from '@/components/BlockSectionItem.vue'
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
    controllers().ClubController.GetAll()
        .then((response) => {
            response.data.forEach(club => {
                clubs.value.push({
                    id: club.id,
                    name: club.nomClub,
                    description: club.description,
                    lien: club.lienMultimedia,
                    nompays: club.nomPays
                });
            });
        })
        .catch((error) => {
            console.log(error)
        });
});
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
        </template>
    </BlockSectionItem>
    <div class="bg-white pb-3">
        <h1 class="text-2xl text-primary-blue font-bold">Tous les Club </h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4" style="justify-items: center;">
            <Card v-for="club in clubs" :idClub="club.id" :imagePath="club.lien" :pays="club.nompays" :nom-resort="club.name"
                :description-resort="club.description" :price="3710" />
        </div>
    </div>
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