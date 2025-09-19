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
		nextjs: true,
		typescript: true,
		formatters: true,
		pnpm: false,
		type: 'lib',
		jsx: {
			a11y: true
		}
	},
	{
		ignores: ['fixtures', '_fixtures', '**/constants-generated.ts']
	},
	{
		files: ['src/**/*.ts'],
		rules: {
			'perfectionist/sort-objects': 'error'
		}
	}
);
