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
		'unicorn'
		// Disabled for now. Not sure if it is worth it.
		// 'compat'
	],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'plugin:jsdoc/recommended',
		...[
			'./rules/possible-errors',
			'./rules/best-practices',
			'./rules/variables',
			'./rules/eslint-node',
			'./rules/stylistic-issues',
			'./rules/es6'
		// eslint-disable-next-line unicorn/no-array-callback-reference
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
		'unicorn/better-regex': 'error',
		'unicorn/catch-error-name': 'error',
		'unicorn/consistent-destructuring': 'error',
		'unicorn/consistent-function-scoping': 'error',
		'unicorn/custom-error-definition': 'off',
		'unicorn/empty-brace-spaces': 'error',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/expiring-todo-comments': 'error',
		'unicorn/explicit-length-check': 'error',
		'unicorn/filename-case': 'error',
		'unicorn/import-index': 'off',
		'unicorn/import-style': 'error',
		'unicorn/new-for-builtins': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/no-array-callback-reference': 'error',
		'unicorn/no-array-for-each': 'error',
		'unicorn/no-array-method-this-argument': 'error',
		'unicorn/no-array-push-push': 'error',
		'unicorn/no-array-reduce': 'error',
		'unicorn/no-console-spaces': 'error',
		'unicorn/no-document-cookie': 'error',
		'unicorn/no-for-loop': 'error',
		'unicorn/no-hex-escape': 'error',
		'unicorn/no-instanceof-array': 'error',
		'unicorn/no-invalid-remove-event-listener': 'error',
		'unicorn/no-keyword-prefix': 'off',
		'unicorn/no-lonely-if': 'error',
		'no-nested-ternary': 'off',
		'unicorn/no-nested-ternary': 'error',
		'unicorn/no-new-array': 'error',
		'unicorn/no-new-buffer': 'error',
		'unicorn/no-null': 'error',
		'unicorn/no-object-as-default-parameter': 'error',
		'unicorn/no-process-exit': 'error',
		'unicorn/no-static-only-class': 'error',
		'unicorn/no-this-assignment': 'error',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-unsafe-regex': 'off',
		'unicorn/no-unused-properties': 'off',
		'unicorn/no-useless-fallback-in-spread': 'error',
		'unicorn/no-useless-length-check': 'error',
		'unicorn/no-useless-spread': 'error',
		'unicorn/no-useless-undefined': 'error',
		'unicorn/no-zero-fractions': 'error',
		'unicorn/number-literal-case': 'error',
		'unicorn/numeric-separators-style': 'error',
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-array-find': 'error',
		'unicorn/prefer-array-flat': 'error',
		'unicorn/prefer-array-flat-map': 'error',
		'unicorn/prefer-array-index-of': 'error',
		'unicorn/prefer-array-some': 'error',
		'unicorn/prefer-at': 'off',
		'unicorn/prefer-date-now': 'error',
		'unicorn/prefer-default-parameters': 'error',
		'unicorn/prefer-dom-node-append': 'error',
		'unicorn/prefer-dom-node-dataset': 'error',
		'unicorn/prefer-dom-node-remove': 'error',
		'unicorn/prefer-dom-node-text-content': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-keyboard-event-key': 'error',
		'unicorn/prefer-math-trunc': 'error',
		'unicorn/prefer-modern-dom-apis': 'error',
		'unicorn/prefer-module': 'off',
		'unicorn/prefer-negative-index': 'error',
		'unicorn/prefer-node-protocol': 'error',
		'unicorn/prefer-number-properties': 'error',
		'unicorn/prefer-object-from-entries': 'error',
		'unicorn/prefer-object-has-own': 'off',
		'unicorn/prefer-optional-catch-binding': 'error',
		'unicorn/prefer-prototype-methods': 'error',
		'unicorn/prefer-query-selector': 'error',
		'unicorn/prefer-reflect-apply': 'error',
		'unicorn/prefer-regexp-test': 'error',
		'unicorn/prefer-set-has': 'error',
		'unicorn/prefer-spread': 'error',
		'unicorn/prefer-string-replace-all': 'off',
		'unicorn/prefer-string-slice': 'error',
		'unicorn/prefer-string-starts-ends-with': 'error',
		'unicorn/prefer-string-trim-start-end': 'error',
		'unicorn/prefer-switch': 'error',
		'unicorn/prefer-ternary': 'error',
		'unicorn/prefer-top-level-await': 'off',
		'unicorn/prefer-type-error': 'error',
		'unicorn/prevent-abbreviations': 'warn',
		'unicorn/require-array-join-separator': 'error',
		'unicorn/require-number-to-fixed-digits-argument': 'error',
		'unicorn/require-post-message-target-origin': 'error',
		'unicorn/string-content': 'off',
		'unicorn/throw-new-error': 'error'
	}
};
