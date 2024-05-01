// Node class
function Node(value) {
  this.value = value;
  this.next = null;
}

// LinkedList class
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Method to add a new node to the end of the list
LinkedList.prototype.addNode = function(value) {
  var newNode = new Node(value);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

// Method to print the list
LinkedList.prototype.printList = function() {
  var currentNode = this.head;
  var result = '';

  while (currentNode !== null) {
    result += currentNode.value + ' -> ';
    currentNode = currentNode.next;
  }

  result += 'null';
  console.log(result);
};

// Example usage
var list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.printList(); // Output: 1 -> 2 -> 3 -> null