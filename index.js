'use strict';

module.exports = {
	plugins: [
		'import',
		'promise',
		'unicorn'
		// Disabled for now. Not sure if it is worth it. 1/2
		// 'compat'
	],
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		...[
			'./rules/possible-errors',
			'./rules/best-practices',
			'./rules/variables',
			'./rules/eslint-node',
			'./rules/stylistic-issues',
			'./rules/es6'
		// eslint-disable-next-line unicorn/prefer-module
		].map((file) => require.resolve(file))
	],
	settings: {
		'import/ignore': [
			'node_modules',
			'.json$',
			'.(scss|less|css|styl)$'
		]
	},
	rules: {
		// Disabled for now. Not sure if it is worth it. 2/2
		// 'compat/compat': 'warn'
		'unicorn/prefer-module': 0,
		'unicorn/no-nested-ternary': 1
	}
};
