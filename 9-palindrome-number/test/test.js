'use strict';

var assert = require('assert');

const isPalindrome = require('../index.js');

describe('Tests', function () {
  it('1', function () {
    assert.equal(isPalindrome(121), true);
  });
  it('2', function () {
    assert.equal(isPalindrome(10), false);
  });
});