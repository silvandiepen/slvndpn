<template>
	<div class="column small-full medium-half xlarge-third">
		<h3 v-if="title" class="content-row__item-title">
			{{ title }}
		</h3>
		<p><slot></slot></p>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: null
		}
	}
};
</script>
