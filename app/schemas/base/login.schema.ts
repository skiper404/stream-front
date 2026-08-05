import z from "zod"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const loginField = (t: Translate) =>
  z
    .string()
    .trim()
    .min(1, t("validation.login_required"))
    .max(50, t("validation.max_length", { max: 50 }))
