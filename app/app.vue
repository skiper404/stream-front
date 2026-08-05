<script setup lang="ts">
usePrimaryColor()
const sessionStore = useSessionStore()
const userStore = useUserStore()

const session = await sessionStore.getCurrentSession()

if (session) {
  await Promise.all([userStore.getUser(), sessionStore.getSessions()])
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
