'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([1,3,5,6],5),2);
    });
    it('2', () => {
        assert.equal(method([1,3,5,6],2),1);
    });
    it('3', () => {
        assert.equal(method([1,3,5,6],7),4);
    });
    it('4', () => {
        assert.equal(method([1,3],2),1);
    });
});
