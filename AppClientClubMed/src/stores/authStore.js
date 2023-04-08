import { useStorage, useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import axios from "axios";
import bcrypt from "bcryptjs"

import route from "@/router/index.ts";

const DEFAULT_ROUTE = "https://apiclubmeds401.azurewebsites.net/";

export const authStore = defineStore("authStore", () => {
	const user = useLocalStorage("user", {
		user: {},
		logged: false,
		error: null,
		token: null,
	});

	function saveTokenToSession() {
		sessionStorage.setItem("authToken", user.value.token);

	}

	function getCodePostalById(id) {
		return axios.get(DEFAULT_ROUTE + `api/codespostaux/getbyid/${id}`)
			.then(response => {
				return response.data.code;
			})
			.catch(error => {
				console.error(error);
				throw error;
			});
	}
	
	// Usage
	async function myFunction() {
		const code = await getCodePostalById(user.idCodePostal);
	}
	

	function getTokenFromSession() {
		return sessionStorage.getItem("authToken");
	}

	async function login(email, password) {
		try {
			const response = await axios.post(DEFAULT_ROUTE + "api/login", {
				email: email,
				password: password,
			});

			if (response.status === 401) {
				throw new Error("Le nom d'utilisateur ou le mot de passe ne sont pas bons");
			}

			if (response.status === 200) {
				user.value.user = response.data;
				user.value.logged = true;
				user.value.error = null;
				user.value.token = response.data.token;
				saveTokenToSession();

				route.push("/user/dashboard");
			} else {
				console.error("Erreur lors de la connexion", response.data);
			}
		} catch (error) {
			console.error("Erreur lors de la connexion", error);
		}
	}

	async function register(
		nom,
		prenom,
		genre,
		pays,
		email,
		password,
		confirmpassword,
		dateNaissance,
		mobile
	) {
		try {
			if (genre == "N/A") {
				throw new Error("Veuillez renseigner votre genre");
			}
			if (pays == "N/A") {
				throw new Error("Veuillez entrer votre pays de résidence");
			}

			const diffInMs = Date.now() - dateNaissance;
			const diffInYears = Math.floor(
				diffInMs / (1000 * 60 * 60 * 24 * 365)
			);

			if (diffInYears < 18) {
				throw new Error("Vous devez avoir plus de 18 ans pour créer un compte.");
			}

			if (password != confirmpassword) {
				throw new Error("Les deux mots de passe ne correspondent pas.");
			}

			const response = axios.post(DEFAULT_ROUTE + 'api/clients', {
				genreClient: genre,
				prenomClient: prenom,
				nomClient: nom,
				dateNaissance: dateNaissance,
				email: email,
				mobile: mobile,
				password: password,
				idCodePostal: 4750,
			});

			if (response.status === 500) {
				throw new Error("Internal Server Error")
			}

			if (response.status === 201) {
				user.value.user = response.data;
				user.value.logged = true;
				user.value.error = null;
				user.value.token = response.data.token;

				saveTokenToSession();

				route.push("/user/dashboard");
			}
		} catch (error) {
			console.error(
				"Erreur lors de la création du compte : ",
				error.message
			);
		}
	}

	function logout() {
		user.value.user = {};
		user.value.logged = false;
		user.value.error = "";
		user.value.token = "";
		saveTokenToSession();
		route.push("/");
	}

	return { user, login, register, logout, saveTokenToSession, getTokenFromSession, getCodePostalById };
});
