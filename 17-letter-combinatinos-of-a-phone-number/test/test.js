'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepEqual(method('23'),["ad","ae","af","bd","be","bf","cd","ce","cf"]
    );
    });
    it('2', () => {
        assert.deepEqual(method('2'),["a","b","c"]
    );
    });
});
