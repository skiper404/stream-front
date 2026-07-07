<script setup lang="ts">
const route = useRoute("categories-slug")
</script>

<template>
  <div>Category slug: {{ route.params.slug }}</div>
</template>
