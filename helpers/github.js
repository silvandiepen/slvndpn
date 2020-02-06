import config from '../config/latest';
const Octokit = require('@octokit/rest');
const octokit = new Octokit({
	auth: config.github
});

const getUri = (str) => {
	return str.replace('.md', '').substr(9);
};
const getTitle = (str) => {
	const matches = str.match(/(?<=#\s+).*?(?=\s+\n)/gs);
	if (matches && matches[0]) return matches[0];
	else return 'no title defined';
};
const getContent = (str) => {
	const matches = str.match(/(?<=#\s+).*?(?=\s+\n)/gs);
	if (matches && matches[0]) return str.replace(`# ${matches[0]}`, '');
	else return str;
};

let Github = {};

Github.getFile = async (article) => {
	let contents = octokit.repos
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

			const resArticle = {
				uri: article.name ? getUri(article.name) : null,
				title: content ? getTitle(content) : null,
				content: content ? getContent(content) : null,
				date_obj: date,
				date: new Date(`${date.y}-${date.m}-${date.d}`),
				...article
			};
			return Promise.resolve(resArticle);
		})
		.then((converted) => {
			return converted;
		});
	return contents;
};

Github.LoadArticles = async (path) => {
	return octokit.repos
		.getContents({
			owner: 'silvandiepen',
			repo: 'silvandiepen-blog',
			path: path
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
					return articles;
				}
			});
		})
		.then((res) => res);
};

export default Github;
