const Octokit = require('@octokit/rest');
const octokit = new Octokit({
	auth: '71603b336138a25ef58c2c9eac26dfc61bf4b65c'
});

const getUri = (str) => {
	return str.replace('.md', '').substr(9);
};
const getTitle = (str) => {
	const matches = str.match(/(?<=#\s+).*?(?=\s+\n)/gs);
	console.log(matches);
	if (matches && matches[0]) return matches[0];
	else return 'no title defined';
};
const getContent = (str) => {
	const matches = str.match(/(?<=#\s+).*?(?=\s+\n)/gs);
	if (matches && matches[0]) return str.replace(`# ${matches[0]}`, '');
	else return str;
};

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
	article: (state) => (slug) => state.articles.find((article) => article.uri == slug),
	articleList: (state) => state.articles
};

export const actions = {
	async fetchArticle({ commit }, path) {
		const article = octokit.repos
			.getContents({
				owner: 'silvandiepen',
				repo: 'silvandiepen-blog',
				path: path
			})
			.then((result) => {
				this.content = Buffer.from(result.data.content, 'base64').toString();
			});
		commit('setArticleList', article);
	},
	async fetchArticles({ commit, state }) {
		if (state.articles.length) return;
		octokit.repos
			.getContents({
				owner: 'silvandiepen',
				repo: 'silvandiepen-blog',
				path: 'posts'
			})

			.then((result) => {
				result.data.forEach((article) => {
					octokit.repos
						.getContents({
							owner: 'silvandiepen',
							repo: 'silvandiepen-blog',
							path: article.path
						})
						.then((res) => {
							const content = Buffer.from(res.data.content, 'base64').toString();
							const date = {
								y: parseInt(article.name.substr(0, 4)),
								m: parseInt(article.name.substr(4, 2)),
								d: parseInt(article.name.substr(6, 2))
							};

							commit('setArticle', {
								...article,
								uri: getUri(article.name),
								title: getTitle(content),
								content: getContent(content),
								date_obj: date,
								date: new Date(`${date.y}-${date.m}-${date.d}`)
							});
						});
				});
			});
	}
};
