'use strict';

var assert = require('assert');

const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method(["flower","flow","flight"]),'fl')
    })
    it('2', () => {
        assert.equal(method(["dog","racecar","car"]),'')
    })
})