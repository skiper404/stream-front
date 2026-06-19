<script setup lang="ts">
const toast = useToast()

const { data: userData, pending, refresh } = useAsyncGql("GetMe")
const { data: sessionData } = useAsyncGql("GetCurrentSession")
const { data: sessionsData } = useAsyncGql("GetUserSessions")

const user = computed(() => userData.value?.getMe ?? null)
const session = computed(() => sessionData.value?.getCurrentSession ?? null)
const sessions = computed(() => sessionsData.value?.getUserSessions ?? [])

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
    await GqlLogoutUser()
    await navigateTo("/auth/login-user")
  } catch (err) {
    console.log(err)
  }
}

const clearSessionCookie = async () => {
  try {
    await GqlClearSessionCookie()
  } catch (e) {
    console.log(e)
  }
}

const removeSession = async () => {
  try {
    await GqlRemoveSession({ id: "vkxCZK8PyNWzE-k3yhyi1_cEtZM-N5Ku" })
  } catch (e) {
    console.log(e)
  }
}

const generateTotpSecret = async () => {
  try {
    isLoadingGenerateTotp.value = true
    const totpData = await GqlGenerateTotpSecret()

    totp.value = totpData.generateTotpSecret

    toast.add({ title: "TotpSecret Generated!" })
  } catch (e: any) {
    isLoadingGenerateTotp.value = false
    toast.add({ title: e.gqlErrors[0].message })
  } finally {
    isLoadingGenerateTotp.value = false
  }
}

const enableTotp = async () => {
  try {
    isLoadingEnable.value = true
    await GqlEnableTotp({ data: { pin: "826630", secret: "XTUMDKOXJZCLYR7OJWFSABJKTCW6S5P3" } })

    toast.add({ title: "Totp Enabled!" })
  } catch (e: any) {
    isLoadingEnable.value = false
    toast.add({ title: e.gqlErrors[0].message })
  } finally {
    isLoadingEnable.value = false
  }
}

const disableTotp = async () => {
  try {
    isLoadingDisable.value = true
    await GqlDisableTotp()

    toast.add({ title: "Totp Disabled!" })
  } catch (e: any) {
    isLoadingDisable.value = false
    toast.add({ title: e.gqlErrors[0].message })
  } finally {
    isLoadingDisable.value = false
  }
}

const changeEmail = async () => {
  try {
    changeEmailLoading.value = true
    await GqlChangeEmail({ data: { email: newEmail.value } })

    toast.add({ title: "Email changed!" })
  } catch (e: any) {
    changeEmailLoading.value = false
    toast.add({ title: e.gqlErrors[0].message })
  } finally {
    changeEmailLoading.value = false
  }
}

const changePassword = async () => {
  try {
    changePasswordLoading.value = true
    await GqlChangePassword({ data: { newPassword: newPassword.value, oldPassword: oldPassword.value } })

    toast.add({ title: "Password changed!" })
  } catch (e: any) {
    changePasswordLoading.value = false
    toast.add({ title: e.gqlErrors[0].message })
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
    await GqlChangeProfileAvatar({ avatar: avatar.value })

    toast.add({ title: "Avatar changed!" })
  } catch (e: any) {
    changeAvatarLoading.value = false
    toast.add({ title: e.gqlErrors[0].message })
  } finally {
    changeAvatarLoading.value = false
  }
}

const removeAvatar = async () => {
  try {
    removeAvatarLoading.value = true
    await GqlRemoveProfileAvatar()

    toast.add({ title: "Avatar removed!" })
  } catch (e: any) {
    removeAvatarLoading.value = false
    toast.add({ title: e.gqlErrors[0].message })
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
      <UButton :disabled="pending" :loading="pending" @click="() => refresh()" label="Refresh" />
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
