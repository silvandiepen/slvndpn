<template>
	<InputField type="radio">
		<input
			:id="ID"
			type="radio"
			:checked="checked"
			:disabled="disabled"
			:read-only="readOnly"
			:name="name"
		/>
		<label :for="ID">
			<span class="input-field__text" v-html="label"></span>
			<slot></slot>
		</label>
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
.input-field {
	&--radio {
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
			&::before {
				content: '';
				width: 1em;
				height: 1em;
				display: block;
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				box-shadow: 0 0 0 2px currentColor inset;
				border-radius: 50%;
			}
			&::after {
				content: '';
				width: 0.5em;
				height: 0.5em;
				display: block;
				position: absolute;
				left: 0.25em;
				top: 50%;
				transform: scale(0) translateY(-50%);
				background-color: currentColor;
				border-radius: 50%;
			}
		}
		input:checked + label {
			&::after {
				transform: scale(1) translateY(-50%);
			}
		}
	}
}
</style>
