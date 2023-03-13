<template>
  <div class="flex bg-white rounded-full p-2 shadow-xl gap-2">
    <slot name="input"></slot>
    <button class="btn border-none rounded-full bg-primary-blue text-white">
      <slot name="button"></slot>
    </button>
  </div>
</template>