/** @type {import("@types/eslint").Linter.FlatConfig} */
export const bestPractices = {
	rules: {
		'accessor-pairs': 2,
		'array-callback-return': 2,
		'block-scoped-var': 2,
		'class-methods-use-this': 0,
		'complexity': ['error', 14],
		'consistent-return': 2,
		'curly': 0,
		'default-case': 2,
		'dot-location': 0,
		'dot-notation': 2,
		'eqeqeq': 0,
		'guard-for-in': 2,
		'max-classes-per-file': 0,
		'no-alert': 2,
		'no-caller': 2,
		'no-case-declarations': 2,
		'no-div-regex': 2,
		'no-else-return': 0,
		'no-empty-function': 0,
		'no-empty-pattern': 2,
		'no-eq-null': 0,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-label': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-global-assign': 2,
		'no-implicit-coercion': 0,
		'no-implicit-globals': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 2,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-magic-numbers': 0,
		'no-multi-spaces': 0,
		'no-multi-str': 2,
		'no-new': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-nested-ternary': 0, // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md#disabling-eslint-no-nested-ternary
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-param-reassign': 0,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-restricted-properties': 0,
		'no-return-assign': 2,
		'no-return-await': 2,
		'no-script-url': 2,
		'no-self-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-unmodified-loop-condition': 2,
		'no-unused-expressions': 0,
		'no-unused-labels': 2,
		'no-useless-call': 2,
		'no-useless-catch': 2,
		'no-useless-concat': 2,
		'no-useless-escape': 2,
		'no-useless-return': 2,
		'no-void': 2,
		'no-warning-comments': [
			'error',
			{
				terms: ['fixme'],
				location: 'anywhere'
			}
		],
		'no-with': 0,
		'prefer-named-capture-group': 0,
		'prefer-promise-reject-errors': 0,
		'radix': 2,
		'require-await': 2,
		'require-unicode-regexp': 0,
		'vars-on-top': 2,
		'wrap-iife': 0,
		'yoda': 2,
		'strict': 2
	}
};
