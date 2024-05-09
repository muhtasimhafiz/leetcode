'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepEqual(method([0,1,0,3,12]),[1,3,12,0,0]);
    });
    it('2', () => {
        assert.deepEqual(method([0]),[0]);
    });

    it('3', () => {
        assert.deepEqual(method([0,0,1]
        ),[1,0,0]);
    });
});
