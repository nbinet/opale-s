<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main class="page">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

nav.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f7fb;
  border-bottom: 1px solid #e6e9ef;
  align-items: center;
}

nav.navbar a {
  color: #34495e;
  text-decoration: none;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
}

nav.navbar a.router-link-active {
  background: #3b82f6;
  color: white;
}

.page {
  padding: 1.5rem;
}
</style>