<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui"
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const toast = useToast()
const { t, locale } = useI18n()
const userStore = useUserStore()
const { findSponsorsByChannel, makePayment } = useSponsorship()

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const { data: sponsors } = useAsyncData(`${props.channel.id}-sponsors`, () => findSponsorsByChannel(props.channel.id), {
  default: () => []
})

const selectedPlan = ref(props.channel.sponsorshipPlans[0]?.id)
const isSponsor = computed(() => sponsors.value.some(sponsor => sponsor.user.id === userStore.user?.id))
const isOwnerChannel = computed(() => userStore.user?.id === props.channel.id)
const isLoading = ref(false)

const items = computed<TabsItem[]>(() =>
  props.channel.sponsorshipPlans.map(plan => ({
    label: plan.title,
    value: plan.id,
    slot: plan.id
  }))
)

const makePaymentHandler = async (planId: string) => {
  try {
    isLoading.value = true
    const data = await makePayment(planId)
    window.location.href = data?.url!
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UButton v-if="isSponsor" :label="t('sponsorship.already_sponsor')" class="cursor-default" size="xs" />
  <UModal v-if="userStore.user" :title="t('sponsorship.title')">
    <UButton icon="lucide:medal" variant="subtle" :label="String(sponsors.length)" class="cursor-pointer" size="xs" />
    <template #body>
      <UTabs
        v-if="channel.sponsorshipPlans.length"
        :items="items"
        size="xs"
        variant="link"
        :ui="{
          root: 'space-y-2',
          trigger: 'md:flex-row flex-col cursor-pointer',
          label: 'text-[10px] md:text-xs'
        }"
        :default-value="selectedPlan"
      >
        <template v-for="plan in channel.sponsorshipPlans" :key="plan.id" #[plan.id]>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">
              {{
                t("sponsorship.support_price", {
                  price: Intl.NumberFormat(locale, {
                    style: "currency",
                    currency: "USD"
                  }).format(plan.price)
                })
              }}
            </h3>

            <p v-if="plan.description" class="text-muted">
              {{ plan.description }}
            </p>
            <UButton
              block
              :label="t('sponsorship.select_plan')"
              @click="makePaymentHandler(plan.id)"
              class="cursor-pointer"
              :loading="isLoading"
              :disabled="isOwnerChannel"
            />
          </div>
        </template>
      </UTabs>

      <div v-else class="text-muted flex flex-col items-center gap-4 text-center">
        <Icon name="lucide:medal" size="30" class="text-primary" />
        <p>
          {{
            t("sponsorship.no_plans.title", {
              username: channel.username
            })
          }}
        </p>

        <p class="text-muted">
          {{ t("sponsorship.no_plans.description") }}
        </p>
      </div>
    </template>
  </UModal>

  <UButton
    v-else-if="!userStore.user"
    to="/account/login-user"
    icon="lucide:medal"
    size="xs"
    :label="t('sponsorship.become_sponsor')"
    class="cursor-pointer"
  />
</template>
