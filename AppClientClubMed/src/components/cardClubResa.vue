<template>
    <div class="py-5 sm:py-4">
        <!--
            ATTENTION le router-link si événement sur la card peut importe où,
            cela va le déclencher. Car l'event se propage.
            Je sais qu'on peut l'éviter mais là comme ça,
            je sais plus comment on fait (et comme pour l'isnstant
            j'en ai pas la nécessité, je le laisse comme ça)
        -->
        <router-link to="/club/1" class="flex flex-wrap gap-x-4 rounded-lg border sm:p-1 lg:gap-6">
            <div class="flex items-center">
                <a href="#" class="group relative block rounded-lg bg-gray-100 md:w-96 max-[765px]:h-48">
                    <img :src="imagePath" loading="lazy" :alt="'Photo de ' + title"
                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
            </div>
            <div class="flex flex-1 flex-col justify-around">
                <div class="flex flex-col space-y-2">
                    <div class="inline-flex w-full space-x-3">
                        <div
                            class="mb-1 inline-block text-center text-lg font-bold transition duration-100 hover:text-gray-500 lg:text-xl">
                            {{ title }}
                        </div>
                        <!-- note -->
                        <div class="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                            <span class="text-sm">4.5</span>

                            <!-- Etoile -->
                            <iconStar class="h-5 w-5" />
                        </div>
                    </div>

                    <span class="block textarea-info max-lg:hidden overflow-auto text-ellipsis h-24 leading-6">{{
                        description }}</span>

                    <span class="text-sm">{{ developer }}</span>
                    <span class="block text-gray-500">{{ releaseDate }}</span>
                </div>

                <div>
                    <div class="mb-4">
                        <div class="flex items-end gap-2">
                            <span class="block font-bold md:text-lg line-through">15.00 €</span>
                            <span class="text-red-500 md:text-lg">9.99 €</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-col">
                    <div
                        class="mb-1 inline-block text-center text-lg font-bold transition duration-100 hover:text-gray-500 lg:text-xl">
                        Participants
                    </div>
                    <!-- prochaine étape pour le tableau : le mettre dans un composant -->
                    <div class="">
                        <div class="overflow-x-auto border-x border-t">
                            <table class="table-auto w-full">
                                <thead class="border-b">
                                    <tr class="">
                                        <th class="text-center p-2 ">
                                            Nom
                                        </th>
                                        <th class="text-center p-2 ">
                                            Prénom
                                        </th>
                                        <th class="text-center p-2 ">
                                            Date de naissance
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b text-center hover:bg-gray-700">
                                        <td class="p-2 text-center text-sm">
                                            M. NOM1
                                        </td>
                                        <td class="p-2 text-center text-sm">
                                            Clément
                                        </td>
                                        <td class="p-2 text-center text-sm">
                                            00/00/0000
                                        </td>
                                    </tr>
                                    <tr class="border-b text-center text-sm">
                                        <td class="p-2">
                                            M. NOM2
                                        </td>
                                        <td class="p-2 text-center text-sm">
                                            Sam
                                        </td>
                                        <td class="p-2 text-center text-sm">
                                            00/00/0000
                                        </td>
                                    </tr>
                                    <tr class="border-b text-center text-sm">
                                        <td class="p-2">
                                            M. NOM3
                                        </td>
                                        <td class="p-2 text-center text-sm">
                                            Julien
                                        </td>
                                        <td class="p-2 text-center text-sm">
                                            00/00/0000
                                        </td>
                                    </tr>
                                    <tr class="border-b text-center text-sm">
                                        <td class="p-2 text-sm">
                                            M. NOM4
                                        </td>
                                        <td class="p-2 text-sm">
                                            Néo
                                        </td>
                                        <td class="p-2 text-sm">
                                            00/00/0000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="flex w-full space-x-7 border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                    <div>
                        <div class="flex justify-between gap-4 text-gray-300">
                            <span>Chambres :</span>
                            <span>70.00 €</span>
                        </div>
                        <div class="flex justify-between gap-4 text-gray-300">
                            <span>Activitées :</span>
                            <span>120.00 €</span>
                        </div>
                        <div class="flex justify-between gap-4 text-gray-300">
                            <span>Activités non inclus :</span>
                            <span>120.00 €</span>
                        </div>
                    </div>
                    <div class="">
                        <span class="block md:text-lg">Total</span>
                        <span class="block font-bold md:text-lg">310.00 €</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
    
<script>
export default {
    props: {
        imagePath: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        developer: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: String,
            required: true,
        },
    },
};
</script>

<script setup>
import iconStar from '@/components/icons/iconStar.vue'
</script>
    