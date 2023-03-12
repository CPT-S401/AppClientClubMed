<template>
    <main>
        <div class="overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
            <div class="dark w-full">
                <div
                    class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

                    <!-- Header A FAIRE -->

                    <!-- ./Header -->
                    <SideBar/>

                    <div class="h-full ml-14 mt-14 mb-0 md:ml-64">
                        <router-view class="-mt-0.5 mx-4"/>

                        <!-- /Footer -->
                        <footer class="flex flex-col mt-4 bg-white p-6 dark:bg-primary-blue">
                            <div class="flex flex-col justify-between">
                                <div class="mb-0">
                                    <a href="#" class="-m-1.5 p-1.5">
                                        <span class="sr-only">Club Med</span>
                                        <logoClubMed class="h-8 w-auto text-white" />
                                    </a>
                                </div>
                                <div class="grid gap-6 grid-cols-3 justify-between w-full pl-[7vw]">
                                    <div>
                                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                            Ressources</h2>
                                        <ul class="text-gray-200 dark:text-gray-200">
                                            <li class="mb-4">
                                                <a href="#" class="hover:underline">FAQ</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                            SUIVEZ NOUS</h2>
                                        <ul class="text-gray-200 dark:text-gray-200">
                                            <li class="mb-4">
                                                <a href="https://www.facebook.com/ClubMedFrance"
                                                    class="hover:underline ">Facebook</a>
                                            </li>
                                            <li class="mb-4">
                                                <a href="https://www.instagram.com/clubmed/"
                                                    class="hover:underline">Instagram</a>
                                            </li>
                                            <li class="mb-4">
                                                <a href="https://twitter.com/ClubMedfr" class="hover:underline">Twitter</a>
                                            </li>
                                            <li class="mb-4">
                                                <a href="https://www.youtube.com/clubmed"
                                                    class="hover:underline">YouTube</a>
                                            </li>
                                            <li>
                                                <a href="https://fr.pinterest.com/clubmed/"
                                                    class="hover:underline">Pinterest</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div>
                                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                            Informations légales</h2>
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
                            <hr class="my-6 border-gray-200 mx-auto dark:border-gray-200" />
                            <div class="flex items-center justify-between">
                                <div class="flex mt-0 space-x-6 justify-center">
                                    <a href="https://www.facebook.com/ClubMedFrance"
                                        class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                        <iconFb class="w-5 h-5" />
                                        <span class="sr-only">Page Facebook</span>
                                    </a>
                                    <a href="https://www.instagram.com/clubmed/"
                                        class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                        <iconInsta class="w-5 h-5" />
                                        <span class="sr-only">Page Instagram</span>
                                    </a>
                                    <a href="https://twitter.com/ClubMedfr"
                                        class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                        <iconTwitter class="w-5 h-5" />
                                        <span class="sr-only">Page Twitter</span>
                                    </a>
                                    <a href="https://www.youtube.com/clubmed"
                                        class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                        <iconYoutube class="w-7 h-7" />
                                        <span class="sr-only">Page YouTube</span>
                                    </a>
                                    <a href="https://fr.pinterest.com/clubmed/"
                                        class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                        <iconPinterest class="w-6 h-6" />
                                        <span class="sr-only">Page Pinterest</span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                        <!-- ./Footer -->
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style>
/* Compiled dark classes from Tailwind */
.dark .dark\:divide-gray-700> :not([hidden])~ :not([hidden]) {
    border-color: rgba(55, 65, 81);
}

.dark .dark\:bg-gray-50 {
    background-color: rgba(249, 250, 251);
}

.dark .dark\:bg-gray-100 {
    background-color: rgba(243, 244, 246);
}

.dark .dark\:bg-gray-600 {
    background-color: rgba(75, 85, 99);
}

.dark .dark\:bg-gray-700 {
    background-color: rgba(55, 65, 81);
}

.dark .dark\:bg-gray-800 {
    background-color: rgba(31, 41, 55);
}

.dark .dark\:bg-gray-900 {
    background-color: rgba(17, 24, 39);
}

.dark .dark\:bg-red-700 {
    background-color: rgba(185, 28, 28);
}

.dark .dark\:bg-green-700 {
    background-color: rgba(4, 120, 87);
}

.dark .dark\:hover\:bg-gray-200:hover {
    background-color: rgba(229, 231, 235);
}

.dark .dark\:hover\:bg-gray-600:hover {
    background-color: rgba(75, 85, 99);
}

.dark .dark\:hover\:bg-gray-700:hover {
    background-color: rgba(55, 65, 81);
}

.dark .dark\:hover\:bg-gray-900:hover {
    background-color: rgba(17, 24, 39);
}

.dark .dark\:border-gray-100 {
    border-color: rgba(243, 244, 246);
}

.dark .dark\:border-gray-400 {
    border-color: rgba(156, 163, 175);
}

.dark .dark\:border-gray-500 {
    border-color: rgba(107, 114, 128);
}

.dark .dark\:border-gray-600 {
    border-color: rgba(75, 85, 99);
}

.dark .dark\:border-gray-700 {
    border-color: rgba(55, 65, 81);
}

.dark .dark\:border-gray-900 {
    border-color: rgba(17, 24, 39);
}

.dark .dark\:hover\:border-gray-800:hover {
    border-color: rgba(31, 41, 55);
}

.dark .dark\:text-white {
    color: rgba(255, 255, 255);
}

.dark .dark\:text-gray-50 {
    color: rgba(249, 250, 251);
}

.dark .dark\:text-gray-100 {
    color: rgba(243, 244, 246);
}

.dark .dark\:text-gray-200 {
    color: rgba(229, 231, 235);
}

.dark .dark\:text-gray-400 {
    color: rgba(156, 163, 175);
}

.dark .dark\:text-gray-500 {
    color: rgba(107, 114, 128);
}

.dark .dark\:text-gray-700 {
    color: rgba(55, 65, 81);
}

.dark .dark\:text-gray-800 {
    color: rgba(31, 41, 55);
}

.dark .dark\:text-red-100 {
    color: rgba(254, 226, 226);
}

.dark .dark\:text-green-100 {
    color: rgba(209, 250, 229);
}

.dark .dark\:text-blue-400 {
    color: rgba(96, 165, 250);
}

.dark .group:hover .dark\:group-hover\:text-gray-500 {
    color: rgba(107, 114, 128);
}

.dark .group:focus .dark\:group-focus\:text-gray-700 {
    color: rgba(55, 65, 81);
}

.dark .dark\:hover\:text-gray-100:hover {
    color: rgba(243, 244, 246);
}

.dark .dark\:hover\:text-blue-500:hover {
    color: rgba(59, 130, 246);
}

/* Custom style */
.header-right {
    width: calc(100% - 3.5rem);
}

.sidebar:hover {
    width: 16rem;
}

@media only screen and (min-width: 768px) {
    .header-right {
        width: calc(100% - 16rem);
    }
}
</style>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import iconPinterest from '@/components/icons/iconPinterest.vue';
import iconYoutube from '@/components/icons/iconYoutube.vue';
import iconTwitter from '@/components/icons/iconTwitter.vue';
import iconInsta from '@/components/icons/iconInsta.vue';
import iconFb from '@/components/icons/iconFb.vue';
import logoClubMed from '@/components/icons/logoClubMed.vue';
</script>