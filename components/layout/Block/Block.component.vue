<template>
	<Container class="page-block">
		<div class="content">
			<slot></slot>
		</div>
	</Container>
</template>

<script>
import { Container } from '@/components';
export default {
	name: 'Block',
	component: { Container }
};
</script>

<style lang="scss" src="./Block.style.scss" />
