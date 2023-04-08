<template>
    <div class="flex flex-col sm:flex-row justify-center items-center h-screen bg-gray-200">
        <div class="bg-white p-4 rounded-lg flex flex-col items-center sm:items-start sm:ml-4">
            <h2 class="text-lg font-bold mb-4 text-primary-blue">Connexion</h2>
            <form @submit.prevent="auth.login(email, password)">
                <div class="flex flex-col mb-4">
                    <label for="email" class="mb-1 text-primary-blue">Email</label>
                    <input type="email" id="email" name="email" placeholder="Indiquez votre email" class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="email">
                </div>
                <div class="flex flex-col mb-4">
                    <label for="motdepasse" class="mb-1 text-primary-blue">Mot de passe</label>
                    <input type="password" id="password" name="password" placeholder="Indiquez votre mot de passe"
                        class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="password">
                </div>
                <div class="flex flex-col space-y-2">
                    <router-link to="/register" class="text-primary-blue">Pas encore inscrit ?</router-link>
                    <button type="submit" class="bg-white border-2 border-primary-blue text-primary-blue px-4 py-2 rounded-lg hover:bg-primary-blue hover:text-white">Se connecter</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
	import { ref } from "vue";
	import { authStore } from "@/stores/authStore";
	const auth = authStore();

	const email = ref('');
  	const password = ref('');
</script>