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
console.dog = (log) => {
	console.log('🐶', log);
};
import Vue from 'vue';
import { Content, Heading } from '@/components';
import gql from 'graphql-tag';

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
	created() {
		let client = this.$apollo.getClient();
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
				console.log(data);
				store.dispatch('articles/setArticles', data.posts.nodes);
				// commit('setArticles', data.posts.nodes);
			});
	},
	mounted() {
		// this.$store.dispatch('articles/fetchArticles');
	}
});
</script>
