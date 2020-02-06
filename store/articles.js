import Github from '../helpers/github.js';
const Octokit = require('@octokit/rest');
const octokit = new Octokit({
	auth: process.env.GITHUB_CLIENT
});

export const state = () => ({
	articles: []
});

export const mutations = {
	setArticle(state, article) {
		state.articles.push(article);
	},
	orderArticles(state) {
		const articles = state.articles;
		articles.sort(function compare(a, b) {
			var dateA = new Date(a.date);
			var dateB = new Date(b.date);
			return dateA - dateB;
		});
		state.articles = articles;
	}
};

export const getters = {
	article: (state) => (slug) =>
		state.articles.find((article) => article.uri == slug),
	articleList: (state) => state.articles
};

export const actions = {
	async fetchArticles() {
		// if (state.articles.length) return;
		const contents = await octokit.repos
			.getContents({
				owner: 'silvandiepen',
				repo: 'silvandiepen-blog',
				path: 'posts'
			})
			.then((result) => {
				let articles = [];

				return result.data.forEach((article, index) => {
					try {
						Github.getFile(article).then((art) => {
							// console.log('after getfile', art);
							articles.push(art);
						});
					} catch (e) {
						return e;
					}
					if (index == result.data.length - 1) {
						// console.log(articles);
						return articles;
						// Promise.resolve(articles);
					}
				});
			})
			.then((res) => res);
		// const contents = await Github.LoadArticles('posts')
		// 	.then((result) => {
		// 		console.log('primary result', result);
		// 		return result;
		// 	})
		// 	.then((res) => console.log('secondary result', res));
		console.log('contents', contents);
		// Github.LoadArticles('posts').then((result) => {
		// 	console.log(result);
		// });

		// console.log('posts', posts);
		// posts.forEach((post) => {
		// 	commit('setArticle', post);
		// });

		// await Github('posts').then((posts) => {
		// 	posts.forEach((post) => {
		// 		console.log(post);
		// 		commit('setArticle', post);
		// 	});
		// });
	}
};
