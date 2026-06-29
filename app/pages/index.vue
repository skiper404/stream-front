<script setup lang="ts">
definePageMeta({ middleware: "auth" })

const toast = useToast()

const userStore = useUserStore()
const sessionStore = useSessionStore()
const socialLinksStore = useSocialLinksStore()
const streamsStore = useStreamsStore()
const ingressesStore = useIngressesStore()
const roomsStore = useRoomsStore()
const totpStore = useTotpStore()
const authStore = useAuthStore()
const categoryStore = useCategoryStore()
const chatStore = useChatStore()

await userStore.getUser()

// await sessionStore.getSessions()

// await socialLinksStore.getSocialLinks()
// await streamsStore.getStreams()
// await ingressesStore.getIngresses()
// await chatStore.getMessages()
// await categoryStore.findAllCategories()
// await categoryStore.findRandomCategories()

const avatar = ref<File | null | undefined>(null)
const newEmail = ref("")
const oldPassword = ref("")
const newPassword = ref("")
const bio = ref("")
const newMessage = ref("")

const newLink = reactive<{ title: string; url: string }>({ title: "", url: "" })

const isLoadingGenerateTotp = ref(false)
const isLoadingEnable = ref(false)
const isLoadingDisable = ref(false)
const changeEmailLoading = ref(false)
const changePasswordLoading = ref(false)
const changeAvatarLoading = ref(false)
const removeAvatarLoading = ref(false)
const changeBioLoading = ref(false)
const createLinkLoading = ref(false)
const deleteLinkLoading = ref(false)
const generateStreamTokenLooading = ref(false)
const createIngressLooading = ref(false)
const removeIngressesLooading = ref(false)
const messageLoading = ref(false)

const storageUrl = "https://pub-3670e8a86b03411ba52b9650f04d22de.r2.dev"

const logout = async () => {
  try {
    await authStore.logout()
    await navigateTo("/auth/login-user")
    toast.add({ title: "Logout" })
  } catch (e: any) {
    toast.add({ title: e.message })
  }
}

const clearSessionCookie = async () => {
  try {
    await sessionStore.clearSessionCookie()
  } catch (e: any) {
    toast.add({ title: e.message })
  }
}

const removeSession = async () => {
  try {
    await sessionStore.removeSession("vkxCZK8PyNWzE-k3yhyi1_cEtZM-N5Ku")
  } catch (e: any) {
    toast.add({ title: e.message })
  }
}

const generateTotpSecret = async () => {
  try {
    isLoadingGenerateTotp.value = true
    await totpStore.generateTotpSecret()
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
    await totpStore.enableTotp("123456", "XTUMDKOXJZCLYR7OJWFSABJKTCW6S5P3")
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
    await totpStore.disableTotp()
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
    await userStore.changeEmail(newEmail.value)
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
    await userStore.changePassword(newPassword.value, oldPassword.value)
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
    if (!avatar.value) {
      toast.add({ title: "Select file first" })
      return
    }

    changeAvatarLoading.value = true
    await userStore.changeAvatar(avatar.value)
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
    await userStore.removeAvatar()
    toast.add({ title: "Avatar removed!" })
  } catch (e: any) {
    removeAvatarLoading.value = false
    toast.add({ title: e.message })
  } finally {
    removeAvatarLoading.value = false
  }
}

const changeBio = async () => {
  try {
    changeBioLoading.value = true
    await userStore.changeBio(bio.value)
    toast.add({ title: "Bio Updated" })
  } catch (e: any) {
    toast.add({ title: e.message })
    changeBioLoading.value = false
  } finally {
    changeBioLoading.value = false
  }
}

const createLink = async () => {
  try {
    createLinkLoading.value = true
    await socialLinksStore.createLink(newLink.title, newLink.url)
    toast.add({ title: "Link Created" })
  } catch (e: any) {
    createLinkLoading.value = false
    toast.add({ title: e.message })
  } finally {
    createLinkLoading.value = false
  }
}

const deleteLink = async (id: string) => {
  try {
    deleteLinkLoading.value = true
    await socialLinksStore.deleteLink(id)
    toast.add({ title: "Link Deleted" })
  } catch (e: any) {
    deleteLinkLoading.value = false
    toast.add({ title: e.message })
  } finally {
    deleteLinkLoading.value = false
  }
}

const generateStreamToken = async () => {
  try {
    generateStreamTokenLooading.value = true
    await streamsStore.generateStreamToken()
    toast.add({ title: "Token generated" })
  } catch (e: any) {
    generateStreamTokenLooading.value = false
    toast.add({ title: e.message })
  } finally {
    generateStreamTokenLooading.value = false
  }
}

const createIngress = async () => {
  try {
    createIngressLooading.value = true
    await ingressesStore.createIngress()
    toast.add({ title: "Ingress created" })
  } catch (e: any) {
    createIngressLooading.value = false
    toast.add({ title: e.message })
  } finally {
    createIngressLooading.value = false
  }
}

const removeIngresses = async () => {
  try {
    removeIngressesLooading.value = true
    await ingressesStore.removeIngresses()
    toast.add({ title: "Ingresses removed" })
  } catch (e: any) {
    removeIngressesLooading.value = false
    toast.add({ title: e.message })
  } finally {
    removeIngressesLooading.value = false
  }
}

const sendMessage = async () => {
  try {
    messageLoading.value = true
    await chatStore.sendMessage(newMessage.value, "")
    toast.add({ title: "Message sent" })
  } catch (e: any) {
    messageLoading.value = false
    toast.add({ title: e.message })
  } finally {
    messageLoading.value = false
  }
}
</script>

<template>
  <div class="flex h-full flex-col items-center gap-1 border">
    <div class="my-10">Home</div>
    <div>Session: {{ sessionStore.session }}</div>
    <div>
      Sessions:
      <div v-for="session in sessionStore.sessions">
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
    <div class="text-green-500">User: {{ userStore.user }}</div>
    <div class="text-orange-400">socialLinks: {{ socialLinksStore.socialLinks }}</div>

    <div>
      Categories:
      <div v-for="category in categoryStore.categories">
        <hr />
        <div>Title: {{ category.title }}</div>
        <div>Description: {{ category.description }}</div>
        <div>
          Thumbnail: {{ category.thumbnailUrl }}
          <img class="size-20" :src="storageUrl + category.thumbnailUrl" :alt="category.title" />
        </div>
        <div>slug: {{ category.slug }}</div>
      </div>
    </div>
    <hr class="h-20" />
    <div>
      <div class="bg-red-500">Random Categories:</div>
      <div v-for="category in categoryStore.randomCategories">
        <hr />
        <div>Title: {{ category.title }}</div>
        <div>Description: {{ category.description }}</div>
        <div>
          Thumbnail: {{ category.thumbnailUrl }}
          <img class="size-20" :src="storageUrl + category.thumbnailUrl" :alt="category.title" />
        </div>
        <div>slug: {{ category.slug }}</div>
      </div>
    </div>
    <div>AllMessages: {{ chatStore.messages }}</div>
    <div>
      <UInput placeholder="message" v-model="newMessage" />
      <UButton @click="sendMessage" label="Send" />
    </div>
    <div class="text-blue-500">
      Streams:
      <div v-for="stream in streamsStore.streams">
        <div class="text-red-500">
          stream:
          <div>id:{{ stream.id }}</div>
          <div class="text-orange-400">title:{{ stream.title }}</div>
          <div>isLive: {{ stream.isLive }}</div>
          <div>serverUrl: {{ stream.serverUrl }}</div>
          <div>
            thumbnailUrl:
            {{ stream.thumbnailUrl }}
            <img :src="stream.thumbnailUrl!" alt="thumbnail" />
          </div>
          <div class="text-blue-300">
            USER
            <div>{{ stream.user.avatar }}</div>
            <div>{{ stream.user.username }}</div>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="text-[10px] text-yellow-300">Stream TOKEN: {{ streamsStore.streamToken }}</div>
    <pre class="text-red-400">Ingresses: {{ ingressesStore.ingresses }}</pre>
    <pre class="text-red-400">Rooms: {{ roomsStore.rooms }}</pre>

    <input type="file" @change="onFileChange" />

    <button :disabled="changeAvatarLoading" @click="changeAvatar">Upload</button>

    <UButton
      :disabled="removeAvatarLoading"
      :loading="removeAvatarLoading"
      @click="removeAvatar"
      label="Remove Avatar"
    />
    <div class="my-4 flex gap-2 space-x-4">
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
      <UInput v-model="bio" placeholder="newBio" />
      <UButton :disabled="changeBioLoading" :loading="changeBioLoading" @click="changeBio" label="changeBio" />
    </div>

    <div class="flex w-200 flex-col items-center space-y-2 border">
      <div v-for="link in socialLinksStore.socialLinks" class="flex items-center gap-4">
        <div>{{ link.title }}</div>
        <div>{{ link.url }}</div>
        <UButton
          @click="deleteLink(link.id)"
          :disabled="deleteLinkLoading"
          :loading="deleteLinkLoading"
          label="delete"
          variant="outline"
        />
      </div>

      <div class="space-x-2">
        <UInput v-model="newLink.title" placeholder="title" />
        <UInput v-model="newLink.url" placeholder="url" />
        <UButton label="Create Link" @click="createLink" />
      </div>
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
    <div class="flex flex-col items-center gap-2">
      <div>{{ totpStore.totp?.secret }}</div>
      <img :src="totpStore.totp?.qrcodeUrl" alt="qrcode" class="w-50" />
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

    <div class="space-x-1">
      <UButton
        @click="generateStreamToken"
        :disabled="generateStreamTokenLooading"
        :loading="generateStreamTokenLooading"
      >
        Generate Stream Token
      </UButton>
      <UButton @click="createIngress" :disabled="createIngressLooading" :loading="createIngressLooading">
        Create Ingress
      </UButton>
      <UButton @click="removeIngresses" :disabled="removeIngressesLooading" :loading="removeIngressesLooading">
        Remove Ingresses
      </UButton>
    </div>
  </div>
</template>
