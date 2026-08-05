import z from "zod"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const emailField = (t: Translate) =>
  z.email(t("validation.email")).max(50, t("validation.max_length", { max: 50 }))
