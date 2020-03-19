module.exports = {
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'if',
					'for',
					'else',
					'each',
					'mixin',
					'extend',
					'include',
					'content',
					'at-root',
					'function'
				]
			}
		],
		'order/order': [
			'dollar-variables',
			'custom-properties',
			'declarations',
			'rules'
		],
		indentation: 'tab'
	},
	extends: ['stylelint-logical-order']
};
