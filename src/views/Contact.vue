<script setup lang="ts">
import insta from '@/assets/images/instagram.png'
import bijou from '@/assets/images/bijou.png'
import arrow from '@/assets/images/arrow.png'
import opaleisInsta from '@/assets/images/opaleis_insta.png'
import portrait from '@/assets/images/hair.jpg'

import Description from '../components/Description/index.vue'
import Image from '../components/Description/Image.vue'
import Text from '../components/Description/Text/index.vue'
import Title from '../components/Description/Text/Title.vue'
import Content from '../components/Description/Text/Content.vue'

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section>
    <div class="flex justify-between gap-8">
      <div class="flex grow flex-col justify-between gap-8">
        <Title class="text-center">Nous contacter</Title>
        <div>
          <p><span class="text-[#D29A33]">Adresse e-mail:</span> associationsiliven@gmail.com</p>
          <p><span  class="text-[#D29A33]">N° de téléphone:</span> 06 73 65 98 76</p>
        </div>
        <div class="relative">
          <p class="text-center">Toute notre actualité<br />sur Instagram</p>
          <div class="flex items-center justify-center md:hidden">
            <img :src="insta" alt="Instagram" class="h-14 cursor-pointer hover:scale-105 transition-transform duration-300" @click="openLink('https://www.instagram.com/opaleis_events/')" />
          </div>
          <div class="justify-around md:flex">
            <img :src="bijou" alt="logo siliven" class="h-30 md:h-50" />
            <img :src="arrow" alt="arrow" class="hidden h-15 md:flex lg:h-20" />
          </div>
        </div>
      </div>
      <img :src="opaleisInsta" alt="Instagram opaleis" class="hidden md:block cursor-pointer hover:scale-105 transition-transform duration-300" @click="openLink('https://www.instagram.com/opaleis_events/')" />
    </div>
  </section>
  <section>
    <Description>
      <Image><img :src="portrait" alt="portrait" /></Image>
      <Text>
        <Title>Opaléïs par l’association Siliven</Title>
        <Content>SILIVEN est une association crée par quatre jeunes afin de valoriser la beauté, le style et l’expression de soi à travers des événements culturels et artistiques.<br />
        Elle soutient les petites entreprises et les artisans de l’embellissement en leur offrant visibilité et opportunités de rencontres. L’association est portée par Manon (Présidente), Mathilde (Trésorière), Maeva (Secrétaire) et Hugo (Vice-président), et développe des projets tels que Opaleïs, ainsi que d’autres initiatives à venir.</Content>
      </Text>
    </Description>
  </section>
</template>

<style scoped></style>