import z from "zod"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const usernameField = (t: Translate) =>
  z
    .string()
    .trim()
    .min(1, t("validation.required"))
    .max(50, t("validation.max_length", { max: 50 }))
