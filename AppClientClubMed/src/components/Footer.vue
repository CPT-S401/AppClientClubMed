<script setup lang="ts">
import LogoClubMed from './icons/logoClubMed.vue'

import iconPinterest from './icons/iconPinterest.vue';
import iconYoutube from './icons/iconYoutube.vue';
import iconTwitter from './icons/iconTwitter.vue';
import iconInsta from './icons/iconInsta.vue';
import iconFb from './icons/iconFb.vue';
</script>

<template>
    <footer class="p-4 bg-white sm:p-6 dark:bg-primary-blue">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Club Med</span>
                    <logoClubMed class="h-8 w-auto text-white" />
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:justify-between w-full pl-[7vw]">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ressources</h2>
                    <ul class="text-gray-200 dark:text-gray-200">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">SUIVEZ NOUS</h2>
                    <ul class="text-gray-200 dark:text-gray-200">
                        <li class="mb-4">
                            <a href="https://www.facebook.com/ClubMedFrance" class="hover:underline ">Facebook</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://www.instagram.com/clubmed/" class="hover:underline">Instagram</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://twitter.com/ClubMedfr" class="hover:underline">Twitter</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://www.youtube.com/clubmed" class="hover:underline">YouTube</a>
                        </li>
                        <li>
                            <a href="https://fr.pinterest.com/clubmed/" class="hover:underline">Pinterest</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Informations légales</h2>
                    <ul class="text-gray-200 dark:text-gray-200">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Politique de confidentialité</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Conditions d'utilisation</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Charte cookies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="https://www.facebook.com/ClubMedFrance" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                    <iconFb class="w-5 h-5" />
                    <span class="sr-only">Page Facebook</span>
                </a>
                <a href="https://www.instagram.com/clubmed/" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                    <iconInsta class="w-5 h-5" />
                    <span class="sr-only">Page Instagram</span>
                </a>
                <a href="https://twitter.com/ClubMedfr" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                    <iconTwitter class="w-5 h-5" />
                    <span class="sr-only">Page Twitter</span>
                </a>
                <a href="https://www.youtube.com/clubmed" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                    <iconYoutube class="w-7 h-7" />
                    <span class="sr-only">Page YouTube</span>
                </a>
                <a href="https://fr.pinterest.com/clubmed/" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                    <iconPinterest class="w-6 h-6" />
                    <span class="sr-only">Page Pinterest</span>
                </a>
            </div>
        </div>
    </footer>
</template>