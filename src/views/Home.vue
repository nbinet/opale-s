<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import resume from '@/assets/images/event_resume.jpg'
import beauregard from '@/assets/images/beauregard-filtre.jpg'
import perceur from '@/assets/images/perceur.jpg'
import coiffeur from '@/assets/images/coiffeur.jpg'
import tatoueur from '@/assets/images/tatoueur.jpg'
import cils from '@/assets/images/cils.jpg'
import ongles from '@/assets/images/ongles.jpg'

import Description from '../components/Description/index.vue'
import Image from '../components/Description/Image.vue'
import Text from '../components/Description/Text/index.vue'
import Title from '../components/Description/Text/Title.vue'
import Content from '../components/Description/Text/Content.vue'
import Objectifs from '../components/Objectifs.vue'
import Exposant from '../components/Exposant.vue'
import Artists from '../components/Artists.vue'
</script>

<template>
  <section class="min-h-[80vh] bg-cover bg-top flex items-center justify-center relative" :style="{ backgroundImage: `url(${beauregard})` }">
    <div class="flex flex-col items-center text-white h-full">
      <div class="flex items-center text-3xl sm:text-5xl font-semibold">
        <h1>Évènement</h1>
         <img :src="logo" alt="Logo Opaleïs" class="h-20 sm:h-40 ml-4" />
      </div>
      <div class="flex flex-col items-center text-center text-lg sm:text-3xl">
        <p>25 et 26 avril 2026</p>
        <p>Domaine de Beauregard - Normandie</p>
      </div>
    </div>
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
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:px-[10%]">
      <Exposant><Title><span class="capitalize">Exposants</span></Title></Exposant>
      <Exposant :style="{ backgroundImage: `url(${perceur})` }">Perceur</Exposant>
      <Exposant :style="{ backgroundImage: `url(${coiffeur})` }">Coiffeur</Exposant>
      <Exposant :style="{ backgroundImage: `url(${tatoueur})` }">Tatoueur</Exposant>
      <Exposant :style="{ backgroundImage: `url(${cils})` }">Cils</Exposant>
      <Exposant :style="{ backgroundImage: `url(${ongles})` }">Ongles</Exposant>
    </div>
  </section>
  <section>
    <Title class="text-center">Ils seront présents</Title>
    <Artists />
  </section>
  <section>
    <Objectifs />
  </section>
</template>