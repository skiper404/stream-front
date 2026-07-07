<script setup lang="ts">
import { FindChannelByUsernameDocument } from "~/graphql/generated/graphql"
import { useNotificationsStore } from "~/stores/notifications"
import { parseGraphQLError } from "~/utils/parseGraphQLError"

definePageMeta({ middleware: "auth" })

const toast = useToast()
const { $apollo } = useNuxtApp()
const route = useRoute("dashboard-settings")

// const { data: channel, error } = await useAsyncData(async () => {
//   try {
//     const { data } = await $apollo.query({
//       query: FindChannelByUsernameDocument,
//       variables: { username: route.params.username },
//       fetchPolicy: "network-only"
//     })
//     return data?.findChannelByUsername
//   } catch (e) {
//     const graphQLError = parseGraphQLError(e)

//     throw createError({ status: graphQLError.status, message: graphQLError.message })
//   }
// })

// if (error.value) {
//   throw error.value
// }

const sessionStore = useSessionStore()
const authStore = useAuthStore()
const userStore = useUserStore()
const notificationsStore = useNotificationsStore()

// const socialLinksStore = useSocialLinksStore()
// const streamsStore = useStreamsStore()
// const ingressesStore = useIngressesStore()
// const roomsStore = useRoomsStore()
// const totpStore = useTotpStore()
// const categoryStore = useCategoryStore()
// const followStore = useFollowStore()

// onMounted(async () => {
//   await ingressesStore.getIngresses()
//   await socialLinksStore.getSocialLinks()
//   await streamsStore.getStreams()
//   await followStore.findMyFollowers()
//   await followStore.findMyFollowings()
//   await channelStore.findRecommendedChannels()
//   await channelStore.findChannelsByUsername(userStore.user?.username!)
//   await channelStore.findFollowersCountByChannel(userStore.user?.id!)
// })

// await sessionStore.getSessions()
// await categoryStore.findAllCategories()
// await categoryStore.findRandomCategories()

// const avatar = ref<File | null | undefined>(null)
// const newEmail = ref("")
// const oldPassword = ref("")
// const newPassword = ref("")
// const bio = ref("")

// const newLink = reactive<{ title: string; url: string }>({ title: "", url: "" })

// const isLoadingGenerateTotp = ref(false)
// const isLoadingEnable = ref(false)
// const isLoadingDisable = ref(false)
// const changeEmailLoading = ref(false)
// const changePasswordLoading = ref(false)
// const changeAvatarLoading = ref(false)
// const removeAvatarLoading = ref(false)
// const changeBioLoading = ref(false)
// const createLinkLoading = ref(false)
// const deleteLinkLoading = ref(false)
// const generateStreamTokenLooading = ref(false)
// const createIngressLooading = ref(false)
// const removeIngressesLooading = ref(false)

// const storageUrl = "https://pub-3670e8a86b03411ba52b9650f04d22de.r2.dev"

// const clearSessionCookie = async () => {
//   try {
//     await sessionStore.clearSessionCookie()
//   } catch (e: any) {
//     toast.add({ title: e.message })
//   }
// }

// const removeSession = async () => {
//   try {
//     await sessionStore.removeSession("vkxCZK8PyNWzE-k3yhyi1_cEtZM-N5Ku")
//   } catch (e: any) {
//     toast.add({ title: e.message })
//   }
// }

// const generateTotpSecret = async () => {
//   try {
//     isLoadingGenerateTotp.value = true
//     await totpStore.generateTotpSecret()
//     toast.add({ title: "TotpSecret Generated!" })
//   } catch (e: any) {
//     isLoadingGenerateTotp.value = false
//     toast.add({ title: e.message })
//   } finally {
//     isLoadingGenerateTotp.value = false
//   }
// }

// const enableTotp = async () => {
//   try {
//     isLoadingEnable.value = true
//     await totpStore.enableTotp("123456", "XTUMDKOXJZCLYR7OJWFSABJKTCW6S5P3")
//     toast.add({ title: "Totp Enabled!" })
//   } catch (e: any) {
//     isLoadingEnable.value = false
//     toast.add({ title: e.message })
//   } finally {
//     isLoadingEnable.value = false
//   }
// }

// const disableTotp = async () => {
//   try {
//     isLoadingDisable.value = true
//     await totpStore.disableTotp()
//     toast.add({ title: "Totp Disabled!" })
//   } catch (e: any) {
//     isLoadingDisable.value = false
//     toast.add({ title: e.message })
//   } finally {
//     isLoadingDisable.value = false
//   }
// }

// const changeEmail = async () => {
//   try {
//     changeEmailLoading.value = true
//     await userStore.changeEmail(newEmail.value)
//     toast.add({ title: "Email changed!" })
//   } catch (e: any) {
//     changeEmailLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     changeEmailLoading.value = false
//   }
// }

// const changePassword = async () => {
//   try {
//     changePasswordLoading.value = true
//     await userStore.changePassword(newPassword.value, oldPassword.value)
//     toast.add({ title: "Password changed!" })
//   } catch (e: any) {
//     changePasswordLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     changePasswordLoading.value = false
//   }
// }

// const onFileChange = (event: Event) => {
//   const target = event.target as HTMLInputElement

//   if (!target.files?.length) return

//   avatar.value = target.files[0]
// }

// const changeAvatar = async () => {
//   try {
//     if (!avatar.value) {
//       toast.add({ title: "Select file first" })
//       return
//     }

//     changeAvatarLoading.value = true
//     await userStore.changeAvatar(avatar.value)
//     toast.add({ title: "Avatar changed!" })
//   } catch (e: any) {
//     changeAvatarLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     changeAvatarLoading.value = false
//   }
// }

// const removeAvatar = async () => {
//   try {
//     removeAvatarLoading.value = true
//     await userStore.removeAvatar()
//     toast.add({ title: "Avatar removed!" })
//   } catch (e: any) {
//     removeAvatarLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     removeAvatarLoading.value = false
//   }
// }

// const changeBio = async () => {
//   try {
//     changeBioLoading.value = true
//     await userStore.changeBio(bio.value)
//     toast.add({ title: "Bio Updated" })
//   } catch (e: any) {
//     toast.add({ title: e.message })
//     changeBioLoading.value = false
//   } finally {
//     changeBioLoading.value = false
//   }
// }

// const createLink = async () => {
//   try {
//     createLinkLoading.value = true
//     await socialLinksStore.createLink(newLink.title, newLink.url)
//     toast.add({ title: "Link Created" })
//   } catch (e: any) {
//     createLinkLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     createLinkLoading.value = false
//   }
// }

// const deleteLink = async (id: string) => {
//   try {
//     deleteLinkLoading.value = true
//     await socialLinksStore.deleteLink(id)
//     toast.add({ title: "Link Deleted" })
//   } catch (e: any) {
//     deleteLinkLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     deleteLinkLoading.value = false
//   }
// }

// const generateStreamToken = async () => {
//   try {
//     generateStreamTokenLooading.value = true
//     await streamsStore.generateStreamToken()
//     toast.add({ title: "Token generated" })
//   } catch (e: any) {
//     generateStreamTokenLooading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     generateStreamTokenLooading.value = false
//   }
// }

// const createIngress = async () => {
//   try {
//     createIngressLooading.value = true
//     await ingressesStore.createIngress()
//     toast.add({ title: "Ingress created" })
//   } catch (e: any) {
//     createIngressLooading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     createIngressLooading.value = false
//   }
// }

// const removeIngresses = async () => {
//   try {
//     removeIngressesLooading.value = true
//     await ingressesStore.removeIngresses()
//     toast.add({ title: "Ingresses removed" })
//   } catch (e: any) {
//     removeIngressesLooading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     removeIngressesLooading.value = false
//   }
// }

// const channelId = ref("")
// const followLoading = ref(false)

// const follow = async () => {
//   try {
//     followLoading.value = true
//     await followStore.follow(channelId.value)
//     toast.add({ title: `Followed at ${channelId.value} !` })
//   } catch (e: any) {
//     followLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     followLoading.value = false
//   }
// }

// const unfollow = async () => {
//   try {
//     followLoading.value = true
//     await followStore.unfollow(channelId.value)
//     toast.add({ title: `Unfollow from ${channelId.value} !` })
//   } catch (e: any) {
//     followLoading.value = false
//     toast.add({ title: e.message })
//   } finally {
//     followLoading.value = false
//   }
// }

const { setLocale, t } = useI18n()
</script>

<template>
  <UContainer>
    <div class="">
      <!-- <div class="my-10">{{ t("welcome") }}, {{ 1 }}</div>
      <UButton label="EN" @click="setLocale('en')" />
      <UButton label="RU" @click="setLocale('ru')" /> -->
      <!-- <pre>RecommendedChannels: {{ channelStore.recommendedChannels }}</pre>
    <pre>ChannelByUsername: {{ channelStore.channelByUsername }}</pre>
    <pre>FollowersCount: {{ channelStore.followersCountByChannel }}</pre> -->

      <!-- <pre>Followers: {{ followStore.followers }}</pre>
    <pre>Followings: {{ followStore.followings }}</pre>
    <div class="flex gap-2">
      <UInput v-model="channelId" />
      <UButton :disabled="followLoading" :loading="followLoading" @click="follow" label="Follow" />
      <UButton :disabled="followLoading" :loading="followLoading" @click="unfollow" label="Unfollow" />
    </div> -->

      <!-- <div>Session: {{ sessionStore.session }}</div> -->
      <!-- <div>
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
    </div> -->
      <!-- <div class="text-green-500">User: {{ userStore.user }}</div>
    <div class="text-orange-400">socialLinks: {{ socialLinksStore.socialLinks }}</div> -->

      <!-- <div>
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
    </div> -->
      <!-- <div>
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
    </div> -->
      <!-- <div class="text-blue-500">
      Streams:
      <div v-for="stream in streamsStore.streams">
        <div class="text-red-500">
          stream: {{ stream }}
          <div>id: {{ stream.id }}</div>
          <div class="text-orange-400">title: {{ stream.title }}</div>
          <div>isLive : {{ stream.isLive }}</div>
          <div>serverUrl : {{ stream.serverUrl }}</div>
          <div>
            thumbnailUrl :
            {{ stream.thumbnailUrl ?? "нет обложки" }}
            <img v-if="stream.thumbnailUrl" :src="stream.thumbnailUrl!" alt="thumbnail" />
          </div>
          <div class="text-blue-300">
            USER
            <div>user.avatar: {{ stream.user.avatar ?? "нет аватара" }}</div>
            <div>user.username: {{ stream.user.username }}</div>
          </div>
        </div>
        <hr />
      </div>
    </div> -->
      <!-- <div class="text-[10px] text-yellow-300">Stream TOKEN: {{ streamsStore.streamToken }}</div>
    <pre class="text-red-400">Created Ingess: {{ ingressesStore.ingress }}</pre>
    <pre class="text-red-400">Ingresses: {{ ingressesStore.ingresses }}</pre>
    <pre class="text-red-400">Rooms: {{ roomsStore.rooms }}</pre> -->

      <!-- <input type="file" @change="onFileChange" />

    <button :disabled="changeAvatarLoading" @click="changeAvatar">Upload</button> -->

      <!-- <UButton
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
    </div> -->

      <!-- <div class="flex w-200 flex-col items-center space-y-2 border">
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
    </div> -->

      <!-- <UButton @click="createVerification" label="Create Verification" />
        <UButton @click="createStreamStart" label="Create Stream Start" /> -->
      <!-- <UButton @click="clearSessionCookie" label="Clear Session Cookie" />
        <UButton @click="removeSession" label="Remove Session" /> -->

      <!-- <nav class="flex gap-8">
      <UButton to="/auth/create-user" variant="subtle">Create User</UButton>
      <UButton to="/auth/login-user" variant="soft">Login User</UButton>
    </nav> -->

      <!-- <div>TOTP</div>
    <div class="flex flex-col items-center gap-2">
      <div>{{ totpStore.totp?.secret }}</div>
      <img :src="totpStore.totp?.qrcodeUrl" alt="qrcode" class="w-50" />
    </div> -->

      <!-- <div class="space-x-4">
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
    </div> -->

      <!-- <div class="space-x-1">
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
    </div> -->

      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, magni quod, eligendi doloremque ad eaque
        quaerat ipsam facere temporibus ipsa dolorem. Nam nesciunt alias optio eligendi mollitia velit neque atque
        nulla, perferendis laboriosam et magni amet, quibusdam soluta error fuga inventore voluptates omnis dolorum
        possimus. Laboriosam fugiat vel dolores qui a, recusandae, impedit, laudantium eligendi officia repellat quis
        repudiandae tempora perferendis voluptate assumenda animi tempore dolor molestias dolorum velit harum? Eius
        perferendis optio rem! Eos neque eius animi, qui nulla aliquid ex sint natus voluptates praesentium ullam
        officia maxime iure explicabo distinctio magnam possimus! Tenetur perspiciatis laboriosam commodi? Qui provident
        voluptas neque delectus obcaecati quo dolor, odio harum hic. Harum, doloribus perspiciatis quibusdam alias
        libero pariatur, corrupti obcaecati dolorem, quaerat vitae necessitatibus quae praesentium? Beatae illum
        mollitia, facilis non nihil fugit voluptate, laudantium porro voluptatum harum quisquam magni ab possimus,
        necessitatibus soluta nam perferendis deleniti in asperiores sapiente culpa? Nisi perferendis voluptate eum in
        corrupti veritatis. Aperiam reiciendis obcaecati, facilis alias corrupti perspiciatis sint quam placeat
        praesentium laborum quasi aliquam totam pariatur quas minima qui fuga esse quo iste cupiditate? Quibusdam, eius
        commodi. Accusantium debitis expedita enim temporibus alias accusamus sapiente error omnis facilis, earum odit
        aliquam praesentium? Iusto corporis porro tempora reiciendis, amet autem voluptate, nam totam rem unde
        accusamus? Illo veritatis repellat fugiat deleniti ullam maiores aperiam aspernatur commodi illum dignissimos,
        ea eaque, dolore in voluptatum totam! Incidunt ad ut voluptatem deserunt quaerat laudantium voluptatibus neque
        aliquam. Facilis perferendis sequi maiores beatae, modi quod repellendus nemo assumenda incidunt laborum,
        aliquam voluptatem error a deleniti voluptate explicabo recusandae tempora? Tempore deleniti facere reiciendis
        error aut vitae corrupti laudantium. Dolore assumenda fuga eligendi ex aliquam perspiciatis corporis itaque,
        consequuntur totam culpa? Quos sint laudantium optio atque totam ea necessitatibus exercitationem. Velit,
        veritatis laboriosam vitae reiciendis omnis eius fuga consequatur soluta illo vel dolores quaerat doloribus,
        delectus aut, repellat deserunt! Possimus reiciendis aut tempora perspiciatis distinctio aspernatur excepturi
        est ducimus, quia doloremque impedit sed consequatur tempore maiores consequuntur rerum iusto magni molestias.
        Corporis asperiores quaerat commodi ipsa ipsam veritatis, voluptatum officiis quis praesentium ipsum est eum
        Tenetur perspiciatis laboriosam commodi? Qui provident voluptas neque delectus obcaecati quo dolor, odio harum
        hic. Harum, doloribus perspiciatis quibusdam alias libero pariatur, corrupti obcaecati dolorem, quaerat vitae
        necessitatibus quae praesentium? Beatae illum mollitia, facilis non nihil fugit voluptate, laudantium porro
        voluptatum harum quisquam magni ab possimus, necessitatibus soluta nam perferendis deleniti in asperiores
        sapiente culpa? Nisi perferendis voluptate eum in corrupti veritatis. Aperiam reiciendis obcaecati, facilis
        alias corrupti perspiciatis sint quam placeat praesentium laborum quasi aliquam totam pariatur quas minima qui
        fuga esse quo iste cupiditate? Quibusdam, eius commodi. Accusantium debitis expedita enim temporibus alias
        accusamus sapiente error omnis facilis, earum odit aliquam praesentium? Iusto corporis porro tempora reiciendis,
        amet autem voluptate, nam totam rem unde accusamus? Illo veritatis repellat fugiat deleniti ullam maiores
        aperiam aspernatur commodi illum dignissimos, ea eaque, dolore in voluptatum totam! Incidunt ad ut voluptatem
        deserunt quaerat laudantium voluptatibus neque aliquam. Facilis perferendis sequi maiores beatae, modi quod
        repellendus nemo assumenda incidunt laborum, aliquam voluptatem error a deleniti voluptate explicabo recusandae
        tempora? Tempore deleniti facere reiciendis error aut vitae corrupti laudantium. Dolore assumenda fuga eligendi
        ex aliquam perspiciatis corporis itaque, consequuntur totam culpa? Quos sint laudantium optio atque totam ea
        necessitatibus exercitationem. Velit, veritatis laboriosam vitae reiciendis omnis eius fuga consequatur soluta
        illo vel dolores quaerat doloribus, delectus aut, repellat deserunt! Possimus reiciend
      </div>
    </div>
  </UContainer>
</template>
