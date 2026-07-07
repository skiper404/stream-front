<script setup lang="ts">
const route = useRoute("username")
</script>

<template>
  <UContainer>
    <div>username: {{ route.params.username }}</div>
  </UContainer>
</template>
