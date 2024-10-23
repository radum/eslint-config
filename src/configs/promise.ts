import type { TypedFlatConfigItem } from '../types';
import { pluginPromise } from '../plugins';

export async function promise(): Promise<TypedFlatConfigItem[]> {
	return [
		{
			name: 'radum/promise/rules',
			plugins: {
				promise: pluginPromise
			},
			rules: {
				'promise/always-return': 'error',
				'promise/avoid-new': 'off',
				'promise/catch-or-return': 'error',
				'promise/no-callback-in-promise': 'warn',
				'promise/no-native': 'off',
				'promise/no-nesting': 'warn',
				'promise/no-new-statics': 'error',
				'promise/no-promise-in-callback': 'warn',
				'promise/no-return-in-finally': 'warn',
				'promise/no-return-wrap': 'error',
				'promise/param-names': 'error',
				'promise/valid-params': 'warn'
			}
		}
	];
}
