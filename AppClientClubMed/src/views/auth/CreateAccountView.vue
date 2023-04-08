<template>
	<div class="flex flex-col sm:flex-row justify-center items-center bg-gray-200">
		<div class="bg-white p-4 rounded-lg flex flex-col items-center sm:items-start sm:ml-4">
			<h2 class="text-lg font-bold mb-4 text-primary-blue">
				Créer un compte
			</h2>
			<form @submit.prevent="
				auth.register(
					nom,
					prenom,
					genre,
					pays,
					email,
					password,
					confirmpassword,
					dateNaissance,
					mobile
				)
			">
				<div class="flex flex-col mb-4">
					<label for="nom" class="mb-1 text-primary-blue">Nom</label>
					<input type="text" id="nom" name="nom" placeholder="Indiquez votre nom"
						class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="nom" required />
				</div>
				<div class="flex flex-col mb-4">
					<label for="prenom" class="mb-1 text-primary-blue">Prénom</label>
					<input type="text" id="prenom" name="prenom" placeholder="Indiquez votre prénom"
						class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="prenom" required />
				</div>
				<div class="flex flex-col mb-4 sm:flex-row">
					<div class="flex flex-col mb-4 sm:mr-4">
						<label for="genre" class="mb-1 text-primary-blue">Genre</label>
						<select id="genre" name="genre" class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1"
							v-model="genre" required>
							<option value="N/A">Indiquez votre civilité</option>
							<option value="Monsieur">Homme</option>
							<option value="Madame">Femme</option>
						</select>
					</div>
					<div class="flex flex-col mb-4">
						<label for="pays" class="mb-1 text-primary-blue">Pays</label>
						<select id="pays" name="pays" placeholder="Indiquez votre pays"
							class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="pays" required>
							<option value="N/A">
								Indiquez votre pays de résidence
							</option>
							<option value="france">France</option>
							<option value="luxembourg">Luxembourg</option>
							<option value="listenbourg">Listenbourg</option>
						</select>
					</div>
				</div>
				<div class="flex flex-col mb-4">
					<label for="datenaissance" class="mb-1 text-primary-blue">Date de naissance</label>
					<input type="date" id="datenaissance" name="datenaissance"
						placeholder="Indiquez votre date de naissance"
						class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="dateNaissance"
						required />
				</div>
				<div class="flex flex-col mb-4">
					<label for="mobile" class="mb-1 text-primary-blue">Téléphone mobile</label>
					<input id="mobile" name="mobile" placeholder="Indiquez votre numéro de téléphone"
						class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="mobile" required />
				</div>
				<div class="flex flex-col mb-4">
					<label for="email" class="mb-1 text-primary-blue">Email</label>
					<input type="email" id="email" name="email" placeholder="Indiquez votre email"
						class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="email" required />
				</div>
				<div class="flex flex-col mb-4">
					<label for="motdepasse" class="mb-1 text-primary-blue">Mot de passe</label>
					<input type="password" id="motdepasse" name="motdepasse" placeholder="Indiquez votre mot de passe"
						class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="password" required />
				</div>
				<div class="flex flex-col mb-4">
					<label for="confirmation" class="mb-1 text-primary-blue">Confirmation mot de passe</label>
					<input type="password" id="confirmation" name="confirmation" placeholder="Confirmer votre mot de passe"
						class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1" v-model="confirmpassword"
						required />
				</div>
				<router-link to="/login" type="submit"
					class="bg-white border-2 border-primary-blue text-primary-blue px-4 py-2 rounded-lg hover:bg-primary-blue hover:text-white">
					Créer un compte
				</router-link>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { authStore } from "@/stores/authStore";
const auth = authStore();

const nom = ref("");
const prenom = ref("");
const genre = ref("");
const pays = ref("");
const email = ref("");
const password = ref("");
const confirmpassword = ref("");
const dateNaissance = ref("");
const mobile = ref("");
</script>
