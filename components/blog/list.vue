<template>
	<PageContent class="background--black article-list">
		<ul v-if="articleList" class="article-list__list">
			<li
				v-for="(article, idx) in articleList"
				:key="idx"
				class="article-list__item"
			>
				<span class="article-list__date"
					>{{ article.date_obj.y }}.{{ addZeros(article.date_obj.m) }}.{{
						addZeros(article.date_obj.d)
					}}</span
				>
				<NuxtLink :to="`/blog/${article.uri}`" class="article-list__link">
					<span class="article-list__text">{{ article.title }}</span>
				</NuxtLink>
			</li>
		</ul>
	</PageContent>
</template>
<script>
export default {
	computed: {
		articleList() {
			return this.$store.getters['articles/articleList'];
		}
	},
	created() {
		this.$store.dispatch('articles/fetchArticles');
	},
	methods: {
		addZeros(number, length = 2) {
			let str = '' + number;
			while (str.length < length) {
				str = '0' + str;
			}
			return str;
		}
	}
};
</script>

<style lang="scss">
.article-list {
	&__list {
		width: 100%;
	}
	&__item {
		display: flex;
		& + & {
			margin-top: 1rem;
		}
	}
	&__link {
		padding: 1rem;
		text-decoration: none;
	}
	&__text {
		line-height: 1.25rem;
		font-size: 1.25rem;
	}
	&__date {
		line-height: 1.25rem;
		opacity: 0.5;
		padding: 1rem;
		font-variant-numeric: tabular-nums;
	}
}
</style>
