<template>
	<main class="page page--blog">
		<PageHeading v-if="article" class="background--white">
			<h1>{{ article.title }}</h1>
		</PageHeading>
		<PageContent v-if="article" class="background--beige">
			<Markdown :source="article.content" />
		</PageContent>
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
