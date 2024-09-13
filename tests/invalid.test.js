import test from 'ava';
import pkg from 'eslint/use-at-your-own-risk';
import configuration from '../index.js';
// const test = require('ava');
// const ESLint = require('eslint').ESLint;
// const configuration = require('..');

const eslintOptions = {
	overrideConfigFile: true,
	baseConfig: configuration
};

const { FlatESLint } = pkg;
const eslint = new FlatESLint(eslintOptions);

// The source files to lint.
const invalidTestFiles = ['./tests/mocks/js-invalid.mock.js'];

test.before(async (t) => {
	t.context.report = await eslint.lintFiles(invalidTestFiles);
});

test('flags errors with invalid js', (t) => {
	t.assert(t.context.report[0].errorCount === 12);
});

test('flags warnings with invalid js', (t) => {
	t.assert(t.context.report[0].warningCount === 1);
});
