import z from "zod"
import { usernameField } from "./base/username.schema"
import { emailField } from "./base/email.schema"
import { passwordField } from "./base/password.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const createUserSchema = (t: Translate) =>
  z
    .object({
      username: usernameField(t),
      email: emailField(t),
      password: passwordField(t),
      repeatPassword: passwordField(t)
    })
    .refine(data => data.password === data.repeatPassword, {
      message: t("validation.passwords_not_match"),
      path: ["repeatPassword"]
    })

export type CreateUserSchema = z.output<ReturnType<typeof createUserSchema>>
