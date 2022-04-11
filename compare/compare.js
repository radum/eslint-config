'use strict';

// https://github.com/gajus/eslint-config-canonical/tree/master/compare
const ESLint = require('eslint').ESLint;

const getEngineForConfiguration = (configuration) => {
	const engine = new ESLint({
		baseConfig: configuration,
		useEslintrc: false
	});

	return engine;
};

const radumEngine = getEngineForConfiguration({
	extends: [
		'@radum/eslint-config',
		'@radum/eslint-config/node',
		'@radum/eslint-config/avajs',
		'@radum/eslint-config/jest',
		'@radum/eslint-config/react'
	]
});

const canonicalEngine = getEngineForConfiguration({
	extends: [
		'canonical',
		'canonical/ava',
		'canonical/flowtype',
		'canonical/jest',
		'canonical/lodash',
		'canonical/mocha',
		'canonical/react'
	]
});

const airbnbEngine = getEngineForConfiguration({
	extends: ['airbnb']
});

const googleEngine = getEngineForConfiguration({
	extends: ['google']
});

const standardEngine = getEngineForConfiguration({
	extends: ['standard']
});

const kentcdoddsEngine = getEngineForConfiguration({
	extends: ['kentcdodds']
});

const radumEngineRules = radumEngine.getRules();
const canonicalEngineRules = canonicalEngine.getRules();
const airbnbEngineRules = airbnbEngine.getRules();
const googleEngineRules = googleEngine.getRules();
const standardEngineRules = standardEngine.getRules();
const kentcdoddsEngineRules = kentcdoddsEngine.getRules();

const ruleNames = [
	...new Set([
		...radumEngineRules.keys(),
		...canonicalEngineRules.keys(),
		...airbnbEngineRules.keys(),
		...googleEngineRules.keys(),
		...standardEngineRules.keys(),
		...kentcdoddsEngineRules.keys()
	])
].sort();

const getRuleLink = (ruleName, engines) => {
	for (const engine of engines) {
		const subjectRule = engine.getRules().get(ruleName);

		if (
			subjectRule &&
			subjectRule.meta &&
			subjectRule.meta.docs &&
			subjectRule.meta.docs.url
		) {
			return '[`' + ruleName + '`](' + subjectRule.meta.docs.url + ')';
		}
	}

	return '`' + ruleName + '`';
};

const describeRuleValue = (ruleValue) => {
	if (ruleValue === undefined || (Array.isArray(ruleValue) && ruleValue[0] === undefined)) {
		return 'N/A 👻';
	}

	const _ruleValue = Array.isArray(ruleValue) ? ruleValue[0] : ruleValue;

	if (_ruleValue === 0 || _ruleValue === 'off') {
		return 'off';
	}

	if (_ruleValue === 1 || _ruleValue === 'warn') {
		return 'warn ⚠️';
	}

	if (_ruleValue === 2 || _ruleValue === 'error') {
		return 'error 🚨';
	}

	return false;
};

const getRuleConfiguration = (ruleset, ruleName) => {
	const ruleValueDescription = describeRuleValue(ruleset[ruleName]);

	if (ruleValueDescription) {
		return ruleValueDescription;
	}

	return describeRuleValue(ruleset[ruleName][0]);
};

const engines = [radumEngine, canonicalEngine, airbnbEngine, googleEngine, standardEngine, kentcdoddsEngine];

for (const ruleName of ruleNames) {
	// eslint-disable-next-line no-console
	console.log(
		'|' +
			getRuleLink(ruleName, engines) +
			'|' +
			getRuleConfiguration(
				radumEngine.getConfigForFile('./compare.js').rules,
				ruleName
			) +
			'|' +
			getRuleConfiguration(
				canonicalEngine.getConfigForFile('./compare.js').rules,
				ruleName
			) +
			'|' +
			getRuleConfiguration(
				airbnbEngine.getConfigForFile('./compare.js').rules,
				ruleName
			) +
			'|' +
			getRuleConfiguration(
				googleEngine.getConfigForFile('./compare.js').rules,
				ruleName
			) +
			'|' +
			getRuleConfiguration(
				standardEngine.getConfigForFile('./compare.js').rules,
				ruleName
			) +
			'|' +
			getRuleConfiguration(
				kentcdoddsEngine.getConfigForFile('./compare.js').rules,
				ruleName
			) +
			'|'
	);
}
