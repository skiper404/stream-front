import type { NavigationMenuItem } from "@nuxt/ui"

export const useNavigations = () => {
  const route = useRoute()
  const { t } = useI18n()
  const localePath = useLocalePath()

  const userItems = computed<NavigationMenuItem[]>(() => [
    {
      label: t("navigation.home"),
      icon: "lucide:house",
      to: localePath("/")
    },
    {
      label: t("navigation.categories"),
      icon: "lucide:folder",
      to: localePath("/categories")
    },
    {
      label: t("navigation.streams"),
      icon: "heroicons:signal-16-solid",
      to: localePath("/streams")
    }
  ])

  const dashboardItems = computed<NavigationMenuItem[]>(() => [
    {
      label: t("navigation.settings"),
      icon: "lucide:cog",
      to: localePath("/dashboard/settings")
    },
    {
      label: t("navigation.stream_keys"),
      icon: "lucide:key-round",
      to: localePath("/dashboard/keys")
    },
    {
      label: t("navigation.chat_settings"),
      icon: "lucide:message-square",
      to: localePath("/dashboard/chat")
    },
    {
      label: t("navigation.followers"),
      icon: "i-lucide-users",
      to: localePath("/dashboard/followers")
    },
    {
      label: t("navigation.sponsors"),
      icon: "lucide:medal",
      to: localePath("/dashboard/sponsors")
    },
    {
      label: t("navigation.premium_plans"),
      icon: "lucide:circle-dollar-sign",
      to: localePath("/dashboard/plans")
    },
    {
      label: t("navigation.transactions"),
      icon: "lucide:credit-card",
      to: localePath("/dashboard/transactions")
    }
  ])

  const isDashboard = computed(() => route.name.startsWith("dashboard"))

  const items = computed(() => (isDashboard.value ? dashboardItems.value : userItems.value))

  return {
    items,
    isDashboard
  }
}
