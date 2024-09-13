import plugin from 'eslint-plugin-jest';
const { configs } = plugin;

export default {
	configs: {
		'flat/recommended': {
			plugins: { jest: plugin },
			rules: configs.recommended.rules
		}
	}
};
