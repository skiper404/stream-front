import z from "zod"
import { passwordField } from "./base/password.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const resetPasswordSchema = (t: Translate) =>
  z
    .object({
      password: passwordField(t),
      passwordRepeat: passwordField(t)
    })
    .refine(data => data.password === data.passwordRepeat, {
      message: t("validation.passwords_not_match"),
      path: ["passwordRepeat"]
    })

export type ResetPasswordSchema = z.output<ReturnType<typeof resetPasswordSchema>>
