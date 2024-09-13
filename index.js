import js from '@eslint/js';
import pluginPromise from 'eslint-plugin-promise';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginSortClassMembers from 'eslint-plugin-sort-class-members';

import { bestPractices } from './rules/best-practices.js';
import { possibleErrors } from './rules/possible-errors.js';
import { variables } from './rules/variables.js';
import { stylisticIssues } from './rules/stylistic-issues.js';
import { es6 } from './rules/es6.js';

export default [
	{
		plugins: {
			'promise': pluginPromise,
			'unicorn': pluginUnicorn,
			'sort-class-members': pluginSortClassMembers
		},
		rules: {
			...js.configs.recommended.rules,
			...possibleErrors.rules,
			...bestPractices.rules,
			...variables.rules,
			...stylisticIssues.rules,
			...es6.rules,
			...pluginPromise.configs.recommended.rules,
			...pluginUnicorn.configs.recommended.rules,
			...pluginSortClassMembers.configs.recommended.rules
		}
	}
];
