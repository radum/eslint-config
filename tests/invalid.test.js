'use strict';

const test = require('ava');
const ESLint = require('eslint').ESLint;
const configuration = require('..');

const eslintOptions = {
	useEslintrc: false,
	baseConfig: configuration
};

// The source files to lint.
const invalidTestFiles = [
	'./tests/mocks/js-invalid.mock.js'
];

test.before(async (t) => {
	t.context.report = await new ESLint(eslintOptions).lintFiles(invalidTestFiles);
});

test('flags errors with invalid js', (t) => {
	t.assert(t.context.report[0].errorCount === 3);
});

test('flags warnings with invalid js', (t) => {
	t.assert(t.context.report[0].warningCount === 3);
});
