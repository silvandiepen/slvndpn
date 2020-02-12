<template>
	<nav class="navigation" :class="{ 'navigation--active': menuActive }">
		<ul class="navigation__list">
			<li v-for="(item, idx) in nav" :key="idx" class="navigation__item">
				<NuxtLink
					class="navigation__link"
					:to="item.path"
					:aria-label="`Go to ${item.name}`"
				>
					<span class="navigation__text">
						{{ item.name }}
					</span>
				</NuxtLink>
				<ul v-if="item.children.length > 0" class="navigation__sublist">
					<li
						v-for="(subitem, idy) in item.children"
						:key="idy"
						class="navigation__item navigation__subitem"
					>
						<NuxtLink
							class="navigation__link navigation__sublink"
							:to="subitem.path"
							:aria-label="`Go to ${subitem.name}`"
						>
							<span class="navigation__text navigation__subtext">
								{{ subitem.name }}
							</span>
						</NuxtLink>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	computed: {
		nav() {
			return this.$router.options.routes
				.filter((route) => route.path.indexOf(':') < 0)
				.filter((route) => route.path.indexOf('404') < 0)
				.filter((route) => route.path.substring(1).indexOf('/') < 0)
				.filter((route) => route.name !== 'index')
				.map((route) => {
					return {
						name: route.name,
						path: route.path,
						children: this.$router.options.routes
							.filter((route) => route.path.indexOf(':') < 0)
							.filter(
								(subroute) =>
									subroute.path.indexOf(route.name) > 0 &&
									subroute.path !== route.path
							)
							.map((subroute) => {
								return {
									name: subroute.name.substr(route.name.length + 1),
									path: subroute.path
								};
							})
					};
				});
		},
		menuActive: {
			get() {
				return this.$store.state.ui.menu.active;
			},
			set(value) {
				this.$store.dispatch('ui/setMenuActive', value);
			}
		}
	},
	watch: {
		$route: function() {
			this.$store.dispatch('ui/setMenuActive', false);
		}
	}
};
</script>

<style lang="scss">
@import '~tools';
.navigation {
	&__list {
		display: flex;
		@media #{$medium-down} {
			flex-direction: column;
			transform: translateY(100%);
			opacity: 0;
			transition: transform $base-transition $base-cubic-bezier,
				opacity $base-transition $base-cubic-bezier;
		}
		&:focus-within,
		&:hover {
			.navigation__sublist {
				opacity: 1;
			}
			.navigation__item {
				min-width: grid(2);
			}
		}
	}
	&__link {
		display: inline-block;
		color: currentColor;
		font-size: 1.5rem;
		line-height: 1.5rem;
		text-decoration: none;
		padding: 1rem 1rem;
		position: relative;
		width: 100%;

		&.active--exact,
		&.active {
			color: color(White);
			&::before {
				clip-path: inset(0 0 0 0);
			}
			&::after {
				clip-path: inset(100% 0 0 0);
			}
		}
		&:focus {
			outline: 2px solid color(Red);
		}

		&::after,
		&::before {
			transition: clip-path $base-transition $base-cubic-bezier;
			z-index: -1;
			background-color: color(Black);
			position: absolute;
			left: 0;
			top: 0;
			content: '';
			width: 100%;
			height: 100%;
			display: block;
		}
		&::before {
			transition: clip-path $base-transition $base-cubic-bezier;
			clip-path: inset(0 100% 0 0);
		}
		&::after {
			transition: clip-path $base-transition $base-transition $base-cubic-bezier;
			background-color: color(White);
			clip-path: inset(0 0 0 0);
		}
	}
	&__text {
		color: currentColor;
		font-size: 1.25rem;
		line-height: 1.5;
		font-weight: 600;
		text-decoration: none;
	}
	&__item {
		position: relative;
		text-align: left;
		width: 100%;
		min-width: 0;
		transition: min-width $base-transition $base-cubic-bezier;
	}
	@media #{$medium-down} {
		position: fixed;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		transform: translateY(-100%);
		transition: transform 0s $base-transition;
		pointer-events: none;
		background-color: blue;
		&--active {
			pointer-events: all;
			transform: translateY(0%);
			transition: transform 0s;
			.navigation__list {
				transform: translateY(0%);
				opacity: 1;
			}
		}
	}
	&__sublist {
		@media #{$large-up} {
			position: absolute;
			opacity: 0;
			top: 100%;
			left: 0;
		}
		width: 100%;
		transition: opacity $base-transition $base-cubic-bezier;
	}
	&__sublink {
		padding: 0.25rem 1rem;
	}
	&__subitem {
		display: block;
		text-align: left;
	}
	&__subtext {
		color: rgba(
			var(--text-color-r),
			var(--text-color-g),
			var(--text-color-b),
			0.5
		);
		font-size: 1rem;
		font-weight: 400;
	}
}
</style>
