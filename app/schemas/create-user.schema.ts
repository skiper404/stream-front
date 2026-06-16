import z from 'zod'

export const createUserSchema = z
	.object({
		username: z
			.string('Username required')
			.min(1, 'Username required')
			.max(30, 'Max length 30 characters'),
		email: z.email('Invalid email').max(50, 'Max email length 50 characters'),
		password: z
			.string('Password is required')
			.min(8, 'Must be at least 8 characters')
			.max(50, 'Max password length 50 characters'),
		repeatPassword: z
			.string()
			.min(8, 'Must be at least 8 characters')
			.max(50, 'Max password length 50 characters'),
	})
	.refine((data) => data.password === data.repeatPassword, {
		message: 'Passwords don`t match',
		path: ['repeatPassword'],
	})

export type CreateUserSchema = z.output<typeof createUserSchema>
