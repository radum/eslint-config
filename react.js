'use strict';

module.exports = {
	extends: [
		'plugin:import/react',
		'plugin:react/all',
		'plugin:react-hooks/recommended',
		'plugin:react-perf/all',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hook-form/recommended',
		'plugin:react-form-fields/recommended'
	],
	plugins: ['import'],
	env: {
		browser: true
	},
	rules: {
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-indent': 0, // TODO: to use tabs
		'react/jsx-indent-props': 0, // TODO: to use tabs

		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.jsx', '.tsx'] }
		],

		'react/jsx-max-depth': ['error', { max: 10 }],
		'react/state-in-constructor': ['error', 'never'],
		'react/no-string-refs': ['error', { noTemplateLiterals: true }],
		'react/jsx-key': [
			'error',
			{
				checkFragmentShorthand: true,
				checkKeyMustBeforeSpread: true,
				warnOnDuplicates: true
			}
		],
		'react/forbid-prop-types': [
			'error',
			{ checkContextTypes: true, checkChildContextTypes: true }
		],
		'react/no-unsafe': ['error', { checkAliases: true }],
		'react/sort-prop-types': ['error', { sortShapeProp: true }],
		'react/boolean-prop-naming': [
			'error',
			{
				rule: '^(is|has|are|can|should|did|will)[A-Z]([A-Za-z0-9])+',
				validateNested: true
			}
		],
		'react/require-default-props': [
			'error',
			{ forbidDefaultForRequired: true }
		],
		'react/jsx-no-target-blank': ['error', { forms: true }],
		'react/jsx-curly-brace-presence': [
			'error',
			{ propElementValues: 'always' }
		],

		'react-hooks/exhaustive-deps': 'error',

		'jsx-a11y/lang': 'error',

		'react-form-fields/styled-no-mix-controlled-with-uncontrolled': 'error',
		'react-form-fields/styled-no-only-value-prop': 'error',

		'react/jsx-no-literals': 'off',
		'react/react-in-jsx-scope': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
