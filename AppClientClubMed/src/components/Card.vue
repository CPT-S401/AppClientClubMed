<script setup lang="ts">
</script>

<script>
export default {
    props: {
        imagePath: {
            type: String,
            required: true
        },
        pays: {
            type: String,
            required: true
        },
        nomResort: {
            type: String,
            required: true
        },
        descriptionResort: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }
}

</script>


<!-- <template>
    <div class="border-black w-min">
    <span class="badge border-none text-white text-[1.05rem] bg-primary-blue float-right">price €/pers.</span> 
    <div class="card-box w-[15vw] h-[20vh]">
        <img src="..\components\images\home\imgHome.jpg" alt="" class="object-cover w-full h-full">
        <div class="card-layer text-white">
            <a href="#">
                <h4 class="font-bold text-lg">Pays</h4>
                <h3 class=" font-bold text-2xl">Nom Resort</h3>
                <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Venam, labore...</p>
            </a>
        </div>
    </div>
    </div>
</template> -->

<template>
    <div class="border-black w-min">
        <span class="badge border-none text-white text-[1.05rem] bg-primary-blue float-right">{{ price }} €/pers.</span>
        <div class="card-box w-[15vw] h-[20vh]">
            <img :src="imagePath" alt="" class="object-cover w-full h-full">
            <div class="card-layer text-white">
                <a href="#">
                    <h4 class="font-bold text-lg">{{ pays }}</h4>
                    <h3 class=" font-bold text-2xl">{{ nomResort }}</h3>
                    <p class="">{{ descriptionResort }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
div>span.badge {
    transform: translate(30%, 50%);
    z-index: 2;
    position: relative;
}

div>span.badge:hover {
    transform: translate(50%, 50%);
    z-index: 3;
    position: relative;
}

.card-box {
    overflow: hidden;
    border-radius: 5px;
    z-index: 1;
    position: relative;
}

.card-layer {
    height: 100%;
    padding: 0% 2%;
    transform: translateY(-35%);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    transition: 0.5s ease;
}

.card-box img {
    transition: 0.5s ease;
}

.card-box:hover img {
    transform: scale(1.1);
}

.card-box:hover .card-layer {
    transform: translateY(-100%);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
</style>