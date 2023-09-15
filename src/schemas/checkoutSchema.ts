import { FORM_FIELD_MESSAGES } from '@/constants/checkoutFormMessages'
import { z } from 'zod'

export const userCheckoutSchema = z.object({
	name: z.string().nonempty(FORM_FIELD_MESSAGES.required),
	cep: z
		.string()
		.nonempty(FORM_FIELD_MESSAGES.required)
		.regex(/^\d{5}-\d{3}$/, FORM_FIELD_MESSAGES.address.cep),
	state: z.string().nonempty(FORM_FIELD_MESSAGES.required),
	city: z.string().nonempty(FORM_FIELD_MESSAGES.required),
	neighborhood: z.string().nonempty(FORM_FIELD_MESSAGES.required),
	street: z.string().nonempty(FORM_FIELD_MESSAGES.required),
	number: z.string().nonempty(FORM_FIELD_MESSAGES.required),
	complement: z.string().nullable(),
	paymentMethod: z.string().nonempty(FORM_FIELD_MESSAGES.required),
})

export type UserCheckoutProps = z.infer<typeof userCheckoutSchema>
