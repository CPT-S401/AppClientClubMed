<script setup>
import { ref } from "vue";
import FileInput from "@/components/fileInput.vue";
import BtnItem from "@/components/BtnItem.vue";
import { authStore } from "@/stores/authStore";
const auth = authStore();
const user = auth.user.user.userDetails;

console.log(user);

const date = new Date(user.dateNaissance);
</script>

<template>
    <h1 class="font-bold text-2xl text-center p-3">
        {{  user.genreClient  }} {{ user.prenomClient }} {{ user.nomClient }}
    </h1>
    <FileInput Urlimg='https://www.workday.com/content/dam/web/zz/images/customer-story/customer-clubmed-16x9.jpg'
        styleImg="w-full h-full" class="w-[99%] mx-auto object-cover h-[50vh]" :editFile="edit" />
    <div class="mx-[10%] flex items-center translate-y-[-7.5vh]">
        <div class="w-min">
            <div class="w-[15vh] h-[15vh] bg-text rounded-xl">
                <FileInput Urlimg="https://www.1min30.com/wp-content/uploads/2018/08/logo-Club-Med-1.jpg"
                    styleImg="w-full h-full rounded-xl" class="w-full h-full rounded-xl" :editFile="edit" />
            </div>
        </div>
        <BtnItem text1="Editer" text2="Enregistrer" class="mr-0 ml-auto mt-10" @button-click="editMode()"></BtnItem>
    </div>
    <div class="mb-10">
        <div class="justify-around w-full flex">
            <h2 class="font-bold text-2xl text-center p-3">
                Email
            </h2>
            <p class=" text-xl text-center p-3">
                {{ user.email }}
            </p>
        </div>
        <div class="justify-around w-full flex">
            <h2 class="font-bold text-2xl text-center p-3">
                Adresse
            </h2>
            <p class=" text-xl text-center p-3">
                {{ user.numeroRue ?? 9 }}, {{ user.nomRue ?? "rue de l'Arc-en-ciel"}} 74000 Annecy-Le-Vieux
            </p>
        </div>
        <div class="justify-around w-full flex">
            <h2 class="font-bold text-2xl text-center p-3">
                Date de naissance
            </h2>
            <p class=" text-xl text-center p-3">
                {{ date.getDate() }}/{{ date.getMonth() + 1 }}/{{ date.getFullYear() }}
            </p>
        </div>
        <div class="justify-around w-full flex">
            <h2 class="font-bold text-2xl text-center p-3">
                Téléphone
            </h2>
            <p class=" text-xl text-center p-3">
                {{ user.mobile }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            edit: false,
        };
    },
    methods: {
        editMode() {
            this.edit = !this.edit;
        },
    },
    props: ["name", "imgProfile"],
};
</script>
