import z from "zod"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const passwordField = (t: Translate) =>
  z
    .string()
    .trim()
    .min(8, t("validation.min_length", { min: 8 }))
    .max(50, t("validation.max_length", { max: 50 }))
