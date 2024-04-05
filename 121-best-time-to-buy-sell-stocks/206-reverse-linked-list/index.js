function reverseList(head) {
    if (!head) return null;
    let prev = null;
    let node = head;
    prev.next = null
    while (node) {
        let tempNode = node
        node = node.next;
        tempNode.next = prev
        prev = node;
    }
    if (prev) return prev;
    return head;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


module.exports = method;