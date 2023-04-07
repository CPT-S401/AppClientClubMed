<script setup>
import { onMounted, ref } from 'vue'
import { controllers } from '@/stores'
import Card from '@/components/Card.vue'
import BlockSectionItem from '@/components/BlockSectionItem.vue'
let clubs = ref([])
onMounted(async () => {
    controllers().ClubController.GetAll()
        .then((response) => {
            response.data.forEach(club => {
                clubs.value.push({
                    name: club.nom,
                    description: club.description,
                    lien: club.multimedia[0],
                    pays: club.pays
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
                <button class="active">Pour les bouttons,</button>
                <button>il faudra</button>
                <button>faire</button>
                <button>un v-for</button>
                <button>un v-for</button>
                <button>un v-for</button>
                <button>un v-for</button>
                <button>un v-for</button>
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
            <div v-for="club in clubs" :key="club.id">
                <Card v-for="club in clubs" :key="club.id" :pays="club.pays" :nomResort="club.name" :descriptionResort="club.description" :price="1500" :id="club.id" :imagePath="club.lien" />
            </div>
        </template>
    </BlockSectionItem>
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