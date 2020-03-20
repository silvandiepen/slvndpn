<template>
	<header id="header" class="header" :style="headerStyle">
		<h3 class="header__logo">
			<NuxtLink to="/">
				<span class="header__firstname">
					<span>S</span><span>i</span><span>l</span>
				</span>
				<Logo class="header__logo-icon"></Logo>
			</NuxtLink>
			<span class="header__lastname">van Diepen</span>
		</h3>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Logo } from '@/components';
export default Vue.extend({
	name: 'Header',
	components: { Logo }
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
		padding: $mobile-padding;
	}
	&__logo {
		position: relative;
		z-index: 2;
		display: flex;
		a {
			display: block;
			width: 3rem;
			height: 3rem;
			border-radius: calc(var(--scroll-top-px) / 10);
			background-color: hsl(
				0deg,
				0%,
				calc((var(--scroll-top-max-reverse) / 10) * 1%)
			);
			font-size: 1.5rem;
			line-height: 3rem;
			text-decoration: none;
		}
	}
	&__logo-icon {
		position: absolute;
		top: 0;
		left: 0;
		width: 3rem;
		height: 3rem;
		transform: scale(calc((var(--scroll-top-max) / 1000) * 0.8));
		fill: white;
	}
	&__firstname {
		display: block;
		transform: scale(calc(var(--scroll-top-max-reverse) / 1000));
	}
	&__lastname {
		position: fixed;
		display: block;
		width: auto;
		height: 3rem;
		background-color: black;
		color: white;
		font-size: 1.5rem;
		line-height: 3rem;
		text-decoration: none;
		transform: translateX(3rem) translateY(calc(var(--scroll-top-px) * -1 / 4));
		padding: 0 0.5em;
	}
}
main {
	position: relative;
	z-index: 1;
}
</style>
