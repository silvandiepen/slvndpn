<template>
	<section
		ref="inviewElement"
		:class="[
			wasInview ? 'was-inview' : '',
			inview ? 'inview' : '',
			ontop ? 'ontop' : '',
			onbottom ? 'onbottom' : ''
		]"
	>
		<slot></slot>
	</section>
</template>

<script>
export default {
	data() {
		return {
			top: 0,
			bottom: 0,
			container: {
				height: 0,
				bottom: 0,
				windowheight: 0
			},
			element: {
				top: 0,
				bottom: 0
			},
			wasInview: false,
			inview: false,
			ontop: false,
			onbottom: false,
			scrollTick: true
		};
	},
	mounted() {
		this.init();
		this.do();
		window.addEventListener('scroll', () => this.do());
	},
	methods: {
		do() {
			if (this.scrollTick) {
				window.requestAnimationFrame(() => {
					this.setValues();
					this.scrollTick = false;
				});
			}
			this.scrollTick = true;
		},
		init() {
			this.container.top = window.scrollY;
			this.container.bottom = window.scrollY + window.innerHeight;
			this.container.height = window.innerHeight;
			this.container.windowheight =
				document.height ||
				document.body.clientHeight ||
				document.documentElement.clientHeight ||
				document.documentElement.scrollHeight;
			this.element = this.$refs.inviewElement.getBoundingClientRect();
		},
		setValues() {
			// Check inview
			this.container.top = window.scrollY;
			this.container.bottom = window.scrollY + window.innerHeight;

			if (
				this.element.top > this.container.bottom ||
				this.element.bottom < this.container.top
			) {
				this.inview = false;
			} else {
				this.wasInview = true;
				this.inview = true;
			}

			// If ontop
			this.onTop = window.scrollY < 1 ? true : false;

			// If onBottom

			this.offTop =
				window.scrollY + this.container.height >= this.container.windowHeight
					? true
					: false;
		}
	}
};
</script>
