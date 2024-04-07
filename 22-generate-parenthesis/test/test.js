'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepEqual(method(3),["((()))","(()())","(())()","()(())","()()()"]);
    });
    it('2', () => {
        assert.deepEqual(method(1),['()']);
    });
});
