'use strict';

var assert = require('assert');
const { quickSort, mergeSort, insertionSort } = require('../index.js');

console.log(quickSort)
describe('Quicksort', () => {
    it('1', () => {
        let arr = [6, 3, 5, 1, 4]
        quickSort(arr)
        assert.deepEqual(arr, [1, 3, 4, 5, 6]);
    });
    it('2', () => {
        let arr = [10, 9, 8, 7, 6, 5]
        quickSort(arr)
        assert.deepEqual(arr, [5, 6, 7, 8, 9, 10]);
    });
});
describe('MergeSort', () => {
    it('1', () => {
        let arr = [6, 3, 5, 1, 4]
        mergeSort(arr)
        assert.deepEqual(arr, [1, 3, 4, 5, 6]);
    });
    it('2', () => {
        let arr = [10, 9, 8, 7, 6, 5]
        mergeSort(arr)
        assert.deepEqual(arr, [5, 6, 7, 8, 9, 10]);
    });
});
describe('InsertionSort', () => {
    it('1', () => {
        let arr = [6, 3, 5, 1, 4]
        insertionSort(arr)
        assert.deepEqual(arr, [1, 3, 4, 5, 6]);
    });
    it('2', () => {
        let arr = [10, 9, 8, 7, 6, 5]
        insertionSort(arr)
        assert.deepEqual(arr, [5, 6, 7, 8, 9, 10]);
    });
});
