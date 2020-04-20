<template>
	<Container class="page-content">
		<div class="row center">
			<div class="column small-full medium-two-third">
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	</Container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import Container from '../Container/Container.component.vue';
export default defineComponent({
	props: {
		title: String
	},
	setup(props) {
		return {
			props,
			Container
		};
	}
});
</script>
<style lang="scss" src="./Content.style.scss" />
