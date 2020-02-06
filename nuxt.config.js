import pkg from './package';
import config from './config/latest';
// import Github from './helpers/github.js';

if (config.env === 'development') {
	process.env.DEBUG = 'nuxt:*';
}
console.log(process.env);

module.exports = {
	mode: 'universal',
	env: {
		environment: config.env || 'production'
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
	 ** Headers of the page
	 */
	head: {
		title: 'Sil van Diepen',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#000000' //,
		// failedColor: '#000000'
	},

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{
			src: '~/plugins/global.components.js'
		},
		{
			src: '~/plugins/global.mixins.js'
		},
		{ src: '~/plugins/vuex-persist', ssr: false }
	],

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
	 ** GoogleAnalytics module configuration
	 */
	// 	'google-analytics': {
	// 		id: 'UA-XXXXXXXXX-XX',
	// 		disabled: false
	// 	},

	/*
	 ** Axios module configuration
	 */
	axios: {
		retry: {
			retries: 3
		},
		baseURL: config.api
	},

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
	},

	/*
	 ** Global CSS
	 */
	css: [
		{
			src: '~assets/scss/app.scss',
			lang: 'scss'
		}
	]
};
