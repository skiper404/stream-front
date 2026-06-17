<script setup lang="ts">
const { data, pending, refresh } = await useAsyncGql({ operation: "GetUsers" })

const logout = async () => {
  try {
    await GqlLogoutUser()
    await navigateTo("/auth/login-user")
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="flex h-full flex-col items-center border">
    <div class="my-10">Home</div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <div v-for="user in data.getUsers">
        <div>id: {{ user.id }}</div>
        <div>username: {{ user.username }}</div>
        <div>email: {{ user.email }}</div>
      </div>
    </div>
    <div class="my-4 space-x-4">
      <UButton @click="() => refresh()" label="Refresh" />
      <UButton @click="logout" label="Logout" />
    </div>
    <nav class="flex gap-8">
      <UButton to="/auth/create-user" variant="subtle">Create User</UButton>

      <UButton to="/auth/login-user" variant="soft">Login User</UButton>
    </nav>
  </div>
</template>
