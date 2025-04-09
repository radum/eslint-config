import styleMigrate from '@stylistic/eslint-plugin-migrate';

import { radum } from './src';

export default radum(
	{
		vue: {
			a11y: true
		},
		react: true,
		solid: true,
		svelte: true,
		astro: true,
		typescript: true,
		formatters: true,
		pnpm: false,
		type: 'lib'
	},
	{
		ignores: ['fixtures', '_fixtures', '**/constants-generated.ts']
	},
	{
		files: ['src/**/*.ts'],
		rules: {
			'perfectionist/sort-objects': 'error'
		}
	},
	{
		files: ['src/configs/*.ts'],
		plugins: {
			'style-migrate': styleMigrate
		},
		rules: {
			'style-migrate/migrate': ['error', { namespaceTo: 'style' }]
		}
	}
);
