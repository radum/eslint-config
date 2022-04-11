const path = require('path');
const test = require('ava');
const ESLint = require('eslint').ESLint;

const eslintOptions = {
	useEslintrc: false,
	baseConfig: {
		'extends': [
			path.resolve('./index.js'),
			path.resolve('./react.js')
		],
		'parserOptions': {
			'ecmaVersion': 'latest',
			'sourceType': 'module',
			'ecmaFeatures': {
				'jsx': true
			}
		},
		'env': {
			'browser': true,
			'es2021': true,
			'node': false
		}
	}
};

// The source files to lint.
const validTestFiles = [
	'./tests/mocks/react-valid.jsx'
];

test.before(async (t) => {
	t.context.report = await new ESLint(eslintOptions).lintFiles(validTestFiles);
});

test('flags no errors with valid js', (t) => {
	t.assert(t.context.report[0].errorCount === 1);
});

test('flags no warnings with valid js', (t) => {
	t.assert(t.context.report[0].warningCount === 0);
});
