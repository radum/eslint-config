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
		'eslint-comment',
		'promise'
	],
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'./rules/possible-errors',
		'./rules/best-practices',
		'./rules/variables',
		'./rules/node',
		'./rules/stylistic-issues',
		'./rules/es6'
	],
	env: {
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
	}
};
