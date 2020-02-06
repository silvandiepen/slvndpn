<template>
	<div class="input-field" :class="[type ? `input-field--${type}` : null]">
		<slot></slot>
	</div>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			default: null
		}
	}
};
</script>
<style lang="scss">
.input-field {
	& + .input-field {
		margin-top: 1em;
	}
	&__group {
		display: inline-flex;
		.input-field + .input-field {
			margin-top: 0;
		}
		&--inline-space {
			flex-direction: row;
			flex-wrap: wrap;
			.input-field + .input-field {
				margin-left: 1em;
			}
		}
		&--stack-space {
			flex-direction: column;
			.input-field + .input-field {
				margin-top: 1em;
			}
		}
		&--inline {
			flex-direction: row;
			.input-field--radio + .input-field--radio,
			.input-field--check + .input-field--check {
				margin-left: 1em;
			}
		}
		&--stack {
			flex-direction: column;
			.input-field--radio + .input-field--radio,
			.input-field--check + .input-field--check {
				margin-top: 1em;
			}
		}
	}
	&__group-label {
		width: 100%;
		display: block;
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 1.5px;
		font-weight: bold;
		opacity: 0.5;
		& + .input-field__group {
			margin-top: 1em;
		}
	}
}
</style>
