<script setup lang="ts">
const sessionStore = useSessionStore()
const userStore = useUserStore()

const session = await sessionStore.getCurrentSession()

if (session) {
  await userStore.getUser()
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
