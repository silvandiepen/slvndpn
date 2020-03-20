<template>
	<Container class="page-block">
		<div class="content">
			<slot></slot>
		</div>
	</Container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Block',
	methods: {}
});
</script>

<style lang="scss">
@import '~tools';
.page-block {
	padding: grid(1);
	@media #{$small-only} {
		padding: 0;
	}
}
</style>
