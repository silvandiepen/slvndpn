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

<style lang="scss">
@import '~tools';
.page-content {
	padding: grid(2 0);
}
</style>
