'use strict';

var assert = require('assert');
const method = require('../index.js');

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

describe('Tests', () => {
    beforeEach(() => {

    });
    it('1', () => {
        let head = null;
        let n = 1;
        let prev = null;
        while (n <= 4) {
            let node = new ListNode(n);
            n++;
            if (!head) {
                head = node
                prev = node;
                continue;
            };
            prev.next = node;
            prev = node;

        }
        let res_node = method(head);
        let result_array = [];
        while(res_node){
            result_array.push(res_node.val);
            res_node = res_node.next;
        }
        let tru_result = [2,1,4,3];
        assert.deepEqual(tru_result, result_array);
    });
    it('2', () => {

        let head = new ListNode(1);
        let res_node = method(head);
        let result_array = [];
        while (res_node) {
            result_array.push(res_node.val);
            res_node = res_node.next;
        }

        assert.deepEqual(method([1]), result_array);
    });
});
