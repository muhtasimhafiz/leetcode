'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepEqual(method([1,2,3,4]
        ),[24,12,8,6]);
    });
    it('2', () => {
        assert.deepEqual(method([-1,1,0,-3,3]),[0,0,9,0,0]);
    });
});
