<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    class="group text-primary flex shrink-0 cursor-pointer items-center gap-2 text-xl transition-all"
    aria-label="Skiper Stream"
    :to="localePath('/')"
  >
    <div
      class="bg-primary/10 border-primary/20 flex items-center rounded-full border-2 p-1 shadow-neutral-50 saturate-0 transition-all duration-500 group-hover:rotate-180 group-hover:saturate-100"
    >
      <Icon name="heroicons:signal-16-solid" size="20" />
    </div>
    <h2 class="font-black transition-all">
      <span class="text-neutral-50"> Skiper </span>
      <span class="saturate-0 transition-all group-hover:saturate-100"> Stream </span>
    </h2>
  </NuxtLink>
</template>
