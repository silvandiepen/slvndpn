<template>
	<!-- <Container class="page-heading">
		<div class="row center">
			<div class="column small-full medium-two-third">
				<div class="content">
					<h1 v-if="title">
						<span v-for="(word, idx) in compiledTitle" :key="idx">
							{{ word }}
						</span>
					</h1>
					<slot></slot>
				</div>
			</div>
		</div>
	</Container> -->
	<div class="page-heading">
		<div class="row center">
			<div class="column small-full medium-two-third">
				<div class="content">
					<h1 v-if="title">
						<span v-for="(word, idx) in compiledTitle" :key="idx">
							{{ word }}
						</span>
					</h1>
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./Heading.script.ts" />
<style lang="scss" src="./Heading.style.scss" />
