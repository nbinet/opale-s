<script setup lang="ts">
import logo from '@/assets/images/logo.png'
</script>

<template>
  <nav class="text-[#D29A33] uppercase text-sm flex items-center justify-evenly gap-4 p-4 overflow-visible h-14">
    <router-link to="/pro">Espace pro</router-link>
    <router-link to="/"><img :src="logo" alt="Logo Opaleïs" class="h-14" /></router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>