<template>
	<div class="content-row">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Row'
});
</script>

<style lang="scss">
@import '~tools';
.content-row {
	display: flex;
	flex-wrap: wrap;
	.content-item {
		width: 100%;
		@media #{$small-only} {
			padding: 1em;
			& + .content-item {
				margin-top: 1em;
			}
		}
		@media #{$medium-up} {
			width: 50%;
			min-width: 25%;
			padding: 2em;
		}
	}
}
</style>
