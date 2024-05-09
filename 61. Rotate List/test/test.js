'use strict';

var assert = require('assert');
const method = require('../index.js');

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

describe('Tests', () => {
    it('1', () => {
        let arr = [1, 2, 3, 4, 5];
        let head = new ListNode(arr[0]);
        let node = head;
        for (let i = 1; i < arr.length; i++) {
            node.next = new ListNode(arr[i]);
            node = node.next;
        }

        let k = 2;
        let res = method(head, k);
        let resArr = [];

        let resNode = res;

        while (resNode) {
            resArr.push(resNode.val);
            resNode = resNode.next;
        }

        // correct output
        let output = [4, 5, 1, 2, 3]
        assert.deepEqual(output, resArr);
    });
    it('2', () => {
        let arr = [0, 1, 2];
        let head = new ListNode(arr[0]);
        let node = head;
        for (let i = 1; i < arr.length; i++) {
            node.next = new ListNode(arr[i]);
            node = node.next;
        }

        let k = 4;
        let res = method(head, k);
        let resArr = [];
        let resNode = res;
        while (resNode) {
            resArr.push(resNode.val);
            resNode = resNode.next;
        }

        // correct output
        let output = [2,0,1]
        assert.deepEqual(output, resArr)
    });
});
