<script setup lang="ts">
import {
  ChangeEmailDocument,
  ChangePasswordDocument,
  ChangeProfileAvatarDocument,
  ClearSessionCookieDocument,
  DisableTotpDocument,
  EnableTotpDocument,
  GenerateTotpSecretDocument,
  GetCurrentSessionDocument,
  GetMeDocument,
  GetUserSessionsDocument,
  LogoutUserDocument,
  RemoveProfileAvatarDocument,
  RemoveSessionDocument
} from "~/graphql/generated/graphql"

const toast = useToast()
const apollo = useApollo()

const { data: meData } = await apollo.query({ query: GetMeDocument })
const { data: sessionData } = await apollo.query({ query: GetCurrentSessionDocument })
const { data: sessionsData } = await apollo.query({ query: GetUserSessionsDocument })

const user = computed(() => meData?.getMe ?? null)
const session = computed(() => sessionData?.getCurrentSession ?? null)
const sessions = computed(() => sessionsData?.getUserSessions ?? [])

const totp = ref<{ qrcodeUrl: string; secret: string } | null>(null)

const isLoadingGenerateTotp = ref(false)
const isLoadingEnable = ref(false)
const isLoadingDisable = ref(false)
const changeEmailLoading = ref(false)
const changePasswordLoading = ref(false)
const changeAvatarLoading = ref(false)
const removeAvatarLoading = ref(false)

const newEmail = ref("")
const oldPassword = ref("")
const newPassword = ref("")

const avatar = ref<File | null | undefined>(null)

const logout = async () => {
  try {
    await apollo.mutate({ mutation: LogoutUserDocument })
    await navigateTo("/auth/login-user")
  } catch (e: any) {
    toast.add({ title: e.message })
  }
}

const clearSessionCookie = async () => {
  try {
    await apollo.mutate({ mutation: ClearSessionCookieDocument })
  } catch (e: any) {
    toast.add({ title: e.message })
  }
}

const removeSession = async () => {
  try {
    await apollo.mutate({ mutation: RemoveSessionDocument, variables: { id: "vkxCZK8PyNWzE-k3yhyi1_cEtZM-N5Ku" } })
  } catch (e: any) {
    toast.add({ title: e.message })
  }
}

const generateTotpSecret = async () => {
  try {
    isLoadingGenerateTotp.value = true
    const { data } = await apollo.query({ query: GenerateTotpSecretDocument })

    if (!data?.generateTotpSecret) return

    totp.value = data.generateTotpSecret

    toast.add({ title: "TotpSecret Generated!" })
  } catch (e: any) {
    isLoadingGenerateTotp.value = false
    toast.add({ title: e.message })
  } finally {
    isLoadingGenerateTotp.value = false
  }
}

const enableTotp = async () => {
  try {
    isLoadingEnable.value = true
    await apollo.mutate({
      mutation: EnableTotpDocument,
      variables: { data: { pin: "123456", secret: "XTUMDKOXJZCLYR7OJWFSABJKTCW6S5P3" } }
    })

    toast.add({ title: "Totp Enabled!" })
  } catch (e: any) {
    isLoadingEnable.value = false
    toast.add({ title: e.message })
  } finally {
    isLoadingEnable.value = false
  }
}

const disableTotp = async () => {
  try {
    isLoadingDisable.value = true
    await apollo.mutate({ mutation: DisableTotpDocument })

    toast.add({ title: "Totp Disabled!" })
  } catch (e: any) {
    isLoadingDisable.value = false
    toast.add({ title: e.message })
  } finally {
    isLoadingDisable.value = false
  }
}

const changeEmail = async () => {
  try {
    changeEmailLoading.value = true
    await apollo.mutate({ mutation: ChangeEmailDocument, variables: { data: { email: newEmail.value } } })

    toast.add({ title: "Email changed!" })
  } catch (e: any) {
    changeEmailLoading.value = false
    toast.add({ title: e.message })
  } finally {
    changeEmailLoading.value = false
  }
}

const changePassword = async () => {
  try {
    changePasswordLoading.value = true
    await apollo.mutate({
      mutation: ChangePasswordDocument,
      variables: { data: { newPassword: newPassword.value, oldPassword: oldPassword.value } }
    })

    toast.add({ title: "Password changed!" })
  } catch (e: any) {
    changePasswordLoading.value = false
    toast.add({ title: e.message })
  } finally {
    changePasswordLoading.value = false
  }
}

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (!target.files?.length) return

  avatar.value = target.files[0]
}

const changeAvatar = async () => {
  try {
    console.log("avatar:", avatar.value)
    console.log("is File:", avatar.value instanceof File)

    if (!avatar.value) {
      toast.add({ title: "Select file first" })
      return
    }

    changeAvatarLoading.value = true
    await apollo.mutate({ mutation: ChangeProfileAvatarDocument, variables: { avatar: avatar.value } })

    toast.add({ title: "Avatar changed!" })
  } catch (e: any) {
    changeAvatarLoading.value = false
    toast.add({ title: e.message })
  } finally {
    changeAvatarLoading.value = false
  }
}

const removeAvatar = async () => {
  try {
    removeAvatarLoading.value = true
    await apollo.mutate({ mutation: RemoveProfileAvatarDocument })

    toast.add({ title: "Avatar removed!" })
  } catch (e: any) {
    removeAvatarLoading.value = false
    toast.add({ title: e.message })
  } finally {
    removeAvatarLoading.value = false
  }
}
</script>

<template>
  <div class="flex h-full flex-col items-center border">
    <div class="my-10">Home</div>
    <div v-if="session">Session: {{ session }}</div>
    <div v-if="sessions">
      Sessions:
      <div v-for="session in sessions">
        <div>id: {{ session.id }}</div>
        <div>userId {{ session.userId }}</div>
        <div>
          Device:
          <div v-for="item in session.metadata.device">
            <div>browser:{{ item }}</div>
            <div>os:{{ item }}</div>
          </div>
          location:
          <div v-for="item in session.metadata.location">
            <div>country:{{ item }}</div>
            <div>city:{{ item }}</div>
          </div>
          <div>{{ session.metadata.ip }}</div>
        </div>
      </div>
    </div>
    <div>Me:</div>
    <div v-if="user">
      <pre>id: {{ user.id }}</pre>
      <pre>username: {{ user.username }}</pre>
      <pre>email: {{ user.email }}</pre>
      <pre>password: {{ user.password }}</pre>
      <pre>avatar: {{ user.avatar }}</pre>
      <pre>bio: {{ user.bio }}</pre>
      <pre>IsVerified: {{ user.isVerified }}</pre>
      <pre>IsEmailVerified: {{ user.isEmailVerified }}</pre>
      <pre>isTotpEnabled: {{ user.isTotpEnabled }}</pre>
      <pre>totpSecret: {{ user.totpSecret }}</pre>
      <pre>isTotopEnabled: {{ user.isTotpEnabled }}</pre>
      <pre>IsDeactivated: {{ user.isDeactivated }}</pre>
      <pre>deactivatedAt: {{ user.deactivatedAt }}</pre>
      <pre>createdAt: {{ user.createdAt }}</pre>
      <pre>updatedAt: {{ user.updatedAt }}</pre>
    </div>

    <input type="file" @change="onFileChange" />

    <button :disabled="changeAvatarLoading" @click="changeAvatar">Upload</button>

    <UButton
      :disabled="removeAvatarLoading"
      :loading="removeAvatarLoading"
      @click="removeAvatar"
      label="Remove Avatar"
    />

    <div class="my-4 space-x-4">
      <UInput v-model="newEmail" placeholder="newEmail" />
      <UButton :disabled="changeEmailLoading" :loading="changeEmailLoading" @click="changeEmail" label="changeEmail" />
      <UInput v-model="oldPassword" placeholder="oldPassword" />
      <UInput v-model="newPassword" placeholder="newPassword" />
      <UButton
        :disabled="changePasswordLoading"
        :loading="changePasswordLoading"
        @click="changePassword"
        label="changePassword"
      />
    </div>
    <div class="my-4 space-x-4">
      <UButton @click="logout" label="Logout" />
      <UButton @click="clearSessionCookie" label="Clear Session Cookie" />
      <UButton @click="removeSession" label="Remove Session" />
    </div>

    <nav class="flex gap-8">
      <UButton to="/auth/create-user" variant="subtle">Create User</UButton>

      <UButton to="/auth/login-user" variant="soft">Login User</UButton>
    </nav>
    <div>TOTP</div>
    <div v-if="totp" class="flex flex-col items-center gap-2">
      <div>{{ totp.secret }}</div>
      <img :src="totp.qrcodeUrl" alt="qrcode" class="w-50" />
    </div>
    <div class="space-x-4">
      <UButton
        class="mt-4"
        :disabled="isLoadingGenerateTotp"
        :loading="isLoadingGenerateTotp"
        @click="generateTotpSecret"
      >
        Generate TOTP secret
      </UButton>
      <UButton class="mt-4" :disabled="isLoadingEnable" :loading="isLoadingEnable" @click="enableTotp">
        Enable TOTP
      </UButton>
      <UButton class="mt-4" :disabled="isLoadingDisable" :loading="isLoadingDisable" @click="disableTotp">
        Disable TOTP
      </UButton>
    </div>
  </div>
</template>
