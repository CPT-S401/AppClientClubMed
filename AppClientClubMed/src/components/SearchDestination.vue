<script setup lang="ts">
import BlockSectionItem from '@/components/BlockSectionItem.vue'
import Card from './Card.vue';

</script>

<template>
    <BlockSectionItem>
        <template #title>Les plus belles destinations</template>
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
                <button >Pareil</button>
                <button>pour</button>
                <button class="active">les</button>
                <button>sous-categorie</button>
                <button>(pays)</button>
            </div>
        </template>
        <template #objectDisplay>
            <Card imagePath="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/109000/109366.jpg" pays="France" nom-resort="Rosière" description-resort="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Venam, labore..." :price="150"/>
            <Card imagePath="https://i.f1g.fr/media/madame/704x/sites/default/files/img/2017/06/10-destinations-pour-des-vacances-sur-une-ile-de-reve-photo-32.jpg" pays="France" nom-resort="Rosière" description-resort="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Venam, labore..." :price="150" />
            <Card imagePath="../components/images/home/imgHome.jpg" pays="France" nom-resort="Rosière" description-resort="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Venam, labore..." :price="150" />
        </template>
    </BlockSectionItem>
    <img src="" alt="">
</template>

<style>
.buttons button:not(.active){
    box-sizing: border-box;
    padding: 5px 15px;
    border: 1px solid #00558A;
    border-radius: 1px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin:10px 0px 0px 0px;
}

.buttons button:hover{
    border: 1px solid white;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.24) inset;
    background-color: #00558A;
    color: white;
}

.active{
    box-sizing: border-box;
    padding: 5px 15px;
    border: 1px solid white;
    border-radius: 1px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.24) inset;
    background-color: #00558A;
    color: white;
    margin:10px 0px 0px 0px;
}
</style>