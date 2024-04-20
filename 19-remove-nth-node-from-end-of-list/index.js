function removeNthFromEnd(head, n){
    if(n===0) return head;
    if(!head.next && n===1) return null;
    let node = head;
    let slow_node = head;
    let count = 0;
    while (node.next){
        node = node.next;
        if(count >= n) {
            slow_node = slow_node.next;
        }
        count++; 
    }

    if(count < n) return head.next;

    node = null;
    if(slow_node.next) node = slow_node.next.next;
    slow_node.next = node;

    return head;
}

module.exports = removeNthFromEnd;