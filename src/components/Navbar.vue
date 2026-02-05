<template>
  <nav class="navbar">
    <router-link to="/">Accueil</router-link>
    <router-link to="/page-a">Page A</router-link>
    <router-link to="/page-b">Page B</router-link>
  </nav>
</template>

<script setup lang="ts">
// aucun script nécessaire pour ce composant simple
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
}
</style>