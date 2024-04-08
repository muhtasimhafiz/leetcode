'use strict';

var assert = require('assert');
const method = require('../index.js');
const { listenerCount } = require('process');

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

describe('Tests', () => {
    it('1', () => {
        let head = new ListNode();
        head.val = 3;
        head.next = new ListNode(2)
        let node = head.next;
        node.next = new ListNode(0);
        node = node.next;
        node.next = new ListNode(4, head.next);
        assert.equal(method(head),true);
    });
    it('2', () => {
        let head = new ListNode(1);
        head.next = new ListNode(2, head)
        assert.equal(method(head),true);
    });
});
