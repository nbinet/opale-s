<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import logo from '@/assets/images/logo.png'
import resume from '@/assets/images/event_resume.jpg'

import perceur from '@/assets/images/perceur.png'
import coiffeur from '@/assets/images/coiffeur.png'
import tatoueur from '@/assets/images/tatoueur.png'
import cils from '@/assets/images/cils.png'
import ongles from '@/assets/images/ongles.png'
import annonce from '@/assets/images/annonce2.png'
import annonceMobile from '@/assets/images/annonce.png'

import Description from '../components/Description/index.vue'
import Image from '../components/Description/Image.vue'
import Text from '../components/Description/Text/index.vue'
import Title from '../components/Description/Text/Title.vue'
import Content from '../components/Description/Text/Content.vue'
import Objectifs from '../components/Objectifs.vue'
import Exposants from '../components/Exposants/index.vue'
import ExposantsImage from '../components/Exposants/Image.vue'
import ExposantsTitle from '../components/Exposants/Title.vue'
import Artists from '../components/Artists.vue'

const exposants = [
  { alt: 'perceur', image: perceur },
  { alt: 'coiffeur', image: coiffeur },
  { alt: 'tatoueur', image: tatoueur },
  { alt: 'cils', image: cils },
  { alt: 'ongles', image: ongles }
]

// responsive background logic
const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
const onResize = () => (width.value = window.innerWidth)
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

const isLarge = computed(() => width.value >= 1536)

// computed style: you can add an overlay via linear-gradient to darken the image
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${isLarge.value ? annonce : annonceMobile})`
}))
</script>

<template>
  <section class="min-h-[80vh] bg-cover bg-center flex flex-col items-center 2xl:items-start justify-between 2xl:justify-around relative -mx-4 text-[#967050] text-center" :style="backgroundStyle">
    <div class="flex flex-col items-center w-full 2xl:w-1/3">
      <img :src="logo" alt="Logo Opaleïs" class="h-20 sm:h-40" />
      <div class="text-2xl sm:text-4xl">La convention pour l'embellissement corporel</div>
    </div>
    <div class="text-lg sm:text-2xl mb-4 w-full 2xl:w-1/3">
      <span v-if="!isLarge">25 & 26 Avril 2026 - Domaine de Beauregard - Normandie</span>
      <div v-else><p>25 & 26 Avril 2026</p><p>Domaine de Beauregard - Normandie</p></div>
    </div>
  </section>

  <section>
    <Exposants>
      <div v-for="exposant in exposants" :key="exposant.alt">
        <ExposantsImage :src="exposant.image" :alt="exposant.alt" />
        <ExposantsTitle>{{ exposant.alt }}</ExposantsTitle>
      </div>
    </Exposants>
  </section>

  <section>
    <Description>
      <Image><img :src="resume" alt="portrait" /></Image>
      <Text>
        <Title>L’évènement Opaleïs</Title>
        <Content>Prothésistes ongulaires, techniciennes de cils, tatoueurs, perceurs ou encore coiffeur, rencontrez autant de professionnels et artistes, spécialisés dans la sublimation du corps, grâce au nouvel évènements convention OPALEÏS !</Content>
        <Content>Les fondateurs de l’association SILIVEN et organisateur de l’évènement, ont à coeur de créer un espace élégant, moderne et inclusif pour valoriser le savoir-faire de ces professionnels tout en mêlant beauté, art et convivialité.
        <br />
          L’objectif étant de favoriser les échanges entre professionnels et à offrir au public une expérience sensorielle et inspirante.</Content>
      </Text>
    </Description>
  </section>

  <section>
    <Title class="text-center">Au programme</Title>
    <div class="flex flex-col md:flex-row md:justify-between xl:justify-around">
      <ul class="list-disc list-inside">
        <li>Stands de professionnels et artistes</li>
        <li>Ateliers d’échanges avec les exposants (10 pers. /Ateliers)</li>
        <li>Prestations des exposants sur place</li>
        <li>Restauration</li>
      </ul>
      <div class="flex flex-col items-center text-center md:justify-evenly">
        <p>Entrée gratuite</p>
        <p>Inscription requise pour les ateliers</p>
      </div>
    </div>
    <p class="text-center mt-4">Programme détaillé à venir</p>
  </section>

  <section>
    <Title class="text-center">Ils seront présents</Title>
    <Artists />
  </section>

  <section>
    <Objectifs />
  </section>
</template>