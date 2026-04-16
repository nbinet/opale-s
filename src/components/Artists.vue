<script setup lang="ts">
import { ref } from 'vue'
import nails from '@/assets/images/partners/nails_addict_caen.png'
import mains from '@/assets/images/partners/lesmainsetoilees.png'
import cocongle from '@/assets/images/partners/cocongle__.jpg'
import haspa from '@/assets/images/partners/haspa_ttt.png'
import pegasus from '@/assets/images/partners/pegasus_ink14.png'
import karmeo from '@/assets/images/partners/_karmeo.tatt.png'
import inkmagination from '@/assets/images/partners/inkmaginationtattoo.png'
import kuuro from '@/assets/images/partners/kuuro.tattoo.png'
import ossuary from '@/assets/images/partners/ossuary.tattoo.png'

const artistes = ref([
    { image: nails, insta: 'nails_addict_caen_', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/nails_addict_caen_/' },
    { image: mains, insta: 'lesmainsetoilees', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/lesmainsetoilees/' },
    { image: cocongle, insta: 'cocongle__', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/cocongle__/' },
    { image: haspa, insta: 'haspa_ttt', category: 'Tattoo artist', link: 'https://www.instagram.com/haspa_ttt/' },
    { image: pegasus, insta: 'pegasus_ink14', category: 'Tattoo artist', link: 'https://www.instagram.com/pegasus_ink14/' },
    { image: karmeo, insta: '_karmeo.tatt', category: 'Tattoo artist', link: 'https://www.instagram.com/_karmeo.tatt/' },
    { image: inkmagination, insta: 'inkmaginationtattoo', category: 'Tattoo artist', link: 'https://www.instagram.com/inkmaginationtattoo/' },
    { image: kuuro, insta: 'kuuro.tattoo', category: 'Tattoo artist', link: 'https://www.instagram.com/kuuro.tattoo/' },
    { image: ossuary, insta: 'ossuary.tattoo', category: 'Tattoo artist', link: 'https://www.instagram.com/ossuary.tattoo/' },

])

const openLink = (url: string) => {
    window.open(url, '_blank')
}
</script>

<template>
    <div class="flex flex-row flex-wrap justify-center gap-6 py-4">
        <div v-for="(artiste, i) in artistes" :key="i" class="flex flex-col gap-2 items-center hover:scale-105 transition-transform duration-300 cursor-pointer" @click="openLink(artiste.link)">
            <img :src="artiste.image" alt="Check" class="size-40 rounded-full border-2 sm:size-62" />
            <p class="text-center text-xl">{{ artiste.insta }}</p>
            <p class="text-center">{{ artiste.category }}</p>
        </div>
    </div>
</template>