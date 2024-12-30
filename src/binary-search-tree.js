const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {

    this.rootEl = addWithin(this.rootEl, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWhithin(this.rootEl, data);

    function searchWhithin(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return data < node.data ? searchWhithin(node.left, data) : searchWhithin(node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootEl = removeNode(this.rootEl, data);
    
    function removeNode(node, data) {
      if (!node) {
        return null;
      } 

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } 

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        
        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootEl) return;
    
    let node = this.rootEl;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootEl) return;

    let node = this.rootEl;

    while (node.right) {
      node = node.right;
    }

    return node.data;

  }
}

module.exports = {
  BinarySearchTree
};