<script setup lang="ts">
import Description from '../components/Description/index.vue'
import Image from '../components/Description/Image.vue'
import Text from '../components/Description/Text/index.vue'
import Title from '../components/Description/Text/Title.vue'
import Content from '../components/Description/Text/Content.vue'
</script>

<template>
  <section>
    <h1>Page B</h1>
    <p>Contenu de la Page B.</p>
  </section>
  <section>
    <Description>
      <Image><img src="/public/beauregard-nuit.png" alt="Logo Opaleïs" /></Image>
      <Text>
        <Title>ÊTRE EXPOSANT</Title>
        <Content>Prothésistes ongulaires, techniciennes de cils, tatoueurs, perceurs ou encore coiffeur, rencontrez autant de professionnels et artistes, spécialisés dans la sublimation du corps, grâce au nouvel évènements OPALEÏS !</Content>
        <Content>Les fondateurs de l’association SILIVEN et organisateur de l’évènement, ont à coeur de créer un espace élégant, moderne et inclusif pour valoriser le savoir-faire de ces professionnels tout en mêlant beauté, art et convivialité.</Content>
      </Text>
    </Description>
  </section>
</template>

<style scoped></style>