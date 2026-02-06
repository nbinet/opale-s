<script setup lang="ts">
import { ref } from 'vue'

const objectifs = ref([
    "Créer des passerelles entre les acteurs du monde de la beauté, du style et du bien-être",
    "Promouvoir les métiers de l’embellissement corporel, définitif ou temporaire",
    "Créer un moment d’échanges et de convivialité autour du corps et de la créativité",
    "Ouvrir une vitrine professionnelle aux artistes et entreprises locales"
])
</script>

<template>
    <section class="flex flex-col items-center gap-4">
        <h2 class="text-xl mb-2 uppercase">Nos Objectifs</h2>
        <div class="flex flex-col gap-2">
            <div v-for="(objectif, i) in objectifs" :key="objectif" :class="[
                'flex items-center gap-4',
                i % 2 ? 'flex-row-reverse' : ''
            ]">
        <img :src="`/public/portrait-${i + 1}.jpg`" alt="Check" class="w-1/3 h-50 object-cover rounded-2xl" />
            <p class=" text-center">{{ objectif }}</p>
        </div>
        </div>
    </section>
</template>