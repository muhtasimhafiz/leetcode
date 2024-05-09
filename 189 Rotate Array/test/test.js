'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepEqual(method([1,2,3,4,5,6,7], 3), [5,6,7,1,2,3,4]);
    });
    it('2', () => {
        assert.deepEqual(method([-1,-100,3,99],2),[3,99,-1,-100]);
    });
});
