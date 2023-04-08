<template>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Club Med</span>
          <logoClubMed class="h-8 w-auto text-primary-blue" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Réserver
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>
        </Popover>

        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Nos offres</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Destinations</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">FAQ</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <router-link to="/user/dashboard"
        class="text-sm font-semibold leading-6 text-gray-900">
          <iconUser class="h-10 w-10 flex-none text-primary-blue" aria-hidden="true" />
        </router-link>
      </div>
    </nav>
</template>


<script setup lang="ts">
import logoClubMed from './icons/logoClubMed.vue'
import iconUser from './icons/iconUser.vue'
import { authStore } from "@/stores/authStore";
import { ref } from 'vue'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const auth = authStore();
const mobileMenuOpen = ref(false)
</script>