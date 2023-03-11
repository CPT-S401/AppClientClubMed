<template>
    <button @click="handleClick" :class="[
        'w-4 h-4 rounded-full',
        {
            'bg-blue-700': isActive,
            'bg-blue-900': !isActive,
            'group-hover:bg-white/50 dark:group-hover:bg-gray-800/60': !isActive,
            'group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70': !isActive,
        }
    ]" :aria-current="isActive ? 'true' : 'false'" :aria-label="'Slide ' + btnNumber"
        :data-carousel-slide-to="btnNumber"></button>
</template>

<script>
export default {
    props: {
        isActive: Boolean,
        btnNumber: Number,
    },
    methods: {
        handleClick(event) {
            this.$emit('slide-click', event, this.btnNumber)
        },
    },
};
</script>
