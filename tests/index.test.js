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
const invalidTestFiles = [
	'./tests/js-invalid.js'
];

describe('flags no errors or warnings with valid js', () => {
	const report = new CLIEngine(eslintOptions).executeOnFiles(validTestFiles);

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

describe('flags errors and warnings with invalid js', () => {
	const report = new CLIEngine(eslintOptions).executeOnFiles(invalidTestFiles);

	it('flags errors', () => {
		expect(report.errorCount).toBe(3);
	});

	it('flags warnings', () => {
		expect(report.warningCount).toBe(0);
	});
});
