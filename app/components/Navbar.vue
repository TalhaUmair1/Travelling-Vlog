<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <UHeader title="Travel Log" />
      </NuxtLink>
    </template>
    <template #right>
    <UButton icon="i-lucide-github" >Sing in with GitHub </UButton>
    <UColorModeButton>
    <template #fallback>
      <UButton loading variant="ghost" color="neutral" />
    </template>
  </UColorModeButton>
    </template>
  </UHeader>
</template>

