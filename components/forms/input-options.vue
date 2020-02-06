<template>
	<InputField type="options">
		<label v-if="label" class="input-field__group-label">{{ label }}</label>
		<div
			class="input-field__group"
			:class="[
				group ? `input-field__group--${group}` : 'input-field__group--inline'
			]"
		>
			<InputOption
				v-for="(option, idx) in options"
				:key="idx"
				:checked="option.value"
				:disabled="disabled"
				:read-only="readOnly"
				:name="ID"
				:type="optionType"
				:label="option.label"
			/>
		</div>
	</InputField>
</template>

<script>
import InputBase from './input-base';
import { DefaultProps, GroupProps } from './props';
export default {
	extends: InputBase,
	props: {
		...DefaultProps,
		...GroupProps
	},
	computed: {
		optionType() {
			return this.$props.multi ? 'checkbox' : 'radio';
		}
	}
};
</script>
<style lang="scss">
@import '~tools';
$base-border-radius: 1rem;

.input-field--options {
	.input-field--option {
		&:first-child {
			--border-top-left: #{$base-border-radius};
		}
		&:last-child {
			--border-bottom-right: #{$base-border-radius};
		}
	}
	.input-field__group {
		&--inline-space,
		&--stack-space {
			.input-field--option {
				--border: #{$base-border-radius};
			}
		}
		&--inline {
			.input-field--option:first-child {
				--border-bottom-left: #{$base-border-radius};
			}
			.input-field--option:last-child {
				--border-top-right: #{$base-border-radius};
			}
			.input-field--option:not(:first-child) label {
				border-left: 0px;
			}
		}
		&--stack {
			.input-field--option:first-child {
				--border-top-left: #{$base-border-radius};
				--border-top-right: #{$base-border-radius};
			}
			.input-field--option:last-child {
				--border-bottom-left: #{$base-border-radius};
				--border-bottom-right: #{$base-border-radius};
			}
			.input-field--option:not(:first-child) label {
				border-top: 0px;
			}
		}
	}
}
</style>
