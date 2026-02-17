<script setup lang="ts">
import logo from '@/assets/images/logo.png'
</script>

<template>
  <nav class="text-[#D29A33] uppercase text-sm flex items-center justify-between gap-4 py-4 md:px-20 overflow-visible h-14">
    <router-link to="/"><img :src="logo" alt="Logo Opaleïs" class="h-14" /></router-link>
    <div class="flex items-center gap-20">
      <router-link to="/">Accueil</router-link>
      <router-link to="/pro">Espace pro</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>