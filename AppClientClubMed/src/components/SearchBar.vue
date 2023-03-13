<script setup lang="ts">
import SearchBarItem from './SearchBarItem.vue';
</script>

<template>
  <SearchBarItem>
    <template #input>
      <input type="text" placeholder="Ex: Grand Massif Samoëns Morillon, La Rosière, Columbus Isle..."
        class="input input-bordered bg-white rounded-full w-full shadow-inner" />
    </template>
    <template #button>Rechercher</template>
  </SearchBarItem>
</template>

