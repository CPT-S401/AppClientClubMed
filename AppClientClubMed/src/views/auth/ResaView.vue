<script setup lang="ts">
import cardClubDetail from '@/components/cardClubDetail.vue' 
</script>

<template>
    <div
        class="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
        <h4 class="text-lg font-semibold text-center">Vos Réservations</h4>
        <p class="mt-2 text-xs text-white dark:text-gray-400">
            Vous trouverez ici la liste de vos réservations.</p>

        <cardClubDetail
            imagePath="https://www.lechotouristique.com/wp-content/uploads/2021/12/club-med-la-rosiere1.png"
            title="Club Med La Rosière"
            description="A 1950 mètres d''altitude et exposé plein sud, le Resort Club Med habillé de pierres et de bois surplombe toute la vallée de la Tarentaise. Edifié sur les pistes, il domine une station authentique développée avec raison et passion par les habitants de Montvalezan. Le design intérieur de style savoyard nous conte la fabuleuse histoire du col mythique du Petit St-Bernard, de la traversée des Alpes d’Hannibal avec ses éléphants aux pèlerins de passage en haute-montagne, comme en témoigne la fresque de la réception."
            developer="Nintendo" releaseDate="March 3, 2017" />

        <!-- totals - start -->
        <div class="flex flex-col items-end gap-4">
            <div class="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                <div class="space-y-1">
                    <div class="flex justify-between gap-4 text-gray-500">
                        <span>Sous-total</span>
                        <span>15.00 €</span>
                    </div>

                    <div class="flex justify-between gap-4 text-gray-500">
                        <span>Frais de port</span>
                        <span>4.99 €</span>
                    </div>
                </div>

                <div class="mt-4 border-t pt-4">
                    <div class="flex items-start justify-between gap-4 text-gray-800">
                        <span class="text-lg font-bold">Total</span>

                        <span class="flex flex-col items-end">
                            <span class="text-lg font-bold">19.99 EUR</span>
                            <span class="text-sm text-gray-500">TVA inclus</span>
                        </span>
                    </div>
                </div>
            </div>

            <button
                class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Check
                out</button>
        </div>
        <!-- totals - end -->
    </div>
</template>