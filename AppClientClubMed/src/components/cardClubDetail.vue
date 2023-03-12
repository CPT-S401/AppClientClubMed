<template>
    <div class="py-5 sm:py-4">
        <router-link to="/club/1" class="flex flex-wrap gap-x-4 rounded-lg border sm:p-1 lg:gap-6">
            <div class="flex items-center">
                <a href="#" class="group relative block rounded-lg bg-gray-100 md:w-40 md:h-full max-[765px]:h-48">
                    <img :src="imagePath" loading="lazy" :alt="'Photo de ' + title"
                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
            </div>
            <div class="flex flex-1 flex-col justify-between">
                <div class="flex flex-col space-y-2">
                    <a href="#"
                        class="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                        {{ title }}
                    </a>

                    <span class="block text-gray-500 max-lg:hidden overflow-auto text-ellipsis h-24 leading-6">{{ description }}</span>

                    <!-- rating - start -->
                    <div class="flex items-center gap-3">
                        <div class="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                            <span class="text-sm">4.5</span>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>
                    <span class="text-sm">{{ developer }}</span>
                    <span class="block text-gray-500">{{ releaseDate }}</span>
                </div>

                <div>
                    <div class="mb-4">
                        <div class="flex items-end gap-2">
                            <span class="block font-bold text-gray-800 md:text-lg line-through">15.00 €</span>
                            <span class="text-red-500 md:text-lg">9.99 €</span>
                        </div>

                    </div>

                    <span class="flex items-center gap-1 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        En stock
                    </span>
                </div>
            </div>

            <div class="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                <div class="flex flex-col items-start gap-2">
                    <div class="flex h-12 w-20 overflow-hidden rounded border">
                        <input type="number" value="1"
                            class="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" />

                        <div class="flex flex-col divide-y border-l">
                            <button
                                class="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
                            <button
                                class="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
                        </div>
                    </div>

                    <button
                        class="self-center select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Supprimer</button>
                </div>

                <div class="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                    <span class="block font-bold text-gray-800 md:text-lg">15.00 €</span>
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
    