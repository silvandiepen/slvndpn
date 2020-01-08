<template>
	<header id="header" class="header">
		<h3 class="header__logo">
			<NuxtLink to="/">
				Sil
			</NuxtLink>
		</h3>
		<NavigationTrigger></NavigationTrigger>
		<NavigationMenu></NavigationMenu>
	</header>
</template>

<script>
import project from '~/package.json';
import NavigationMenu from '~/components/navigation/menu.vue';
import NavigationTrigger from '~/components/navigation/trigger.vue';
export default {
	components: {
		NavigationMenu,
		NavigationTrigger
	},
	data: () => ({
		projectName: project.name
	})
};
</script>

<style lang="scss">
@import '~tools';

.header {
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
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
		font-size: 1.5rem;
		line-height: 1.5rem;
		padding: 1rem 0;
		a {
			text-decoration: none;
		}
	}
}
main {
	position: relative;
	z-index: 1;
}
</style>
