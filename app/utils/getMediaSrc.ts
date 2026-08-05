export const getMediaSrc = (value: string) => {
  const config = useRuntimeConfig()

  return config.public.r2MediaUrl + "/" + value
}
