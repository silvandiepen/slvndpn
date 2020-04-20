<template>
	<header id="header" class="header">
		<h3 class="header__logo">
			<NuxtLink to="/">
				<span class="header__firstname">
					<span v-for="i in firstName.length" :key="i">{{
						firstName.split('')[i - 1]
					}}</span>
				</span>
				<!-- <Logo class="header__logo-icon"></Logo> -->
			</NuxtLink>
			<span class="header__lastname">{{ lastName }}</span>
		</h3>
	</header>
</template>

<script lang="ts" src="./Header.script" />
<style lang="scss" src="./Header.style.scss" />
