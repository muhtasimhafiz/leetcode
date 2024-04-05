'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([-1,0,3,5,9,12],9),4);
    });
    it('2', () => {
        assert.equal(method([-1,0,3,5,9,12],2),-1);
    });
});
