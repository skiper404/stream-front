// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	modules: ['@nuxt/ui', 'nuxt-graphql-client'],
	css: ['~/assets/css/main.css'],

	'graphql-client': {
		documentPaths: ['./graphql'],
	},
})
