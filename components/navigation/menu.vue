<template>
	<nav class="navigation" :class="{ 'navigation--active': menuActive }">
		<ul ref="menu" class="navigation__list" @mouseleave="disableSubmenu">
			<div
				class="navigation__hover"
				:style="hoverStyle"
				:class="styling.hoverClass"
			/>
			<li
				v-for="(item, idx) in nav"
				:key="idx"
				class="navigation__item"
				:class="[
					{ 'navigation__item--active': activeLink == item.name },
					`bg--${colors[idx]}`,
					{ 'navigation__item--has-children': item.children.length > 0 }
				]"
				@mouseenter="activateLink(item.name, $event, idx)"
			>
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
					<div class="navigation__subhover" :style="hoverSubStyle" />
					<li
						v-for="(subitem, idy) in item.children"
						:key="idy"
						class="navigation__subitem"
						@mouseenter="activateSubLink(item.name, $event)"
					>
						<NuxtLink
							class="navigation__sublink"
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
	data: () => ({
		activeLink: null,
		styling: {
			width: 100,
			scale: 1,
			left: 100,
			backgroundColor: 'red',
			hoverClass: [],
			txtClass: []
		},
		subStyling: {
			width: 100,
			scale: 1,
			left: 100
		},
		hoverStyle: null,
		hoverSubStyle: null,
		colors: ['plum', 'skyblue', 'army', 'orange']
	}),
	computed: {
		nav() {
			return this.$router.options.routes
				.filter((route) => route.path.includes(':'))
				.filter((route) => route.path.includes('404'))
				.filter((route) => route.path.substring(1).includes('/'))
				.filter((route) => route.name !== 'index')
				.map((route) => {
					return {
						name: route.name,
						path: route.path,
						children: this.$router.options.routes
							.filter((route) => !route.path.includes(':'))
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
		$route() {
			this.$store.dispatch('ui/setMenuActive', false);
		},
		styling: {
			handler() {
				this.hoverStyle = {
					height: `${this.styling.height}px`,
					width: `${this.styling.width}px`,
					transform: `translateX(${this.styling.left}px) scale(${this.styling.scale})`
				};
			},
			deep: true
		},
		subStyling: {
			handler() {
				this.hoverSubStyle = {
					height: `${this.subStyling.height}px`,
					width: `${this.subStyling.width}px`,
					transform: `translateY(${this.subStyling.top}px) scale(${this.subStyling.scale})`
				};
			},
			deep: true
		}
	},
	methods: {
		activateLink(link, event, i) {
			this.activeLink = link;
			this.styling.left = Math.round(
				event.target.getBoundingClientRect().left -
					this.$refs.menu.getBoundingClientRect().left
			);
			this.styling.width = Math.round(
				event.target.getBoundingClientRect().width
			);
			// this.styling.height = Math.round(
			// 	event.target.getBoundingClientRect().height
			// );
			this.styling.hoverClass = [`bg--${this.colors[i]}`];
			this.styling.txtClass = [`bg--${this.colors[i]}`];

			this.styling.scale = 1;
			this.subStyling.scale = 0;
		},
		activateSubLink(link, event) {
			this.activeLink = link;
			this.subStyling.top = Math.round(
				event.target.getBoundingClientRect().top -
					this.$refs.menu.getBoundingClientRect().top -
					this.$refs.menu.getBoundingClientRect().height
			);
			this.subStyling.width = Math.round(
				event.target.getBoundingClientRect().width
			);
			this.subStyling.height = Math.round(
				event.target.getBoundingClientRect().height
			);

			this.subStyling.scale = 1;
		},
		disableSubmenu() {
			this.activeLink = null;
			this.styling.scale = 0;
			this.subStyling.scale = 0;
		}
	}
};
</script>

<style lang="scss">
@import '~tools';
.navigation {
	&__list {
		position: relative;
		display: flex;
		@media #{$small-only} {
			flex-direction: column;
			transform: translateY(100%);
			opacity: 0;
			transition: transform $base-transition $base-cubic-bezier,
				opacity $base-transition $base-cubic-bezier;
		}
		// &:focus-within,
		// &:hover {
		// 	.navigation__sublist {
		// 		opacity: 1;
		// 	}
		// 	.navigation__item {
		// 		transition: min-width $base-transition $base-cubic-bezier;
		// 		min-width: grid(2);
		// 		@media #{$medium-down} {
		// 			min-width: grid(3);
		// 		}
		// 	}
		// }
	}
	&__hover {
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 3.25rem;
		border-radius: $base-border-radius;
		background: var(--bg);
		opacity: 0.25;
		transition: all $base-transition $base-bounce-bezier;
	}
	&__subhover {
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 3.25rem;
		border-radius: $base-border-radius;
		background: var(--bg);
		opacity: 0.25;
		transition: all $base-transition $base-bounce-bezier;
	}
	&__link {
		position: relative;
		display: inline-block;
		box-shadow: 0 0 0 0px var(--bg);
		border-radius: $base-border-radius;
		color: inherit;
		font-size: 1.5rem;
		line-height: 1.5;
		text-decoration: none;
		overflow: hidden;
		padding: 0.4rem 1.5rem 0.6rem 1.5rem;
		// transition: box-shadow $base-transition $base-bounce-bezier;

		&.active--exact,
		&.active {
			box-shadow: 0 0 0 3px var(--bg);
			color: var(--bg);
		}
	}
	&__text {
		color: currentColor;
		font-weight: 600;
		font-size: 1.25rem;
		line-height: 1.5;
		text-decoration: none;
	}
	&__item {
		position: relative;
		z-index: 2;
		min-width: 0;
		color: color(_Black);
		text-align: left;
		&--active {
			color: var(--bg);
			.navigation__sublist {
				opacity: 1;
				pointer-events: all;
			}
			.navigation__link:before {
				transform: scale(1);
				opacity: 0.25;
			}
		}
		&::before {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			z-index: 2;
			width: 1rem;
			height: 1rem;
			border: 3px solid var(--bg);
			border-radius: $base-border-radius 0 0 0;
			background-color: white;
			transform: translateX(-50%) rotate(45deg) scale(0);
			clip-path: polygon(0 0, 0 100%, 100% 0);
		}
		&--has-children:hover {
			&::before {
				transform: translateX(-50%) rotate(45deg) scale(1);
			}
		}
	}
	@media #{$small-only} {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		transform: translateY(-100%);
		transition: transform 0s $base-transition;
		pointer-events: none;
		&--active {
			transform: translateY(0%);
			transition: transform 0s;
			pointer-events: all;
			.navigation__list {
				transform: translateY(0%);
				opacity: 1;
			}
		}
	}
	&__sublist {
		position: absolute;

		right: 0;
		z-index: 1;
		width: 200%;
		box-shadow: 0 0 0 3px currentColor;
		border-radius: $base-border-radius;
		background-color: color(_White);
		color: var(--bg);
		transition: opacity $base-transition $base-cubic-bezier;
		pointer-events: none;
		padding: grid(0.5);
		@media #{$medium-up} {
			position: absolute;
			top: 100%;
			left: -50%;
			opacity: 0;
		}
	}
	&__sublink {
		display: inline-block;
		border-radius: 1.25rem;
		line-height: 1.5rem;
		text-decoration: none;
		padding: 0.5rem 1rem;
		&:focus {
			box-shadow: 0 0 0 2px currentColor inset;
			outline: none;
			background-color: color(_Blue, 0.25);
		}
		&.active--exact {
			box-shadow: 0 0 0 2px currentColor inset;
		}
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
		font-weight: 400;
		font-size: 1rem;
	}
}
</style>
