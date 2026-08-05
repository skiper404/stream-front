import z from "zod"
import { passwordField } from "./base/password.schema"
import { loginField } from "./base/login.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const loginUserSchema = (t: Translate) =>
  z.object({
    login: loginField(t),
    password: passwordField(t)
  })

export type LoginUserSchema = z.output<ReturnType<typeof loginUserSchema>>
