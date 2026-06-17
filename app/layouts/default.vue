<script setup lang="ts"></script>
<template>
  <div class="flex h-screen flex-col">
    <header class="bg-accented/50 flex h-10 items-center justify-center">Header</header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="bg-accented/50 flex h-8 items-center justify-center">Footer</footer>
  </div>
</template>
