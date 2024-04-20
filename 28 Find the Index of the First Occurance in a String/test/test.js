'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method('sadbutsad','sad'),'0');
    });
    it('2', () => {
        assert.equal(method('leetcode','leeto'),-1);
    }); 
    it('3', () => {
        assert.equal(method('hello','ll'),2);
    }); 
});
