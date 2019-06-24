const CLIEngine = require('eslint').CLIEngine;
const configuration = require('../index');

const eslintOpts = {
	useEslintrc: false,
	envs: ['node', 'browser'],
	parserOptions: { ecmaVersion: 2019, sourceType: 'module' },
	rules: configuration.rules
};

// The source files to lint.
const testFiles = [
	'./tests/js-valid.js',
	'index.js'
];

describe('flags no errors or warnings with valid js', () => {
	const report = new CLIEngine(eslintOpts).executeOnFiles(testFiles);


	it('flags no errors', () => {
		expect(report.errorCount).toBe(0);
	});

	it('flags no warnings', () => {
		expect(report.warningCount).toBe(0);
	});

	// TODO: Fix this test
	// repoFiles.forEach((file, index) => {
	// 	assert(report.results[index].filePath.endsWith(file));
	// });
});
