import plugin from 'eslint-plugin-ava';
const { configs } = plugin;

export default {
	configs: {
		'flat/recommended': {
			plugins: { ava: plugin },
			rules: configs.recommended.rules
		}
	}
};
