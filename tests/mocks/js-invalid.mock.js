'use strict';

const foo =2;
const thing = foo ? 1 : foo === 1 ? 3 : 4;

/**
 * Test JSDoc
 * @param {Number} a Param a
 * @param {number} b Param b
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}

sum (2, 2, { a:1});
sum(1,2)
sum(thing, 2)

let x = {
	a: 1,
};

// Warn
const warn1 = "Test";
const warn2 = 'Test';

(function warn() { return warn1 + warn2 })();
