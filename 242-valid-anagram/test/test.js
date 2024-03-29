'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method('nagaram','anagram'),true);
    });
    it('2', () => {
        assert.equal(method('rat','car'),false);
    });
});
