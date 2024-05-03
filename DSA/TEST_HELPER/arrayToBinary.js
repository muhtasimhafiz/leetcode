function BinaryTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function arrayToBinary(array) {
  if(array.length < 1) return null;
  let binaryTree = new BinaryTree(array[0]);
  let queue = [binaryTree];
  let i = 1;
  while (queue.length > 0 && i < array.length) {
    let node = queue.shift();
    if (array[i] !== null) {
      node.left = new BinaryTree(array[i]);
      queue.push(node.left);
    }
    i++;
    
    if(i > array.length - 1) return binaryTree;

    if (array[i] !== null) {
      node.right = new BinaryTree(array[i]);
      queue.push(node.right);
    }
    i++;
  }
  return binaryTree;
}

module.exports = arrayToBinary;