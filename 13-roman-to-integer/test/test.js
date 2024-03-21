'use strict';

var assert = require('assert');

const method = require('../index.js');

describe('Tests', function () {
  it('1', function () {
    assert.equal(method('III'), 3);
  });
  it('2', function () {
    assert.equal(method('LVIII'), 58);
  });
  it('3', function () {
    assert.equal(method('MCMXCIV'), 1994);
  });
});