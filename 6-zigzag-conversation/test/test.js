'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method('PAYPALISHIRING',3),'PAHNAPLSIIGYIR');
    });
    it('2', () => {
        assert.equal(method('PAYPALISHIRING',4),'PINALSIGYAHRPI');
    });
});
