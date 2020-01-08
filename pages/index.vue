<template>
	<main class="page page--home">
		<PageHeading class="intro">
			<h1>Sil van Diepen</h1>
		</PageHeading>
		<PageContent>
			<h3>
				Hi! My name is Sil van Diepen. I’m a dad, make images, code, talk bullshit, eat and sleep. And this… This is my
				website…
			</h3>
		</PageContent>

		<Slider v-if="slides" :data="slides" />

		<PageContent class="interesting background--black">
			<h1 class="pop-column">
				Some (coding related) things I find really interesting at the moment;
			</h1>

			<div class="content-row row">
				<div class="column small-full medium-half pop-column">
					<h2>Design Systems</h2>
					<h4>
						You a design system and you a design system! Everybody A design system.
					</h4>
					<p>
						It sounds so easy, but (un)fortunately it is not that easy. There are many ways to build a design system and I've
						tried them all. Currently I am working at Transavia where I'm working on their design system which will be used in
						many ways with a main focus on the corporate website.
					</p>
				</div>
				<div class="column small-full medium-half  pop-column">
					<h2>Web Components</h2>
					<h4>The future of the web is coming.</h4>
					<p>
						Wow, really.. the future is coming? You won't say! Anyway.. Web components have been around for quite a while but
						never were they so well supported as they are now finally. That's why I jumped full into them.,
					</p>
				</div>
				<div class="column small-full medium-half  pop-column">
					<h2>Vue</h2>
					<h4>React, Angular or Vue.. gotta choose..</h4>
					<p>
						No you don't have to choose but I kinda still did. Although I don't have a problem and I do see good things in all
						frameworks. I do prefer Vue, just because it feels easiest to me and I have most fun actually building things
						using Vue.
					</p>
				</div>
				<div class="column small-full medium-half  pop-column">
					<h2>Sass</h2>
					<h4>CSS on Steroids without JS!</h4>
					<p>
						It's been around for ages and there are new techniques but I still prefer my Sass and I still think Sass has a
						bright future.
					</p>
				</div>
			</div>
		</PageContent>
	</main>
</template>

<script>
export default {
	components: {
		Slider: () => import('~/components/slider/slider.vue')
	},
	data() {
		return {
			slides: [
				{
					link: '#',
					color: 'blue',
					title: 'Chami',
					image: 'http://api.silvandiepen.nl/wp-content/uploads/2019/09/chami.png'
				},
				{
					link: '#',
					color: 'brown',
					title: 'Chernobyl',
					image: 'http://api.silvandiepen.nl/wp-content/uploads/2019/09/1526-1024x683.jpg'
				},
				{
					link: '#',
					color: 'skyblue',
					title: 'Ice Cream',
					image: 'http://api.silvandiepen.nl/wp-content/uploads/2019/09/icecream-color-06-1024x1024.png'
				},
				{
					link: '#',
					color: 'yellow',
					title: 'Bananana',
					image: 'http://api.silvandiepen.nl/wp-content/uploads/2019/09/banana1-1024x1024.jpg'
				}
			]
		};
	}
};
</script>

<style lang="scss">
@import '~tools';
.page {
	&--home {
	}
}
.pop-column {
	transition: transform 0.5s;
	transform: translateY(grid(2));
}
.inview .pop-column {
	animation: popColumnUp 0.5s;
	@at-root {
		@keyframes popColumnUp {
			to {
				transform: translateY(grid(0));
			}
		}
	}
	@for $i from 1 through 10 {
		&:nth-child(#{$i}) {
			animation: popColumnUp 0.5s #{$i/10 + 1}s forwards;
		}
	}
}

.intro {
	height: 66.66vh;
	display: flex;
	align-items: flex-end;
	h1 {
		width: 100vw;
		position: relative;
		left: 50%;
		text-align: center;
		transform: translateX(-50%);
		font-size: grid(3.65);
		font-weight: 600;
		clip-path: inset(0 100% 0 0);
		letter-spacing: -0.05em;
		background-color: color(Black);
		color: color(_Black);
		transition: color 0.5s, background 0.5s;
		color: color(Black);

		@media #{$small-only} {
			font-size: grid(3.75);
		}
	}
	&.inview h1 {
		animation: showTitle 1s forwards ease-in-out;
		@at-root {
			@keyframes showTitle {
				0% {
					clip-path: inset(0 100% 0 0);
				}
				100% {
					background-color: color(_White);
					clip-path: inset(0 0% 0 0);
				}
			}
		}
	}
}

.slides {
	width: 100vw;
	overflow: scroll;
	margin: -grid(2 0);
	position: relative;
	z-index: 2;
	padding: grid(1 0);
	&__wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: nowrap;
	}
	&__title {
		background-color: color(White);
		color: color(Black);
		padding: 1rem;
		font-size: 0.8rem;
		position: absolute;
		left: 0;
		top: 100%;
	}
	&__item {
		position: relative;
		width: grid(12);
		height: grid(8);
		&:nth-child(2n) {
			width: grid(8);
			height: grid(12);
			// .slides__title{
			// 	top: 0; bottom: auto;
			// }
		}
		flex-shrink: 0;
		margin-left: grid(1);
		transform: scale(0.25);

		background-size: cover;
		background-position: center center;

		@media #{$small-only} {
			margin-left: $mobile-padding;
			width: grid(14);
			height: grid(14);
			&:nth-child(2n) {
				width: grid(14);
				height: grid(14);
			}
		}
	}
	&.was-inview {
		@at-root {
			@keyframes popIn {
				0% {
					transform: scale(0.25) rotate(2.5deg);
				}
				80% {
					transform: scale(1.05) rotate(5deg);
				}
				100% {
					transform: scale(1) rotate(0deg);
				}
			}
		}
		@for $i from 1 through 4 {
			.slides__item:nth-child(4n + #{$i}) {
				animation: popIn 0.5s #{($i/10)}s forwards;
			}
		}
	}
}
</style>
