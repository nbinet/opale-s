<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="bodoni-moda-regular bg-[#FAFAF9] p-4">
    <Navbar />
    <main class="py-4 space-y-4">
      <router-view />
    </main>
    <Footer />
  </div>
</template>