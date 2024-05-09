'use strict';

var assert = require('assert');
const {fib, fibRecursion} = require('../index.js');

describe('Fib', () => {
    it('1', () => {
        assert.equal(fib(6),8);
    });
    it('2', () => {
        assert.equal(fib(2),1);
    });
});

describe('FibRecursion', () => {
    it('1', () => {
        assert.equal(fibRecursion(6),8);
    });
    it('2', () => {
        assert.equal(fibRecursion(2),1);
    });
});
