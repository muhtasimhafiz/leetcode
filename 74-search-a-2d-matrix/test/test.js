'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3),true);
    });
    it('2', () => {
        assert.equal(method([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13),false);
    });
    it('3', () => {
        assert.equal(method([[1]],2),false);
    });
    it('4', () => {
        assert.equal(method([[1,3,5]],1),true);
    });
});
