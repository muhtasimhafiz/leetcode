'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepStrictEqual(method([-1,0,1,2,-1,-4]),[[-1,-1,2],[-1,0,1]]);
    });
    it('2', () => {
        assert.deepStrictEqual(method([0,1,1]),[]);
    });
});
