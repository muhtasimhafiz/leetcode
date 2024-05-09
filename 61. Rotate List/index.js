function rotateRight(head, k) {
    if(!head) return head;
    if (!head.next) return head;

    let node = head;
    let length = 0;
    while(node){
        node = node.next;
        length++;
    }

    k %= length;
    count = k;
    let slow = head;
    let fast = head;


    while(count){
        fast = fast.next;
        count--
    }

    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head; 

}

module.exports = rotateRight;