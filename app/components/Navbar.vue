<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <UHeader title="Nuxt UI" />
      </NuxtLink>
    </template>
    <template #right>
      <ULink class="bg-primary text-neutral px-4 py-1 rounded-sm" as="button">Sign up</ULink>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

