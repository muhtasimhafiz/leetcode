function mergeTwoLists(list1, list2) {
    if (!list1) return list2; // If list1 is empty, return list2
    if (!list2) return list1; // If list2 is empty, return list1

    let head = null; // Initialize the head of the new list
    let prev = null; // Keeps track of the last node added to the new list

    // Choose the head of the new list
    if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }
    prev = head;

    // Merge the lists
    while (list1 && list2) {
        if (list1.val < list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    // Attach any remaining elements
    if (list1) {
        prev.next = list1;
    } else if (list2) {
        prev.next = list2;
    }

    return head; // Return the head of the merged list
}
