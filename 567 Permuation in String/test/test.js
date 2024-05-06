'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method('ab','eidbaooo'),true);
    });
    it('2', () => {
        assert.equal(method('ab','eidboaoo'),false);
    });
});
