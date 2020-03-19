<template>
	<Container class="page-heading">
		<div class="row center">
			<div class="column small-full medium-two-third">
				<div class="content">
					<slot></slot>
					<h1 v-if="title">
						<span v-for="(word, idx) in compiledTitle" :key="idx">
							{{ word }}
						</span>
					</h1>
				</div>
			</div>
		</div>
	</Container>
</template>
<script lang="ts">
import Vue from 'vue';
import { Container } from '@/components';
export default Vue.extend({
	name: 'Heading',
	components: {
		Container
	},
	props: {
		title: {
			type: String,
			default: null
		}
	},
	computed: {
		compiledTitle() {
			if (this.$props.title) return this.$props.title.split(' ');
			else {
				return [];
			}
		}
	}
});
</script>

<style lang="scss">
@import '~tools';
.page-heading {
	display: flex;
	align-items: center;
	height: 66.66vh;
	> .row {
		margin: 0;
	}
	@media #{$small-only} {
		height: 50vh;
	}
	h1 {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		span {
			position: relative;
			display: block;
			color: white;
			padding: 0.15em;
			&:first-child {
				padding-left: 0.25em;
				// transform: translateX(-0.1em);
				margin-left: -0.25em;
			}
			&:last-child {
				padding-right: 0.25em;
			}
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				display: block;
				width: 100%;
				height: 100%;
				background-color: black;
			}
		}
	}
}
</style>
