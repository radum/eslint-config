'use strict';

module.exports = {
	plugins: [
		'jsdoc'
	],
	extends: [
		'plugin:jsdoc/recommended'
	],
	settings: {
		jsdoc: {
			mode: 'typescript'
		}
	}
};
