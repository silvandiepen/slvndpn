<template>
	<footer id="footer" class="footer">
		<div class="row center small-full xlarge-three-quarter">
			<div class="column">
				<nav class="nav">
					<div class="row small-half medium-fifth">
						<div v-for="(group, idg) in navigation" :key="idg" class="column">
							<h6 v-if="group.link">
								<NuxtLink :to="group.link">{{ group.title }}</NuxtLink>
							</h6>
							<h6 v-else>{{ group.title }}</h6>
							<ul class="nav__list">
								<li
									v-for="(item, idi) in group.children"
									:key="idi"
									class="nav__item"
								>
									<NuxtLink v-if="item.link" class="nav__link" :to="item.link">
										<span class="nav__text">{{ item.name }}</span>
									</NuxtLink>
									<a
										v-if="item.url"
										class="nav__link nav__link--external"
										:href="item.link"
										><span class="nav__text">{{ item.name }}</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Footer',
	data: () => ({
		navigation: [
			{
				title: 'About',
				children: [
					{
						name: 'About me',
						link: '/about/me'
					},
					{
						name: 'What I use',
						link: '/uses'
					},
					{
						name: 'This website',
						link: '/about/this'
					},
					{
						name: 'Get in touch!',
						link: '/about/contact'
					}
				]
			},
			{
				title: 'Code',
				children: [
					{
						name: 'Projects',
						link: '/project'
					},
					{
						name: 'Open Source',
						link: '/open-source'
					},
					{
						name: 'Packages',
						link: '/code/packages'
					},
					{
						name: 'Standards',
						link: '/code/standards'
					}
				]
			},
			{
				title: 'Projects',
				link: '/project',
				children: [
					{
						name: 'Guyn',
						link: '/project/guyn'
					},
					{
						name: "Henri's",
						link: '/project/henris'
					},
					{
						name: 'Silicons',
						link: '/project/silicons'
					},
					{
						name: 'Passport',
						link: '/project/passport'
					},
					{
						name: 'CSS Order',
						link: '/project/css-order'
					},
					{
						name: 'Aybu',
						link: '/project/aybu'
					}
				]
			},
			{
				title: 'Illustration',
				children: [
					{
						name: 'Tiggy & Fred',
						link: '/cartoon/tiggy'
					},
					{
						name: 'Miles Brothers',
						link: '/cartoon/milesbrothers'
					}
				]
			},
			{
				title: 'Branding',
				children: [
					{
						name: "Logo's",
						link: '/logos'
					}
				]
			},

			{
				title: 'Typography',
				children: [
					{
						name: 'Vagrik',
						link: '/typography/vagrik'
					},
					{
						name: 'Fifty',
						link: '/typography/fifty'
					}
				]
			},
			{
				title: 'Iconography',
				children: [
					{
						name: 'Guyn',
						link: '/project/guyn'
					},
					{
						name: 'BBB',
						link: '/work/bbb'
					},
					{
						name: 'Australia',
						link: '/work/australia'
					},
					{
						name: 'Toun',
						link: '/work/toun'
					},
					{
						name: 'Shampour',
						link: '/work/shampour'
					},
					{
						name: 'Gelderse Streken',
						link: '/work/gelderse-streken'
					}
				]
			},

			{
				title: 'Photography',
				children: [
					{
						name: 'Armenia',
						link: '/photography/armenia'
					},
					{
						name: 'Beach',
						link: '/photography/beach'
					},
					{
						name: 'Chernobyl',
						link: '/photography/chernobyl'
					},
					{
						name: 'Frutas',
						link: '/photography/frutas'
					},
					{
						name: 'Malta',
						link: '/photography/malta'
					},
					{
						name: 'Panamá',
						link: '/photography/panama'
					},
					{
						name: 'Korsou',
						link: '/photography/korsou'
					},
					{
						name: 'Winter',
						link: '/photography/winter'
					},
					{
						name: 'Prisoned Zoo',
						link: '/photography/prison-zoo'
					}
				]
			},
			{
				title: 'More',
				children: [
					{
						name: 'Github',
						url: 'https://www.github.com/silvandiepen'
					},
					{
						name: 'Dribbbble',
						url: 'https://www.dribbble.com/silvandiepen'
					},
					{
						name: 'Twitter',
						url: 'https://www.twitter.com/silvandiepen'
					},
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/silvandiepen/'
					},
					{
						name: 'Patreon',
						url: 'https://patreon.com/silvandiepen'
					},
					{
						name: 'Behance',
						url: 'https://www.behance.net/silvandiepen'
					}
				]
			}
		]
	})
});
</script>

<style lang="scss">
@import '~tools';

// Footer styles
.footer {
	background-color: black;
	color: color(White);
	padding: grid(2);
	@media #{$xlarge-up} {
		padding: grid(2 0);
	}
	h6 {
		opacity: 0.5;
		a {
			text-decoration: none;
		}
	}
	.column {
		@media #{$small-only} {
			&:nth-child(n + 3) {
				margin-top: 4em;
			}
		}
		@media #{$medium-up} {
			&:nth-child(n + 6) {
				margin-top: 4em;
			}
		}
	}
}
.nav {
	&__list {
		display: flex;
		flex-direction: column;
	}
	&__item {
		// border: 1px solid red;
	}
	&__text {
		&::before {
			content: '';
			display: block;
			width: 1em;
			height: 2px;
			opacity: 0.5;
		}
	}
	&__link {
		position: relative;
		display: inline-block;
		padding: 0.5em 0;
		text-decoration: none;
		transition: color $base-transition $base-cubic-bezier,
			padding $base-transition $base-cubic-bezier;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			width: calc(100% + 2em);
			height: calc(100% + 1em);
			margin-left: -1em;
			margin-top: -0.5em;
			border-radius: 0.5em;
			background-color: rgba(100, 100, 255, 0.25);
			transform: scale(0.75);
			opacity: 0;
			transition: transform $base-transition $base-cubic-bezier;
		}
		&:hover {
			color: rgba(150, 150, 255, 1);
			&::before {
				transform: scale(1);
				opacity: 1;
			}
			&::after {
				transform: translate(0.25em, -0.25em);
				opacity: 1;
			}
		}
		&:not(:hover).active--exact {
			padding-left: 2em;
		}

		&--external {
			&::after {
				content: '';
				display: inline-block;
				width: 0.8em;
				height: 0.8em;
				border-radius: 1px;
				background-image: linear-gradient(to bottom, currentColor, currentColor),
					linear-gradient(to bottom, currentColor, currentColor),
					linear-gradient(
						to right bottom,
						transparent calc(50% - 1.25px),
						currentColor calc(50% - 1.25px),
						currentColor calc(50% + 1.25px),
						transparent calc(50% + 1.25px)
					);
				background-repeat: no-repeat, no-repeat, no-repeat;
				background-position: top right, top right, top left;
				background-size: 75% 2px, 2px 75%, 100% 100%;
				opacity: 0.25;
				transition: $base-transition $base-cubic-bezier;
			}
		}
	}
}
</style>
