<template>
	<Container class="page-heading">
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
.page-heading {
	height: 66.66vh;
	display: flex;
	align-items: flex-end;
	> .row {
		margin: 0;
	}
}
</style>
