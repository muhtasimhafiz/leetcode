function swapPairs(head){
    if(!head) return head;
    if(!head.next) return head;

    let node = head.next;
    let parent = head;
    let grandparent = null;
    head = node;

    while(node && parent){
        [node.next, parent.next] = [parent, node.next];
        if(grandparent){
            grandparent.next = node
        }
        grandparent = parent;
        parent = parent.next;
        if(parent){
            node = parent.next;
            continue;
        }
        break;
    }
    return head;
}


module.exports = swapPairs;