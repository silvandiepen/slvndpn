<template>
	<main class="page page--blog">
		<PageHeading class="background--white">
			<h1>Blog</h1>
		</PageHeading>
		<!-- <BlogList></BlogList> -->
	</main>
</template>

<script>
export default {
	components: {
		// BlogList: () => import('~/components/blog/list.vue')
	},
	async asyncData({ store }) {
		await store.dispatch('articles/fetchArticles');
	}
};
</script>
