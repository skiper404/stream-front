<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import {
	createUserSchema,
	type CreateUserSchema,
} from '~/schemas/create-user.schema'

const state = reactive<CreateUserSchema>({
	username: '',
	email: '',
	password: '',
	repeatPassword: '',
})

const error = ref<string | null>('')

const onSubmit = async (event: FormSubmitEvent<CreateUserSchema>) => {
	await GqlCreateUser({
		data: {
			username: event.data.username,
			email: event.data.email,
			password: event.data.password,
		},
	})

	await navigateTo('/')
}
</script>

<template>
	<div class="border h-full flex flex-col items-center">
		<div class="mt-10">Create User</div>
		<UButton variant="outline" to="/" class="m-2">Back</UButton>

		<UCard class="mt-10">
			<UForm
				:schema="createUserSchema"
				:state="state"
				class="space-y-4"
				@submit="onSubmit"
			>
				<UFormField label="Username" name="username">
					<UInput v-model="state.username" />
				</UFormField>

				<UFormField label="Email" name="email">
					<UInput v-model="state.email" />
				</UFormField>

				<UFormField label="Password" name="password">
					<UInput v-model="state.password" type="password" />
				</UFormField>

				<UFormField label="Repeat password" name="repeatPassword">
					<UInput v-model="state.repeatPassword" type="password" />
				</UFormField>

				<UButton type="submit">Submit</UButton>
			</UForm>
		</UCard>
	</div>
</template>
