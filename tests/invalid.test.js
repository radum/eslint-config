const test = require('ava');
const CLIEngine = require('eslint').CLIEngine;
const configuration = require('..');

const eslintOptions = {
	useEslintrc: false,
	baseConfig: configuration
};

// The source files to lint.
const invalidTestFiles = [
	'./tests/js-invalid.js'
];

test.before((t) => {
	t.context.report = new CLIEngine(eslintOptions).executeOnFiles(invalidTestFiles);
});

test('flags errors with invalid js', (t) => {
	t.assert(t.context.report.errorCount === 3);
});

test('flags warnings with invalid js', (t) => {
	t.assert(t.context.report.warningCount === 0);
});
