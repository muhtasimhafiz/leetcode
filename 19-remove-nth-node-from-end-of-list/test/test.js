'use strict';

var assert = require('assert');
const method = require('../index.js');

function ListNode(val, next) {
    this.val =  (val===undefined ? 0 : val)
    this.next = (next === undefined ?null : next)
}

describe('Tests', () => {
    it('1', () => {
        let head = new ListNode(1);
        let node = new ListNode(2);
        head.next = node;
        node.next = new ListNode(3);
        node = node.next;
        node.next = new ListNode(4);
        node = node.next;
        node.next = new ListNode(5);

        // let input = [1,2,3,4,5];
        let output = [1,2,3,5];
        let res = method(head, 2);
        let resArr = [];
        while(res){
            resArr.push(res.val);
            res = res.next;
        }

        assert.deepEqual(output,resArr);
    });
    it('2', () => {
        let head = new ListNode(1);
        let res = method(head, 1);
        let output = [];
        let resArr = [];
        while(res){
            resArr.push(res.val);
            res = res.next;
        }
        assert.deepEqual(output,resArr);
    });

    it('3', () => {
        let head = new ListNode(1);
        head.next = new ListNode(2);
        let res = method(head, 1);
        let output = [1];
        let resArr = [];
        while(res){
            resArr.push(res.val);
            res = res.next;
        }
        assert.deepEqual(output,resArr);
    });   
    
    it('4', () => {
        let head = new ListNode(1);
        head.next = new ListNode(2);
        let res = method(head, 2);
        let output = [2];
        let resArr = [];
        while(res){
            resArr.push(res.val);
            res = res.next;
        }
        assert.deepEqual(output,resArr);
    });
});
