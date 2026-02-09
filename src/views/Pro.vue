<script setup lang="ts">
import handshake from '@/assets/images/handshake.jpg'

import Description from '../components/Description/index.vue'
import Image from '../components/Description/Image.vue'
import Text from '../components/Description/Text/index.vue'
import Title from '../components/Description/Text/Title.vue'
import Content from '../components/Description/Text/Content.vue'
import Artists from '../components/Artists.vue'
</script>

<template>
  <section>
    <Description>
      <Image><img :src="handshake" alt="Portrait de l'exposant" class="hidden md:block" /></Image>
      <Text>
        <Title>Être exposant</Title>
        <Content>Soutenir OPALEÏS et devenir partenaire, c’est participer à une aventure humaine et artistique qui valorise les talents locaux, l’innovation et la créativité. 
          <br />
C’est aussi l’opportunité d’associer votre image à un événement élégant, fédérateur et porteur de sens, dédié à l’art de sublimer le corps.</Content>
        <Content>En devenant partenaire, vous soutenez la créativité, la confiance en soi et la valorisation du corps comme expression artistique. Votre marque prendra part à un rendez-vous élégant, humain et inspirant, où chaque collaboration trouve un sens.</Content>
        <Content>Nous serons heureux de compter votre entreprise parmi nos partenaires pour faire d’OPALEÏS un rendez-vous unique, empreint d’élégance, de partage et d’inspiration.</Content>
      </Text>
    </Description>
  </section>
  <section>
    <Title class="text-center pt-4">Vos avantages</Title>
    <ul class="list-disc list-inside custom-points">
      <li><span class="font-bold text-[#D29A33]">Visibilité:</span> Logo et identité intégrés à nos supports de communication</li>
      <li><span class="font-bold text-[#D29A33]">Valorisation:</span> Présence et visibilité sur le lieu de l’événement.</li>
      <li><span class="font-bold text-[#D29A33]">Remerciements :</span> Citation et remerciements lors du cocktail &amp; DJ set.</li>
      <li><span class="font-bold text-[#D29A33]">Partenariat sur mesure :</span> Opportunité de développer votre réseau et de valoriser votre marque auprès d’un public ciblé et engagé.</li>
    </ul>
    <p class="text-center pt-4 italic">Chaque partenariat est pensé sur mesure, en fonction de vos valeurs, de votre activité et de vos envies de collaboration.</p>
  </section>
  <section class="flex flex-col items-center gap-4 pt-4">
    <Title>Ils nous font confiance</Title>
    <Artists />
  </section>
</template>

<style scoped>
.custom-points ::marker {
  color: #D29A33;
}
</style>