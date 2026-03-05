<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="quicksand-regular text-[#967050] bg-[#FAFAF9] sm:text-xl p-4">
    <Navbar />
    <main class="pt-4 pb-20 space-y-14">
      <router-view />
    </main>
    <Footer />
  </div>
</template>