import type { TypedFlatConfigItem } from '../types';

import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';

export async function disables(): Promise<TypedFlatConfigItem[]> {
	return [
		{
			files: [`**/scripts/${GLOB_SRC}`],
			name: 'radum/disables/scripts',
			rules: {
				'antfu/no-top-level-await': 'off',
				'no-console': 'off',
				'ts/explicit-function-return-type': 'off'
			}
		},
		{
			files: [`**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
			name: 'radum/disables/cli',
			rules: {
				'antfu/no-top-level-await': 'off',
				'no-console': 'off'
			}
		},
		{
			files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
			name: 'radum/disables/bin',
			rules: {
				'antfu/no-import-dist': 'off',
				'antfu/no-import-node-modules-by-path': 'off'
			}
		},
		{
			files: ['**/*.d.?([cm])ts'],
			name: 'radum/disables/dts',
			rules: {
				'eslint-comments/no-unlimited-disable': 'off',
				'import/no-duplicates': 'off',
				'no-restricted-syntax': 'off',
				'unused-imports/no-unused-vars': 'off'
			}
		},
		{
			files: ['**/*.js', '**/*.cjs'],
			name: 'radum/disables/cjs',
			rules: {
				'ts/no-require-imports': 'off'
			}
		},
		{
			files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
			name: 'radum/disables/config-files',
			rules: {
				'antfu/no-top-level-await': 'off',
				'no-console': 'off',
				'ts/explicit-function-return-type': 'off'
			}
		}
	];
}
