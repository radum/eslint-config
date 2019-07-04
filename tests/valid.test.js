const test = require('ava');
const CLIEngine = require('eslint').CLIEngine;
const configuration = require('..');

const eslintOptions = {
	useEslintrc: false,
	baseConfig: configuration
};

// The source files to lint.
const validTestFiles = [
	'./tests/js-valid.js'
];

test.before((t) => {
	t.context.report = new CLIEngine(eslintOptions).executeOnFiles(validTestFiles);
});

test('flags no errors with valid js', (t) => {
	t.assert(t.context.report.errorCount === 0);
});

test('flags no warnings with valid js', (t) => {
	t.assert(t.context.report.warningCount === 0);
});
