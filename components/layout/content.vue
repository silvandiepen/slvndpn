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
import Vue from 'vue';
import { Container } from '@/components';
export default Vue.extend({
	name: 'Content',
	components: {
		Container
	}
});
</script>

<style lang="scss">
@import '~tools';
.page-content {
	padding: grid(2 0);
}
</style>
