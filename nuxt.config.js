import config from './config/latest';

if (config.env === 'development') {
	process.env.DEBUG = 'nuxt:*';
}

export default {
	mode: 'universal',
	/*
	 ** Environments
	 */

	env: {
		environment: config.env || 'production'
	},

	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Sil van Diepen',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_descriptions || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	/*
	 ** Classes for router-links.
	 */
	router: {
		linkPrefetchedClass: 'prefetched',
		linkExactActiveClass: 'active--exact',
		linkActiveClass: 'active'
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#000000'
	},
	/*
	 ** Axios
	 */
	axios: {
		retry: {
			retries: 3
		},
		baseURL: config.api
	},
	/*
	 ** Global CSS
	 */
	css: [
		{
			src: '~assets/scss/app.scss',
			lang: 'scss'
		}
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		[
			'nuxt-rfg-icon',
			{
				rfg: {
					design: {
						ios: {
							pictureAspect: 'backgroundAndMargin',
							backgroundColor: '#000000',
							margin: '0%'
						}
					}
				}
			}
		],
		// 		'@nuxtjs/google-analytics',
		'@nuxtjs/axios',
		'@nuxtjs/pwa'
	],
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Build plugins
		 */
		plugins: [],

		// babel: {
		// 	babelrc: true,
		// 	cacheDirectory: undefined
		// },

		transpile: [], // Name of NPM packages to be transpiled

		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Define toolset shortcut
			config.resolve.alias['~tools'] = 'assets/scss/tools.scss';
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	}
};
