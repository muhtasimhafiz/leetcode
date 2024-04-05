'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([-1,2,1,-4],1),2);
    });
    it('2', () => {
        assert.equal(method([0,0,0],1),0);
    });
});
