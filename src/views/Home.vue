<script setup lang="ts">
import Description from '../components/Description/index.vue'
import Image from '../components/Description/Image.vue'
import Text from '../components/Description/Text/index.vue'
import Title from '../components/Description/Text/Title.vue'
import Content from '../components/Description/Text/Content.vue'
import Objectifs from '../components/Objectifs.vue'
</script>

<template>
  <section class="min-h-[80vh] -m-4 mb-2 bg-cover bg-center  flex items-center justify-center" style="background-image: url('public/beauregard-nuit.png')">
    <div class="flex flex-col items-center text-center text-xl text-white h-full">
      <div class="flex items-center text-lg sm:text-2xl font-semibold">
        <h1>Évènement</h1>
        <img src="/public/logo.png" alt="Logo Opaleïs" class="h-20 md:h-48" />
      </div>
      <p>25 et 26 avril 2026</p>
      <p>Château de Beauregard - Normandie</p>
    </div>
  </section>
  <section>
    <Description>
      <Image><img src="/public/portrait-1.jpg" alt="Logo Opaleïs" /></Image>
      <Text>
        <Title>L’ÉVÈNEMENT OPALÉÏS</Title>
        <Content>Prothésistes ongulaires, techniciennes de cils, tatoueurs, perceurs ou encore coiffeur, rencontrez autant de professionnels et artistes, spécialisés dans la sublimation du corps, grâce au nouvel évènements OPALEÏS !</Content>
        <Content>Les fondateurs de l’association SILIVEN et organisateur de l’évènement, ont à coeur de créer un espace élégant, moderne et inclusif pour valoriser le savoir-faire de ces professionnels tout en mêlant beauté, art et convivialité.</Content>
      </Text>
    </Description>
  </section>
  <section>
    <Objectifs />
  </section>
</template>

<style scoped></style>