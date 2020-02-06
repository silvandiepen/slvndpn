<template>
	<Container class="page-block">
		<div class="content">
			<slot></slot>
		</div>
	</Container>
</template>

<style lang="scss">
@import '~tools';
.page-block {
	padding: grid(1);
}
</style>
