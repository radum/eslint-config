'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'import',
		'eslint-comments',
		'jsdoc',
		'promise',
		'filenames',
		// Disabled until this https://github.com/sindresorhus/eslint-plugin-unicorn/issues/326 is fixed
		// 'unicorn'
		// Disabled for now. Not sure if it is worth it.
		// 'compat'
	],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		...[
			'./rules/possible-errors',
			'./rules/best-practices',
			'./rules/variables',
			'./rules/eslint-node',
			'./rules/stylistic-issues',
			'./rules/es6'
		].map(require.resolve)
	],
	env: {
		es6: true,
		browser: true,
		node: true
	},
	settings: {
		'import/ignore': [
			'node_modules',
			'.json$',
			'.(scss|less|css|styl)$'
		]
	},
	rules: {
		// Disabled for now. Not sure if it is worth it.
		// 'compat/compat': 'warn',

		'filenames/match-exported': 2,
		// Disabled for now as it is a bit annoying
		// 'filenames/match-regex': [
		// 	2,
		// 	'^[A-Z]?[a-z]+(?:[A-Z][a-z]+)*$',
		// 	false
		// ],
		'filenames/no-index': 0,
		'jsdoc/check-alignment': 1,
		'jsdoc/check-examples': 0,
		'jsdoc/check-indentation': 0,
		'jsdoc/check-param-names': 1,
		'jsdoc/check-syntax': 0,
		'jsdoc/check-tag-names': 1,
		'jsdoc/check-types': 1,
		'jsdoc/implements-on-classes': 1,
		'jsdoc/match-description': 0,
		'jsdoc/newline-after-description': [
			1,
			'always'
		],
		'jsdoc/no-types': 0,
		'jsdoc/no-undefined-types': 1,
		'jsdoc/require-description': 0,
		'jsdoc/require-description-complete-sentence': 0,
		'jsdoc/require-example': 0,
		'jsdoc/require-hyphen-before-param-description': 0,
		'jsdoc/require-jsdoc': 0,
		'jsdoc/require-param': 0,
		'jsdoc/require-param-description': 1,
		'jsdoc/require-param-name': 2,
		'jsdoc/require-param-type': 1,
		'jsdoc/require-returns': 1,
		'jsdoc/require-returns-check': 0,
		'jsdoc/require-returns-description': 0,
		'jsdoc/require-returns-type': 0,
		'jsdoc/valid-types': 1,
		// 'unicorn/catch-error-name': 'error',
		// 'unicorn/custom-error-definition': 'off',
		// 'unicorn/error-message': 'error',
		// 'unicorn/escape-case': 'error',
		// 'unicorn/explicit-length-check': 'error',
		// 'unicorn/filename-case': 'error',
		// 'unicorn/import-index': 'error',
		// 'unicorn/new-for-builtins': 'error',
		// 'unicorn/no-abusive-eslint-disable': 'error',
		// 'unicorn/no-array-instanceof': 'error',
		// 'unicorn/no-console-spaces': 'error',
		// 'unicorn/no-fn-reference-in-iterator': 'off',
		// 'unicorn/no-for-loop': 'error',
		// 'unicorn/no-hex-escape': 'error',
		// 'unicorn/no-keyword-prefix': 'off',
		// 'unicorn/no-new-buffer': 'error',
		// 'unicorn/no-process-exit': 'error',
		// 'unicorn/no-unreadable-array-destructuring': 'error',
		// 'unicorn/no-unsafe-regex': 'off',
		// 'unicorn/no-unused-properties': 'off',
		// 'unicorn/no-zero-fractions': 'error',
		// 'unicorn/number-literal-case': 'error',
		// 'unicorn/prefer-add-event-listener': 'error',
		// 'unicorn/prefer-event-key': 'error',
		// 'unicorn/prefer-exponentiation-operator': 'error',
		// 'unicorn/prefer-flat-map': 'error',
		// 'unicorn/prefer-includes': 'error',
		// 'unicorn/prefer-node-append': 'error',
		// 'unicorn/prefer-node-remove': 'error',
		// 'unicorn/prefer-query-selector': 'error',
		// 'unicorn/prefer-spread': 'error',
		// 'unicorn/prefer-starts-ends-with': 'error',
		// 'unicorn/prefer-text-content': 'error',
		// 'unicorn/prefer-type-error': 'error',
		// 'unicorn/prevent-abbreviations': 'warn',
		// 'unicorn/regex-shorthand': 'error',
		// 'unicorn/throw-new-error': 'error'
	}
};
