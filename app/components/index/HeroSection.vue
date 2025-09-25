<script setup lang="ts">
const links = ref([
  {
    label: 'Sign in with GitHub',
    to: 'https://github.com/login',
    icon: 'i-lucide-github'
  }
])
</script>

<template>
  <UPageHero 
    title="Your Ultimate Travel Log"
    description="Turn your journeys into unforgettable stories. With our Travel Log, whether  you can document your adventures  or exploring hidden gems nearby,  our tool makes it easy to document, share,  and relive your adventures. 
    and inspire others to explore the world. Start your journey today!"
    :links="links"
  />
</template>
