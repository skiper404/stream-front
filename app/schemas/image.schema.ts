import * as z from "zod"
import { ACCEPTED_IMAGE_TYPES, MAX_DIMENSIONS, MAX_FILE_SIZE, MIN_DIMENSIONS } from "~/constants/constants"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const imageSchema = (t: Translate) =>
  z.object({
    image: z
      .instanceof(File, {
        message: t("validation.image_required")
      })
      .refine(file => file.size <= MAX_FILE_SIZE, {
        message: t("validation.file_too_large")
      })
      .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: t("validation.unsupported_image_format")
      })
      .refine(
        file =>
          new Promise(resolve => {
            const reader = new FileReader()
            reader.onload = e => {
              const img = new Image()
              img.onload = () => {
                const meetsDimensions =
                  img.width >= MIN_DIMENSIONS.width &&
                  img.height >= MIN_DIMENSIONS.height &&
                  img.width <= MAX_DIMENSIONS.width &&
                  img.height <= MAX_DIMENSIONS.height

                resolve(meetsDimensions)
              }

              img.src = e.target?.result as string
            }

            reader.readAsDataURL(file)
          }),
        {
          message: t("validation.invalid_image_dimensions")
        }
      )
  })

export type ImageSchema = z.output<ReturnType<typeof imageSchema>>
