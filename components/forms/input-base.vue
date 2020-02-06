<script>
export default {
	data: () => ({
		ID: null
	}),
	methods: {
		createID(prefix = null) {
			return (
				`${prefix && typeof prefix == 'string' ? prefix : ''}_` +
				Math.random()
					.toString(36)
					.substr(2, 9)
			);
		}
	},
	created() {
		this.ID = this.createID();
	}
};
</script>
