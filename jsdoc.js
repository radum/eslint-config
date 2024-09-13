import plugin from 'eslint-plugin-jsdoc';
const { configs } = plugin;

export default {
	configs: {
		'flat/recommended-error': {
			plugins: { jsdoc: plugin },
			rules: configs['recommended-error'].rules
		},
		'flat/recommended-typescript-error': {
			plugins: { jsdoc: plugin },
			rules: configs['recommended-typescript-error'].rules
		}
	}
};
