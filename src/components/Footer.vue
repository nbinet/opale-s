<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import insta from '@/assets/images/insta.png'

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="bg-[#F1E8DD] text-[#967050] text-sm md:text-lg h-44 flex flex-row items-center justify-between relative -mx-4 -mb-4 px-4">
    <div class="flex flex-col gap-8">
      <p>associationsiliven@gmail.com</p>
      <p>06 73 65 98 76</p>
    </div>
    <img :src="logo" alt="Logo Opaleïs" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 md:h-24 pointer-events-none z-10" />
    <div class="flex flex-col items-center gap-2">
      <img :src="insta" alt="Instagram" class="h-14 cursor-pointer hover:scale-105 transition-transform duration-300" @click="openLink('https://www.instagram.com/opaleis_events/')" />
      <p>opaleis_events</p>
    </div>
    <p class="text-[10px] absolute bottom-2 left-2">media: freepik, pixabay et association siliven</p>
  </div>
</template>