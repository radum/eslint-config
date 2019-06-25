module.exports = {
	rules: {
		'callback-return': 0,
		'global-require': 0,
		'handle-callback-err': 2,
		'no-buffer-constructor': 2,
		'no-mixed-requires': [
			'error',
			{
				'grouping': true,
				'allowCall': false
			}
		],
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-process-env': 0,
		'no-process-exit': 2,
		'no-restricted-modules': 0,
		'no-sync': 0
	}
};
