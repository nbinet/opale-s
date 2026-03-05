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
import programme from '@/assets/images/portrait-1.jpg'
import spacer from '@/assets/images/spacer.png'

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

const program = [
  { text: "Stands de professionels et artistes", side: "left" },
  { text: "Ateliers d’échanges avec les exposants <br>(10 pers. / Ateliers)", side: "right" },
  { text: "Prestations d’exposants", side: "left" },
  { text: "Restauration sur place", side: "right" }
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
  <section
    class="min-h-[80vh] bg-cover bg-center flex flex-col items-center 2xl:items-start justify-between 2xl:justify-around relative -mx-4 text-[#967050] text-center"
    :style="backgroundStyle">
    <div class="flex flex-col items-center w-full 2xl:w-1/3">
      <img :src="logo" alt="Logo Opaleïs" class="h-20 sm:h-40" />
      <div class="text-2xl sm:text-4xl">La convention pour l'embellissement corporel</div>
    </div>
    <div class="text-lg sm:text-2xl mb-4 w-full 2xl:w-1/3">
      <span v-if="!isLarge">25 & 26 Avril 2026 - Domaine de Beauregard - Normandie</span>
      <div v-else>
        <p>25 & 26 Avril 2026</p>
        <p>Domaine de Beauregard - Normandie</p>
      </div>
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

  <section class="hidden">
    <Description>
      <Image><img :src="resume" alt="portrait" /></Image>
      <Text>
        <Title>L’évènement Opaleïs</Title>
        <Content>Prothésistes ongulaires, techniciennes de cils, tatoueurs, perceurs ou encore coiffeur, rencontrez
          autant de professionnels et artistes, spécialisés dans la sublimation du corps, grâce au nouvel évènements
          convention OPALEÏS !</Content>
        <Content>Les fondateurs de l’association SILIVEN et organisateur de l’évènement, ont à coeur de créer un espace
          élégant, moderne et inclusif pour valoriser le savoir-faire de ces professionnels tout en mêlant beauté, art
          et convivialité.
          <br />
          L’objectif étant de favoriser les échanges entre professionnels et à offrir au public une expérience
          sensorielle et inspirante.
        </Content>
      </Text>
    </Description>
  </section>

  <section>
    <Title class="text-center">Programme</Title>
    <div class="flex gap-14 my-14 justify-center items-center">
      <img :src="programme" alt="programme" class="rounded-2xl border-2 border-[#967050] h-60 aspect-3/4 object-cover hidden md:block" />

      <!-- Timeline -->
      <div class="grid grid-cols-[1fr_auto_1fr] relative py-4 gap-y-4">
        <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#967050]"></div>
        <template v-for="(item, i) in program" :key="i">
          <div v-if="item.side === 'left'" class="text-right pr-2 flex items-center justify-end">
            {{ item.text }}
          </div>
          <div v-else></div>

          <div class="flex justify-center items-center">
            <div class="w-2 h-2 bg-[#967050] rotate-45"></div>
          </div>
          
          <div v-if="item.side === 'right'" class="pl-2 flex items-center justify-start" v-html="item.text"></div>
          <div v-else></div>
        </template>
      </div>
    </div>
    <p class="text-center mt-4 text-[#E5AE38]">“Une expérience sensorielle et inspirante, dans un cadre élégant, moderne et inclusif”</p>
  </section>

  <section class="flex justify-center">
    <img :src="spacer" alt="spacer" />
  </section>

  <section>
    <Title class="text-center">Exposants</Title>
    <Artists />
  </section>

  <section class="flex justify-center">
    <img :src="spacer" alt="spacer" />
  </section>

  <section>
    <Objectifs />
  </section>
</template>