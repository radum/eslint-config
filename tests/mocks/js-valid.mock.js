/* eslint-disable strict */
const foo = 2;

/**
 * Test JSDoc
 *
 * @param {number} a Param a
 * @param {number} b Param b
 * @returns {number} A number
 */
function sum(a, b) {
	return a + b;
}

sum(foo, 2);

const set1 = new Set([1, 2, 3, 4, 5]);

set1.has(1);
