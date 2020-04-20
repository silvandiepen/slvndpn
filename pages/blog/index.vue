<template>
	<main class="page page--blog">
		<Heading title="Blog" />
		<Content>
			<ul v-if="articles">
				<li v-for="(post, idx) in articles" :key="idx" class="posts__post">
					{{ post.title }}
				</li>
			</ul>
		</Content>
		<!-- <BlogList></BlogList> -->
	</main>
</template>

<script>
export default {
	components: {
		// BlogList: () => import('~/components/blog/list.vue')
	},

	data: () => ({})
};
</script>

<script>
import Vue from 'vue';
import { Content, Heading } from '@/components';

export default Vue.extend({
	components: {
		Content,
		Heading
	},
	computed: {
		articles() {
			this.$store.getters['articles/getArticles'];
		}
	},
	mounted() {
		this.$store.dispatch('articles/fetchArticles');
	}
});
</script>
