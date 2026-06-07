import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';
import { pluginAntfu } from '../plugins';
import { interopDefault } from '../utils';

export const StylisticConfigDefaults: StylisticConfig = {
	arrowParens: true,
	braceStyle: 'stroustrup',
	commaDangle: 'never',
	experimental: false,
	indent: 'tab',
	jsx: true,
	quotes: 'single',
	semi: true
};

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
	lessOpinionated?: boolean;
}

export async function stylistic(options: StylisticOptions = {}): Promise<TypedFlatConfigItem[]> {
	const {
		arrowParens,
		braceStyle,
		commaDangle,
		experimental,
		indent,
		jsx,
		lessOpinionated = false,
		overrides = {},
		quotes,
		semi
	} = {
		...StylisticConfigDefaults,
		...options
	};

	const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

	const config = pluginStylistic.configs.customize({
		arrowParens,
		braceStyle,
		commaDangle,
		experimental,
		indent,
		jsx,
		pluginName: 'style',
		quotes,
		semi
	}) as TypedFlatConfigItem;

	return [
		{
			name: 'radum/stylistic/rules',
			plugins: {
				antfu: pluginAntfu,
				style: pluginStylistic
			},
			rules: {
				...config.rules,

				...experimental
					? {}
					: {
							'antfu/consistent-list-newline': 'error'
						},

				'antfu/consistent-chaining': 'error',

				...(lessOpinionated
					? {
							curly: ['error', 'all']
						}
					: {
							'antfu/curly': 'error',
							'antfu/if-newline': 'error',
							'antfu/top-level-function': 'error'
						}),

				'style/generator-star-spacing': ['error', { after: true, before: false }],
				'style/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
				'style/yield-star-spacing': ['error', { after: true, before: false }],

				...overrides
			}
		}
	];
}
