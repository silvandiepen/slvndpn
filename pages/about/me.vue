<template>
	<main class="page page--me">
		<PageHeading>
			<h1>My name is Sil van Diepen</h1>
		</PageHeading>
		<PageContent class="background--skyblue">
			<h2>
				I create visual things using code and illustrations.
			</h2>
			<h4>
				I love creating visual styles using code, illustrations or any way which
				fits. I can help you with logo, identities, digital design,
				illustrations and code. I sometimes post my stuff on platforms like
				GitHub, Codepen, Dribbble and Behance. Are you interested? Just contact
				me 🙂
			</h4>
		</PageContent>
		<PageContent class="background--skybluelight">
			<h3>More about me…</h3>
			<p>
				I was born in a small village called Limmen the Netherlands, but grew up
				in Heiloo, the next village. Always had a passion for drawing, computers
				and technology. From building my own computers to starting a website on
				Geocities.
			</p>
			<p>
				Moved to Curaçao in 2010 to see and experience living abroad, came back
				to Holland to work in a more professional environment and be able to
				work on projects for bigger clients. I Currently live in Alkmaar with my
				wife Yeva and son Tig. We love to travel and enjoy life.
			</p>
		</PageContent>
	</main>
</template>

<script>
export default {
	created() {
		console.log('hoiii');
	},
	mounted() {
		this.$store.dispatch('ui/setDarkMode');
	}
};
</script>
