<script setup lang="ts">
import { ref } from 'vue'
import nails from '@/assets/images/partners/nails_addict_caen.png'
import mains from '@/assets/images/partners/lesmainsetoilees.png'
import cocongle from '@/assets/images/partners/cocongle__.jpg'
import carrecourt from '@/assets/images/partners/carrecourt_.png'
import lucie from '@/assets/images/partners/lucie_ausina.png'
import nailstudio from '@/assets/images/partners/nailstudiobysab.png'
import sabrina from '@/assets/images/partners/sabrina.beautystudio.caen.png'
import sheena from '@/assets/images/partners/sheenajmanucure.png'
import haspa from '@/assets/images/partners/haspa_ttt.png'
import pegasus from '@/assets/images/partners/pegasus_ink14.png'
import karmeo from '@/assets/images/partners/_karmeo.tatt.png'
import inkmagination from '@/assets/images/partners/inkmaginationtattoo.png'
import kuuro from '@/assets/images/partners/kuuro.tattoo.png'
import ossuary from '@/assets/images/partners/ossuary.tattoo.png'
import palette from '@/assets/images/partners/palette.jpg'
import pizza from '@/assets/images/partners/da_beppe.jpg'
import funky from '@/assets/images/partners/funky.jpg'

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5)
}

const artistes = ref(shuffleArray([
    { image: nails, insta: 'nails_addict_caen_', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/nails_addict_caen_/' },
    { image: mains, insta: 'lesmainsetoilees', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/lesmainsetoilees/' },
    { image: cocongle, insta: 'cocongle__', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/cocongle__/' },
    { image: carrecourt, insta: 'carrecourt_', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/carrecourt_/' },
    { image: lucie, insta: 'lucie_ausina', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/lucie_ausina/' },
    { image: nailstudio, insta: 'nailstudiobysab', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/nailstudiobysab/' },
    { image: sabrina, insta: 'sabrina.beautystudio.caen', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/sabrina.beautystudio.caen/' },
    { image: sheena, insta: 'sheenajmanucure', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/sheenajmanucure/' },
    { image: haspa, insta: 'haspa_ttt', category: 'Tattoo artist', link: 'https://www.instagram.com/haspa_ttt/' },
    { image: pegasus, insta: 'pegasus_ink14', category: 'Tattoo artist', link: 'https://www.instagram.com/pegasus_ink14/' },
    { image: karmeo, insta: '_karmeo.tatt', category: 'Tattoo artist', link: 'https://www.instagram.com/_karmeo.tatt/' },
    { image: inkmagination, insta: 'inkmaginationtattoo', category: 'Tattoo artist', link: 'https://www.instagram.com/inkmaginationtattoo/' },
    { image: kuuro, insta: 'kuuro.tattoo', category: 'Tattoo artist', link: 'https://www.instagram.com/kuuro.tattoo/' },
    { image: ossuary, insta: 'ossuary.tattoo', category: 'Tattoo artist', link: 'https://www.instagram.com/ossuary.tattoo/' },
    { image: palette, insta: 'palette_sucree_patisserie', category: 'Pâtisseries', link: 'https://www.instagram.com/palette_sucree_patisserie/' },
    { image: pizza, insta: 'da_beppe_pizza', category: 'Pizzas', link: 'https://www.instagram.com/da_beppe_pizza/' },
    { image: funky, insta: 'funky_doughny', category: 'Donuts', link: 'https://www.instagram.com/funky_doughny/' },
]))

const openLink = (url: string) => {
    window.open(url, '_blank')
}
</script>

<template>
  <div class="overflow-hidden w-full py-4">
    <div class="flex animate-scroll gap-6 w-max">
      <div
        v-for="(artiste, i) in [...artistes, ...artistes]"
        :key="i"
        class="flex flex-col gap-2 items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        @click="openLink(artiste.link)"
      >
        <img :src="artiste.image" class="size-40 rounded-full border-2 sm:size-62" />
        <p class="text-center text-xl">{{ artiste.insta }}</p>
        <p class="text-center">{{ artiste.category }}</p>
      </div>
    </div>
  </div>
</template>