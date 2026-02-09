<script setup lang="ts">
import { ref } from 'vue'
import Title from './Description/Text/Title.vue';
import objectif1 from '@/assets/images/objectif-1.jpg'
import objectif2 from '@/assets/images/objectif-2.jpg'
import objectif3 from '@/assets/images/objectif-3.jpg'
import objectif4 from '@/assets/images/objectif-4.jpg'

const objectifs = ref([
  {
    text: "Créer des passerelles entre les acteurs du monde de la beauté, du style et du bien-être",
    image: objectif1
  },
  {
    text: "Promouvoir les métiers de l’embellissement corporel, définitif ou temporaire",
    image: objectif2
  },
  {
    text: "Créer un moment d’échanges et de convivialité autour du corps et de la créativité",
    image: objectif3
  },
  {
    text: "Ouvrir une vitrine professionnelle aux artistes et entreprises locales",
    image: objectif4
  }
])
</script>

<template>
  <section class="flex flex-col items-center gap-4">
    <Title>Nos Objectifs</Title>

    <div class="flex flex-col gap-2">
      <div
        v-for="(objectif, i) in objectifs"
        :key="i"
        :class="[
          'flex items-center gap-4',
          i % 2 ? 'flex-row' : 'flex-row-reverse'
        ]"
      >
        <img
          :src="objectif.image"
          alt="Objectif"
          class="w-1/3 h-50 object-cover rounded-2xl border-2 border-[#E5AE38]"
        />

        <p class="text-center">{{ objectif.text }}</p>
      </div>
    </div>
  </section>
</template>