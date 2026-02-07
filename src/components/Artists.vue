<script setup lang="ts">
import { ref } from 'vue'

const artistes = ref([
    { image: 'nails', insta: 'nails_addict_caen_', category: 'Prothésiste ongulaire', link: 'https://www.instagram.com/nails_addict_caen_/' },
    { image: 'haspa', insta: 'haspa_ttt', category: 'Tatoo artist', link: 'https://www.instagram.com/haspa_ttt/' },
    { image: 'nina', insta: 'its_n_i_n_a', category: 'Technicienne de cils', link: 'https://www.instagram.com/its.n_i_n_a_/' },
])

const openLink = (url: string) => {
    window.open(url, '_blank')
}
</script>

<template>
    <div class="flex flex-row flex-wrap justify-center gap-4 py-4">
        <div v-for="(artiste, i) in artistes" :key="i" class="flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer" @click="openLink(artiste.link)">
            <img :src="`/public/${artiste.image}.png`" alt="Check" class="size-40 sm:size-auto" />
            <p class="text-center text-xl">{{ artiste.insta }}</p>
            <p class="text-center">{{ artiste.category }}</p>
        </div>
    </div>
</template>