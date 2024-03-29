'use strict';

var assert = require('assert');
const method = require('../index.js');


describe('Tests', () => {
    it('1', () => {
        const result = method(["eat","tea","tan","ate","nat","bat"]);
        assert.strictEqual(result.length, 3); // Expect 3 groups
        assert(result.some(group => deepArrayEqual(group, ["bat"])));
        assert(result.some(group => deepArrayEqual(group.sort(), ["nat","tan"].sort())));
        assert(result.some(group => deepArrayEqual(group.sort(), ["ate","eat","tea"].sort())));
    });

    it('2', () => {
        assert.deepStrictEqual(method([""]), [[""]]); // Single group with an empty string
    });

    it('3', () => {
        assert.deepStrictEqual(method(["a"]), [["a"]]); // Single group with a single character
    });

    it('4', () => {
        const result = method(["abc","cba"]);
        assert.strictEqual(result.length, 1); // Expect 1 group
        assert(deepArrayEqual(result[0].sort(), ["abc","cba"].sort())); // The order within a group shouldn't matter
    });
    
    
});

function deepArrayEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) return false;
    }
    return true;
}
