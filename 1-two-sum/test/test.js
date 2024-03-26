'use strict';

var assert = require('assert');

const method = require('../index.js');

describe('Tests', function () {
  it('1', function () {
    assert.deepStrictEqual(method([2,7,11,15],9), [0,1]);
  });
  it('2', function () {
    assert.deepStrictEqual(method([3,2,4],6), [1,2]);
  });
});
