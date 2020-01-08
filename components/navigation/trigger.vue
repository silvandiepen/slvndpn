<template>
	<button
		class="navigation-trigger"
		:class="{ 'navigation-trigger--active': menuActive }"
		@click="menuActive = !menuActive"
	>
		<span></span>
	</button>
</template>

<script>
export default {
	computed: {
		menuActive: {
			get() {
				return this.$store.state.ui.menu.active;
			},
			set(value) {
				this.$store.dispatch('ui/setMenuActive', value);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import '~tools';
.navigation-trigger {
	position: relative;
	display: block;
	font-size: 1.5rem;
	line-height: 1.5rem;
	padding: 1rem 1.75rem;
	z-index: 2;
	background: transparent;
	border: none;
	flex-shrink: 0;
	transform: scale(1);
	&:focus {
		outline: none;
		border-radius: 50%;
		box-shadow: 0 0 0 2px currentColor;
	}
	span {
		@include menu($color: currentColor);
	}
	&--active {
		span {
			@include menu-close();
		}
	}
	@media #{$large-up} {
		transform: scale(0);
	}
}
</style>
