<script setup lang="ts">
const props = defineProps<{ error: string; isAnimating: boolean }>()
const emit = defineEmits<{ animationend: [] }>()
</script>

<template>
  <div
    :class="[
      'text-error bg-error/10 mb-10 flex h-10 items-center justify-center rounded-lg text-center text-xs',
      { shake: isAnimating }
    ]"
    @animationend="emit('animationend')"
  >
    {{ error }}
  </div>
</template>

<style scoped>
.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }

  10% {
    transform: translateX(-12px);
  }

  20% {
    transform: translateX(12px);
  }

  30% {
    transform: translateX(-10px);
  }

  40% {
    transform: translateX(10px);
  }

  50% {
    transform: translateX(-8px);
  }

  60% {
    transform: translateX(8px);
  }

  70% {
    transform: translateX(-6px);
  }

  80% {
    transform: translateX(6px);
  }

  90% {
    transform: translateX(-3px);
  }
}
</style>
