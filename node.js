module.exports = {
	plugins: ["node"],
	extends: [
		"plugin:node/recommended"
	],
	rules: {
		"no-process-exit": "error",

		// Disabled because it causes too much churn and will be moot when we switch to ES2015 modules
		// 'node/exports-style': [
		// 	'error',
		// 	'module.exports'
		// ]

		"node/file-extension-in-import": 0,
		"node/no-deprecated-api": "error",

		// Redundant with import/no-extraneous-dependencies
		// 'node/no-extraneous-import': 'error',
		// 'node/no-extraneous-require': 'error',

		// Redundant with import/no-unresolved
		// 'node/no-missing-import': 'error',
		// 'node/no-missing-require': 'error',

		"node/no-unpublished-bin": "error",

		// Disabled because they're too annoying, see:
		// https://github.com/mysticatea/eslint-plugin-node/issues/105
		// 'node/no-unpublished-import': [
		// 	'error',
		// 	{
		// 		allowModules: [
		// 			'electron',
		// 			'atom'
		// 		]
		// 	}
		// ],
		// 'node/no-unpublished-require': [
		// 	'error',
		// 	{
		// 		allowModules: [
		// 			'electron',
		// 			'atom'
		// 		]
		// 	}
		// ],

		// Disabled as the rule doesn't allow to exclude compiled sources
		// 'node/no-unsupported-features': 'error',
		// "node/no-unsupported-features/es-builtins": "error",
		// "node/no-unsupported-features/es-syntax": ["error", { ignores: [] }],
		// "node/no-unsupported-features/node-builtins": "error",

		'node/prefer-global/buffer': [
			'error',
			'always'
		],
		'node/prefer-global/console': [
			'error',
			'always'
		],
		'node/prefer-global/process': [
			'error',
			'always'
		],
		'node/prefer-global/text-decoder': [
			'error',
			'always'
		],
		'node/prefer-global/text-encoder': [
			'error',
			'always'
		],
		'node/prefer-global/url-search-params': [
			'error',
			'always'
		],
		'node/prefer-global/url': [
			'error',
			'always'
		],
		"node/prefer-promises/dns": 0,
		"node/prefer-promises/fs": 0,
		"node/process-exit-as-throw": "error"

		// Disabled as the rule doesn't exclude scripts executed with `node` but not referenced in 'bin'. See https://github.com/mysticatea/eslint-plugin-node/issues/96
		// 'node/shebang': '2'
	}
};
