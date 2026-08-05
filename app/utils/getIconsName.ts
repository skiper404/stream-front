import { socialIcons } from "~/constants/social-link-icons"

export const getIconName = (url: string) => {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "")

    const domain = Object.keys(socialIcons).find(domain => hostname === domain || hostname.endsWith(`.${domain}`))

    return domain ? socialIcons[domain]! : "lucide:link"
  } catch {
    return "lucide:link"
  }
}
