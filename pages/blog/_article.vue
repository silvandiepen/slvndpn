<template>
	<main class="page page--blog">
		<Heading v-if="article" class="background--white">
			<h1>{{ article.title }}</h1>
		</Heading>
		<Content v-if="article" class="background--beige">
			<Markdown :source="article.content" />
		</Content>
		<BlogList></BlogList>
	</main>
</template>

<script>
export default {
	components: {
		BlogList: () => import('~/components/blog/list.vue')
	},
	async asyncData({ store }) {
		await store.dispatch('articles/fetchArticles');
	},
	computed: {
		article() {
			return this.$store.getters['articles/article'](
				this.$route.params.article
			);
		}
	}
};
</script>
