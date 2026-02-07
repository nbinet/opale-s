<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="bg-[#F1E8DD] text-[#D29A33] flex flex-col items-center justify-evenly gap-4 p-4 -mx-4 -mb-4">
    <p class="text-center luxurious-script-regular sm:text-2xl md:text-4xl">“L’art de sublimer le corps sous toutes ses formes”</p>
    <img src="/public/logo.png" alt="Logo Opaleïs" class="h-14 md:h-24 -mb-4" />
    <div class="flex items-end justify-between w-full relative">
      <div class="flex flex-col gap-2">
        <p>06 73 65 98 76</p>
        <p>associationsiliven@gmail.com</p>
        <p class="text-[10px]">media: freepik, pixabay et association siliven</p>
      </div>
      <div class="flex flex-col items-center">
        <img src="/public/instagram.png" alt="Instagram" class="h-14  cursor-pointer hover:scale-105 transition-transform duration-300" @click="openLink('https://www.instagram.com/opaleis_events/')" />
        <p>opaleis_events</p>
      </div>
    </div>
  </div>
</template>