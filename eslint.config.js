import jsdoc from './jsdoc.js';
import node from './node.js';
import ava from './avajs.js';
import localConfig from './index.js';

/** @type {import("@types/eslint").Linter.FlatConfig} */
export default [
	{
		// TODO: Would be great to have a func or something that combines these 2.
		// Both the plugin and the rules need to be added from the imported module.
		plugins: {
			...jsdoc.configs['flat/recommended-error'].plugins,
			...node.configs['flat/recommended'].plugins
		},
		rules: {
			...jsdoc.configs['flat/recommended-error'].rules,
			...node.configs['flat/recommended'].rules
		}
	},
	{
		files: ['tests/**/*.test.js'],
		// This will return `plugins: {...}, rules: {...}`
		...ava.configs['flat/recommended']
	},
	...localConfig
];
