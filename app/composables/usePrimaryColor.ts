export const usePrimaryColor = () => {
  const appConfig = useAppConfig()
  const cookie = useCookie<string>("primary-color", {
    default: () => appConfig.ui.colors.primary,
    maxAge: 60 * 60 * 24 * 365
  })

  appConfig.ui.colors.primary = cookie.value

  const setPrimaryColor = (color: string) => {
    cookie.value = color
    appConfig.ui.colors.primary = color
  }

  return {
    primaryColor: cookie,
    setPrimaryColor
  }
}
