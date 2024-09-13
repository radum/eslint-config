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
const validTestFiles = ['./tests/mocks/js-valid.mock.js'];

test.before(async (t) => {
	t.context.report = await eslint.lintFiles(validTestFiles);
});

test('flags no errors with valid js', (t) => {
	t.assert(t.context.report[0].errorCount === 0);
});

test('flags no warnings with valid js', (t) => {
	t.assert(t.context.report[0].warningCount === 0);
});
