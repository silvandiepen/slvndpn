import gql from 'graphql-tag';

export const state = () => ({
	articles: []
});

export const mutations = {
	setArticle(state, article) {
		state.articles.push(article);
	},
	setArticles(state, articles) {
		state.loaded = true;
		state.articles = articles;
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
	setArticles({ commit }, articles) {
		// console.log(articles);
		commit('setArticles', articles);
	},
	fetchArticles({ state, commit }) {
		if (state.loaded) return;

		const client = this.app.apolloProvider.defaultClient;

		client
			.query({
				query: gql`
					query posts {
						posts {
							nodes {
								title
								uri
								date
								content
								excerpt
							}
						}
					}
				`
			})
			.then((data) => {
				commit('setArticles', data.posts.nodes);
			});
	}
};
