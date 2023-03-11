<template>
    <div :class="transitionTypeClasses" :data-carousel-slide-to="slideTo" :data-carousel-item="isActive">
        <img :src="imageUrl" :class="'absolute block w-full ' + displayFocus" alt="...">
    </div>
</template>
  
<script>
export default {
    props: {
        transitionTypeClasses: {
            type: String,
            default: 'duration-700 ease-in-out',
        },
        slideTo: {
            type: Number,
            default: "0",
        },
        isActive: {
            type: String,
            default: "",
        },
        imageUrl: {
            type: String,
            default: 'https://www.naturepaysage.photo/wp-content/uploads/Nature-Paysage-portfolio-17-novembre-2019-0017-3.jpg',
        },
        displayFocus: {
            type: String,
            default: '-translate-y-1/4',
        },
    },
};
</script>
  