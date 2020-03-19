<template>
	<!-- <section
		ref="inviewElement"
		:class="[
			wasInview ? 'was-inview' : '',
			inview ? 'inview' : '',
			ontop ? 'ontop' : '',
			onbottom ? 'onbottom' : ''
		]"
	>	 -->
	<section>
		<slot></slot>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Container'
	// data() {
	// 	return {
	// 		top: 0,
	// 		bottom: 0,
	// 		container: {
	// 			height: 0,
	// 			bottom: 0,
	// 			top: 0,
	// 			windowHeight: 0,
	// 			element: ''
	// 		},
	// 		element: {
	// 			top: 0,
	// 			bottom: 0
	// 		},
	// 		wasInview: false,
	// 		inview: false,
	// 		onTop: false,
	// 		onBottom: false,
	// 		offTop: false,
	// 		scrollTick: true
	// 	};
	// },
	// mounted() {
	// 	this.init();
	// 	this.do();
	// 	window.addEventListener('scroll', () => this.do());
	// },
	// methods: {
	// 	do() {
	// 		if (this.scrollTick) {
	// 			window.requestAnimationFrame(() => {
	// 				this.setValues();
	// 				this.scrollTick = false;
	// 			});
	// 		}
	// 		this.scrollTick = true;
	// 	},
	// 	init() {
	// 		this.container.top = window.scrollY;
	// 		this.container.bottom = window.scrollY + window.innerHeight;
	// 		this.container.height = window.innerHeight;
	// 		this.container.windowHeight =
	// 			document.body.clientHeight ||
	// 			document.documentElement.clientHeight ||
	// 			document.documentElement.scrollHeight;
	// 		this.container.element = this.$refs.inviewElement as Element;
	// 		if (this.container.element !== undefined)
	// 			this.element.top = this.container.element.getBoundingClientRect();
	// 	},
	// 	setValues() {
	// 		// Check inview
	// 		this.container.top = window.scrollY;
	// 		this.container.bottom = window.scrollY + window.innerHeight;

	// 		if (
	// 			this.element.top > this.container.bottom ||
	// 			this.element.bottom < this.container.top
	// 		) {
	// 			this.inview = false;
	// 		} else {
	// 			this.wasInview = true;
	// 			this.inview = true;
	// 		}

	// 		// If ontop
	// 		this.onTop = window.scrollY < 1;

	// 		// If onBottom
	// 		this.offTop =
	// 			window.scrollY + this.container.height >= this.container.windowHeight;
	// 	}
	// }
});
</script>
