import plugin from 'eslint-plugin-n';
const { configs } = plugin;

export default {
	configs: {
		'flat/recommended': {
			plugins: { n: plugin },
			rules: {
				...configs['flat/recommended'].rules,
				'n/prefer-global/buffer': ['error', 'always'],
				'n/prefer-global/console': ['error', 'always'],
				'n/prefer-global/process': ['error', 'always'],
				'n/prefer-global/text-decoder': ['error', 'always'],
				'n/prefer-global/text-encoder': ['error', 'always'],
				'n/prefer-global/url-search-params': ['error', 'always'],
				'n/prefer-global/url': ['error', 'always']
			}
		}
	}
};
