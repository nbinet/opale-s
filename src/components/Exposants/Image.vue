<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <img class="object-cover w-24 h-24 md:w-full md:h-full" :src="src" :alt="alt" />
</template>
