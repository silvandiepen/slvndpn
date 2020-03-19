<template>
	<div class="content-item">
		<h3 v-if="title" class="content-row__item-title">
			{{ title }}
		</h3>
		<p><slot></slot></p>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Item',
	props: {
		title: {
			type: String,
			default: null
		}
	}
});
</script>
