var BinarySearchTree = function(value) {

//search tree object
  var searchTree = Object.create(bSTMethods);

  searchTree.root = new BSTNode(value);
  
  return searchTree;
};

var bSTMethods = {
  insert: function(value) {

  //input is a value
  //output is adding a node to the search tree 
    //each node is an object with properties:
      //left
      //right
      //value
    var traverseForInsert = function (value, currentNode) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          traverseForInsert(value, currentNode.right);
        } else {
          currentNode.right = new BSTNode(value);
        }
      } else {
        if (currentNode.left) {
          traverseForInsert(value, currentNode.left);
        } else {
          currentNode.left = new BSTNode(value);
        }
      }
    };
    traverseForInsert(value, this.root);
  },

  contains: function(value) {
  //input is value
  //output is a boolean
    //start @ root node
    //compare value inputted to value of current node 
    //check if greater or less than value
      //if greater, check if right node exists
        //if so, move to right node and recurse contains
          //after full recursion of tree, return boolean based on whether value found
      //if lesser, check if left node exists
        //if so, move to left node and recurse contains
          //after full recursion of tree, return boolean based on whether value found


  },




  depthFirstLog: function() {

  //input = start @ root node
  //output = array containing all values in the BST
    //create an output array
      //populate it with each traversed value
       //after full traversal, return array

  },

  Node: function(value) {
    return new BSTNode(value);
  }
};


BSTNode = function(value) {
//this = Object.create(BinarySearchTree.prototype)

  this.value = value;
  this.left = null;
  this.right = null;

//return this
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
