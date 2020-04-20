<template>
	<!-- <section ref="inviewElement" :class="classes"> -->
	<section :class="classes">
		godverrrr
		<slot></slot>
	</section>
</template>

<script lang="ts">
import {
	defineComponent,
	reactive,
	ref,
	onMounted,
	computed
} from '@vue/composition-api';

export default defineComponent({
	setup() {
		const inviewElement = ref(null);
		const current = reactive({
			top: 0,
			bottom: 0,
			wasInview: false,
			isInview: false,
			isOnTop: false,
			isOnBottom: false,
			isOffTop: false
		});
		const element = reactive({
			top: 0,
			bottom: 0
		});
		const containerElement = reactive({
			height: 0,
			bottom: 0,
			top: 0,
			windowHeight: 0
		});

		const scrollTick = ref(false);

		const state = reactive({
			classes: computed(
				(): Array<string | null> => [
					`${current.wasInview ? 'was-inview' : null}`,
					`${current.isInview ? 'is-inview' : null}`,
					`${current.isOnTop ? 'on-top' : null}`,
					`${current.isOffTop ? 'off-top' : null}`,
					`${current.isOnBottom ? 'on-bottom' : null}`
				]
			)
		});

		function doSomething(): void {
			if (scrollTick)
				window.requestAnimationFrame(() => {
					setValues();
					scrollTick.value = false;
				});

			scrollTick.value = true;
		}

		function init(): void {
			containerElement.top = window.scrollY;
			containerElement.bottom = window.scrollY + window.innerHeight;
			containerElement.height = window.innerHeight;
			containerElement.windowHeight =
				document.body.clientHeight ||
				document.documentElement.clientHeight ||
				document.documentElement.scrollHeight;

			// console.log(inviewElement);
			element.top = inviewElement.getBoundingClientRect();
			if (containerElement.element !== undefined)
				element.top = containerElement.element.getBoundingClientRect();
		}

		function setValues(): void {
			// Check inview
			containerElement.top = window.scrollY;
			containerElement.bottom = window.scrollY + window.innerHeight;
			if (
				element.top > containerElement.bottom ||
				element.bottom < containerElement.top
			) {
				current.isInview = false;
			} else {
				current.wasInview = true;
				current.isInview = true;
			}
			// If ontop
			current.isOnTop = window.scrollY < 1;
			// If onBottom
			current.isOffTop =
				window.scrollY + containerElement.height >=
				containerElement.windowHeight;
		}

		onMounted(() => {
			init();
			doSomething();
			window.addEventListener('scroll', () => doSomething());
		});

		return {
			state
		};
	}
});
</script>

<style lang="scss" src="./Container.style.scss" />
