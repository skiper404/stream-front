<script setup lang="ts">
const { data, pending, refresh } = await useAsyncGql({ operation: 'GetUsers' })
</script>

<template>
	<div class="h-full flex flex-col border items-center">
		<div class="my-10">Home</div>
		<div v-if="pending">Loading...</div>
		<div v-else>
			<div v-for="user in data.getUsers">
				<div>id: {{ user.id }}</div>
				<div>username: {{ user.username }}</div>
				<div>email: {{ user.email }}</div>
			</div>
		</div>
		<UButton @click="() => refresh()" label="Refresh" />
		<nav class="flex gap-8">
			<UButton to="/auth/create-user" variant="subtle">Create User</UButton>

			<UButton to="/auth/login-user" variant="soft">Login User</UButton>
		</nav>
	</div>
</template>
