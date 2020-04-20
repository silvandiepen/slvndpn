<template>
	<div class="block">
		<Container class="page-block">
			<div class="content">
				<slot></slot>
			</div>
		</Container>
	</div>
</template>

<script>
import { Container } from '@/components';
export default {
	name: 'Block',
	component: { Container }
};
</script>

<style lang="scss" src="./Block.style.scss" />
