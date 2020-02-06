<template>
	<InputField type="option">
		<input
			:id="ID"
			:type="type"
			:checked="checked"
			:disabled="disabled"
			:read-only="readOnly"
			:name="name"
		/>
		<label :for="ID">
			<span class="input-field__text" v-html="label"/> <slot></slot
		></label>
	</InputField>
</template>

<script>
import InputBase from './input-base';
import { DefaultProps } from './props';
export default {
	extends: InputBase,
	props: {
		...DefaultProps
	}
};
</script>
<style lang="scss">
@import '~tools';
.input-field {
	&--option {
		&:only-of-type {
			--border: #{$base-border-radius};
		}
		label {
			display: block;
			position: relative;
			padding-left: 1.5em;
		}
		input {
			clip-path: inset(100% 100% 100% 100%);
			position: absolute;
			opacity: 0;
		}
		input + label {
			padding: 1em;
			border: 2px solid currentColor;
			border-radius: var(--border-top-left, var(--border, 0))
				var(--border-top-right, var(--border, 0))
				var(--border-bottom-right, var(--border, 0))
				var(--border-bottom-left, var(--border, 0));
		}
		input:checked + label {
			background-color: currentColor;
			.input-field__text {
				color: var(--bg);
			}
		}
	}
}
</style>
