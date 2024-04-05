'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([7,1,5,3,6,4]),5);
    });
    it('2', () => {
        assert.equal(method([7,6,4,3,1]),0);
    });
});
