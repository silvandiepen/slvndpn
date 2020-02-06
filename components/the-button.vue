<script>
import Vue from 'vue';
export default {
	props: {
		link: {
			type: String,
			default: null
		},
		color: {
			type: String,
			default: null
		},
		icon: {
			type: String,
			default: null
		}
	},
	data: () => ({
		buttonType: 'button',
		buttonColor: 'default'
	}),
	beforeCreate() {
		const isLink = new RegExp('^(http://|https://|tel:|mailto:)');
		// Determine type of link
		if (this.$props && this.$props.link && this.$props.link.match(isLink))
			this.buttonType = 'a';
		else if (this.$props && this.$props.link) this.buttonType = 'router-link';
		else this.buttonType = 'button';

		console.log(this.buttonType);
		// Set the color
		if (this.$props && this.$props.color) this.buttonColor = this.$props.color;
	},
	methods: {
		buttonClasses() {
			return [
				'button',
				this.$props.color ? `button--${this.$props.color}` : null,
				this.$props.icon ? `button--icon` : null
			];
		}
	},

	render: function(h) {
		// If the link is a nuxt link, render will build it up with the NuxtLink component.
		if (this.buttonType == 'router-link') {
			return h(
				Vue.component('RouterLink'),
				{
					props: {
						to: this.$props.link
					},
					class: this.buttonClasses()
				},
				[
					h('span', { class: ['button__text'] }, this.$slots.default),
					this.$props.icon
						? h('span', {
								class: ['button__icon', `icon--${this.$props.icon}`]
						  })
						: null
				]
			);
		} else {
			// Otherwise it will be an 'a' or a button. these can just be passed regularly to the render.
			return h(
				this.buttonType,
				{
					attrs: {
						href: this.buttonType == 'a' ? this.$props.link : null
					},
					class: this.buttonClasses()
				},
				[
					h('span', { class: ['button__text'] }, this.$slots.default),
					this.$props.icon
						? h('span', { class: ['button__icon'] }, [
								h('span', { class: [`silicon-${this.$props.icon}`] })
						  ])
						: null
				]
			);
		}
	}
};
</script>

<style lang="scss">
@import '~tools';
.button {
	position: relative;
	display: inline-block;
	color: var(--bg);
	text-decoration: none;
	font-weight: 600;
	padding: 1em 1.25em;
	line-height: 1em;
	border-radius: 1.5em;
	transition: $base-transition ease-in-out;
	z-index: 1;
	font-size: 1rem;
	border: none;
	&:focus,
	&:hover {
		transform: translateX(-0.75em);
		&:after {
			transform: translateX(2.5em);
		}
		.button__text:after {
			transform: scale(1) translateX(0em);
		}
	}
	&:before {
		transition: 0.3s;
		background-color: var(--text);
		border-radius: inherit;
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		z-index: -1;
	}
	&:after {
		transition: $base-transition ease-in-out;
		// background-color: hsla(
		// 	var(--bg-h),
		// 	var(--bg-s),
		// 	calc(var(--bg-l) * 5),
		// 	0.5
		// );
		background-color: var(--text);
		opacity: 0.5;

		border-radius: inherit;
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		z-index: -2;
	}
	&__text {
		&:after {
			position: absolute;
			left: 100%;
			padding: 0 0.5em;
			content: '→';
			transform: scale(0) translateX(-3em);
			transition: $base-transition ease-in-out;
		}
	}
}
</style>
