// import Github from '../helpers/github.js';

// console.log(process.env);

// let octokit;
// async () => {
// 	const authentication = await auth();
// 	octokit = new Octokit({
// 		auth: authentication
// 	});
// };

export const state = () => ({
	articles: [],
	files: []
});

export const mutations = {
	setArticleFiles(state, articles) {
		state.files = articles.data;
	},
	setArticle(state, article) {
		state.articles.push(article);
	},
	orderArticles(state) {
		const articles = state.articles;
		articles.sort(function compare(a, b) {
			return new Date(a.date) - new Date(b.date);
		});
		state.articles = articles;
	}
};

export const getters = {
	article: (state) => (slug) =>
		state.articles.find((article) => article.uri === slug),
	articleList: (state) => state.articles
};

export const actions = {
	async fetchArticles({ commit }) {
		await fetch('.netlify/functions/octokit')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				commit('setArticles', myJson);
				// console.log(myJson);
			});
		// // if (state.articles.length) return;
		// const contents = await octokit.repos
		// 	.getContents({
		// 		owner: 'silvandiepen',
		// 		repo: 'silvandiepen-blog',
		// 		path: 'posts'
		// 	})
		// 	.then((result) => {
		// 		let articles = [];
		// 		console.log(result);
		// 		commit('setArticleFiles', result);
		// 		return result.data.forEach((article, index) => {
		// 			try {
		// 				Github.getFile(article).then((art) => {
		// 					// console.log('after getfile', art);
		// 					articles.push(art);
		// 				});
		// 			} catch (e) {
		// 				return e;
		// 			}
		// 			if (index == result.data.length - 1) {
		// 				// console.log(articles);
		// 				return articles;
		// 				// Promise.resolve(articles);
		// 			}
		// 		});
		// 	})
		// 	.then((res) => res);
		// // const contents = await Github.LoadArticles('posts')
		// // 	.then((result) => {
		// // 		console.log('primary result', result);
		// // 		return result;
		// // 	})
		// // 	.then((res) => console.log('secondary result', res));
		// console.log('contents', contents);
		// // Github.LoadArticles('posts').then((result) => {
		// // 	console.log(result);
		// // });

		// // console.log('posts', posts);
		// // posts.forEach((post) => {
		// // 	commit('setArticle', post);
		// // });

		// // await Github('posts').then((posts) => {
		// // 	posts.forEach((post) => {
		// // 		console.log(post);
		// // 		commit('setArticle', post);
		// // 	});
		// // });
	}
	// async fetchArticle({ commit }, args) {
	// 	// console.log(commit, args);
	// 	// const article = await Github.getFile(article).then((result) => result);
	// }
};
