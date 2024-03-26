'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([1,8,6,2,5,4,8,3,7]),49);
    });
    it('2', () => {
        assert.equal(method([1,1]),1);
    });
});
