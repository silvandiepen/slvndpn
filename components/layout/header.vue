<template>
	<header id="header" class="header" :style="headerStyle">
		<h3 class="header__logo">
			<NuxtLink to="/">
				Sil
			</NuxtLink>
			<span>van Diepen</span>
		</h3>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Header',
	components: {},
	data: () => ({
		projectName: 'Sil',
		scroll: {
			position: 0,
			last: 0,
			tick: false
		}
	}),
	computed: {
		headerStyle() {
			return {
				'--scroll-top': `${this.scroll.position}px`
			};
		}
	},
	mounted() {
		window.addEventListener('scroll', () => {
			this.scroll.last = window.scrollY;

			if (!this.scroll.tick) {
				window.requestAnimationFrame(() => {
					this.scroll.position = this.scroll.last;
					this.scroll.tick = false;
				});
				this.scroll.tick = true;
			}
		});
	},
	methods: {}
});
</script>

<style lang="scss">
@import '~tools';

.header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	width: 100%;
	text-align: center;
	padding: grid(1 2);
	@include min-(1, $mobile-padding) {
		padding: 0 0 0 $mobile-padding;
	}
	&__logo {
		z-index: 2;
		display: flex;
		span,
		a {
			display: block;
			width: 3rem;
			height: 3rem;
			background-color: white;
			font-size: 1.5rem;
			line-height: 3rem;
			text-decoration: none;
		}
		span {
			position: fixed;
			width: auto;
			background-color: black;
			color: white;
			transform: translateX(3rem) translateY(calc(var(--scroll-top) * -1 / 4));
			padding: 0 0.5em;
		}
	}
}
main {
	position: relative;
	z-index: 1;
}
</style>
