<template>
    <div id="indicators-carousel" class="relative bg-white" data-carousel="static">
        <!-- Slider -->
        <div class="relative w-full overflow-hidden rounded-lg md:h-96">
            <SlideItem v-for="(slide, index) in slides" :key="index" :transitionTypeClasses="slide.transitionTypeClasses"
                :slide-to="index" :displayFocus="slide.displayFocus" :isActive="index === 0 ? 'active' : ''"
                :image-url="slide.imageUrl" />
        </div>
        <!-- Boutons indicateurs -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <SliderIndicator v-for="(btn, index) in slides" :key="index" :isActive="index === 0 ? true : false"
                :btnNumber="index" @slide-click="slideNext" />
        </div>
        <!-- Slider controls -->
        <button @click="slidePrevOne" type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-focus:ring-white bg-blue-700 group-hover:bg-blue-800 group-focus:ring-4 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span class="sr-only">Précédant</span>
            </span>
        </button>
        <button @click="slideNextOne" type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-700 group-hover:bg-blue-800 group-focus:ring-white group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span class="sr-only">Suivant</span>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Ajouts des slides
            slides: [
                {
                    transitionTypeClasses: 'duration-700 ease-in-out',
                    displayFocus: '-translate-y-1/4',
                    imageUrl: 'https://www.naturepaysage.photo/wp-content/uploads/Nature-Paysage-portfolio-17-novembre-2019-0017-3.jpg'
                },
                {
                    transitionTypeClasses: 'duration-700 ease-in-out hidden',
                    displayFocus: '-translate-y-1/3',
                    imageUrl: 'https://ericheymans.b-cdn.net/wp-content/uploads/2012/08/dawn-field-grass-164025.jpg'
                },
                {
                    transitionTypeClasses: 'duration-700 ease-in-out hidden',
                    displayFocus: '-translate-y-[calc(100%_/_10)]',
                    imageUrl: 'https://www.amplitudes.com/blog/wp-content/uploads/2017/04/PANO.jpg'
                },
                {
                    transitionTypeClasses: 'duration-700 ease-in-out hidden',
                    displayFocus: '-translate-y-1/4',
                    imageUrl: 'https://www.detoursenfrance.fr/sites/art-de-vivre/files/Import/det_BRAle3872.jpg'
                },
                {
                    transitionTypeClasses: 'duration-700 ease-in-out hidden',
                    displayFocus: '-translate-y-1/4',
                    imageUrl: 'https://www.missnumerique.com/blog/wp-content/uploads/10-conseils-de-cadrage-paysage-horizon-2.jpg'
                }
            ]
        };
    },
};
</script >

<script setup>
import SlideItem from './SlideItem.vue'
import SliderIndicator from './SliderIndicator.vue'

// SI changer couleuer il faut aussi le changer dans le composant ButtonIndicator
const ACTIVE_CLASS = 'bg-blue-700'
const INACTIVE_CLASS = 'bg-blue-900'
const ACTIVE_ITEM_ATTR = 'data-carousel-item'
const ACTIVE_ATTR = 'aria-current'
const HIDDEN_CLASS = 'hidden'
const NBR_SLIDES = 5
let activeSlideControlIndex = 0

function slidePrevOne() {
    if (!activeSlideControlIndex == 0) {
        activeSlideControlIndex--

        const nextItem = document.querySelector(`div [data-carousel-slide-to="${activeSlideControlIndex}"]`)
        const activeItemBefore = document.querySelector(`[${ACTIVE_ITEM_ATTR}="active"]`)

        transitionSlide(false, nextItem, activeItemBefore)

        const activeBtnBefore = document.querySelector(`[${ACTIVE_ATTR}="true"]`)

        updateButtonState(activeBtnBefore, activeBtnBefore.previousElementSibling)

        updateSlidesState(activeItemBefore, nextItem)
    }
}

function slideNextOne() {
    if (activeSlideControlIndex < 4) {
        activeSlideControlIndex++

        const nextItem = document.querySelector(`div [data-carousel-slide-to="${activeSlideControlIndex}"]`)
        const activeItemBefore = document.querySelector(`[${ACTIVE_ITEM_ATTR}="active"]`)

        transitionSlide(true, nextItem, activeItemBefore)

        const activeBtnBefore = document.querySelector(`[${ACTIVE_ATTR}="true"]`)

        updateButtonState(activeBtnBefore, activeBtnBefore.nextElementSibling)

        updateSlidesState(activeItemBefore, nextItem)
    }
}

function slideNext(event, btnNumber) {
    // Récupération des éléments actifs avant le clic sur le bouton next
    const activeBtnBefore = document.querySelector(`[${ACTIVE_ATTR}="true"]`)
    const activeItemBefore = document.querySelector(`[${ACTIVE_ITEM_ATTR}="active"]`)

    // Récupération du bouton cliqué
    const btnClicked = event.target

    // Récupération la position des slides actives
    // avant et après le clic sur le bouton next
    const activeSlidePosBefore = activeBtnBefore.getAttribute('data-carousel-slide-to')
    const activeSlidePos = btnNumber

    // Définition de la direction du défilement
    const isRight = activeSlidePosBefore < activeSlidePos

    // Récupération de la slide suivant
    const nextItem = document.querySelector(`div [data-carousel-slide-to="${activeSlidePos}"]`)

    transitionSlide(isRight, nextItem, activeItemBefore);

    updateButtonState(activeBtnBefore, btnClicked)

    updateSlidesState(activeItemBefore, nextItem, btnNumber)
    activeSlideControlIndex = btnNumber
}

function transitionSlide(isRight, nextItem, activeItemBefore) {
    // Transition vers la droite ou la gauche selon la direction du défilement
    if (isRight) {
        nextItem.classList.add("translate-x-full");
        setTimeout(() => {
            nextItem.classList.remove("translate-x-full");
        }, 300);
    } else {
        activeItemBefore.classList.add("translate-x-full");
        setTimeout(() => {
            activeItemBefore.classList.remove("translate-x-full");
        }, 1000);
    }
    setTimeout(() => {
        activeItemBefore.classList.add(HIDDEN_CLASS);
    }, 1000);
    nextItem.classList.remove(HIDDEN_CLASS);
}

function updateButtonState(currentBtn, nextBtn) {
    // Mise à jour des états des boutons avec les classes et attributs
    currentBtn.setAttribute(ACTIVE_ATTR, 'false')
    currentBtn.classList.replace(ACTIVE_CLASS, INACTIVE_CLASS)

    nextBtn.setAttribute(ACTIVE_ATTR, 'true')
    nextBtn.classList.replace(INACTIVE_CLASS, ACTIVE_CLASS)
}


function updateSlidesState(activeItemBefore, nextItem, btnNumber) {
    // Mise à jour des états des slides avec les classes et attributs
    activeItemBefore.removeAttribute(ACTIVE_ITEM_ATTR)
    nextItem.setAttribute(ACTIVE_ITEM_ATTR, 'active')
}

</script>