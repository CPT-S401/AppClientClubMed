<template>
    <div class="flex items-center justify-center p-12 bg-white">
        <!-- Author: FormBold Team -->
        <!-- Learn More: https://formbold.com -->
        <div class="mx-auto w-full max-w-[550px] pt-[3rem]">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <label for="date" class="mb-3 block text-base font-medium text-primary-textOnLight">
                                Date de d'arrivée
                            </label>
                            <input type="date" name="date-arrivee" id="date-arrivee"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-primary-textOnLight outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2 pl-[1rem]">
                        <div class="mb-5">
                            <label for="date" class="mb-3 block text-base font-medium text-primary-textOnLight">
                                Date de départ
                            </label>
                            <input type="date" name="date-depart" id="date-depart"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-primary-textOnLight outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>

                <div class="-mx-3 flex flex-wrap pt-[3rem]">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <label for="date" class="mb-3 block text-base font-medium text-primary-textOnLight">
                                Nombre d'adultes
                            </label>
                            <input type="number" step="1" name="adultes" id="adultes" min="1" max="6"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-primary-textOnLight outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2 pl-[1rem]">
                        <div class="mb-5">
                            <label for="date" class="mb-3 block text-base font-medium text-primary-textOnLight">
                                Nombre d'enfants
                            </label>
                            <input type="number" step="1" name="enfants" id="enfants" min="0" max="6"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-primary-textOnLight outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>

                <label class="relative inline-flex items-center cursor-pointer border-primary-textOnLight">
                    <input type="checkbox" value="" class="sr-only peer border-primary-textOnLight">
                    <div
                        class="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 rounded-full peer bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary-primary">
                    </div>
                    <span class="ml-3 text-sm font-medium text-primary-textOnLight">Réserver un transport ?</span>
                </label>

                <div class="pt-[2rem]">
                    <button
                        class="hover:shadow-form rounded-md bg-primary-primary py-3 px-8 text-center text-base font-semibold text-primary-textOnDark outline-none">
                        Sélectionner mes dates
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>