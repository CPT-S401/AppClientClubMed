<template>
    <button class="bg-black text-white max-w-min p-1 px-3 rounded-full hover:bg-secondary-bg flex gap-2" @click="toggleText">
      {{ buttonText }}
    </button>
  </template>
  <script>
  export default {
    props: {
      text1: String,
      text2: String
    },
    data() {
      return {
        showText1: true
      }
    },
    computed: {
      buttonText() {
        return this.showText1 ? this.text1 : this.text2
      }
    },
    methods: {
      toggleText() {
        this.showText1 = !this.showText1
        this.$emit('button-click', this.showText1 ? this.text1 : this.text2)
      }
    }
  }
  </script>
