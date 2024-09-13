import confusingBrowserGlobals from 'confusing-browser-globals';

/** @type {import("@types/eslint").Linter.FlatConfig} */
export const variables = {
	rules: {
		'init-declarations': 0,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-restricted-globals': ['error', ...confusingBrowserGlobals],
		'no-shadow': 2,
		'no-shadow-restricted-names': 2,
		'no-undef': 2,
		'no-undef-init': 2,
		'no-undefined': 0,
		'no-unused-vars': [
			2,
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^ignored',
				args: 'after-used',
				ignoreRestSiblings: true
			}
		],
		'no-use-before-define': ['error', 'nofunc']
	}
};
