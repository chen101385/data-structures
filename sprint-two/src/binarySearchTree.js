var BinarySearchTree = function(value) {

//search tree object
  var searchTree = Object.create(bSTMethods);

  searchTree.left = null;
  searchTree.right = null;
  searchTree.value = value;
  
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
    traverseForInsert(value, this);
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
    var isPresent = false;
    var traverseForContains = function (value, currentNode) {
      if (value === currentNode.value) {
        isPresent = true;
      }
      if (!isPresent) {
        if (value > currentNode.value) {
          if (currentNode.right) {
            traverseForContains(value, currentNode.right);
          }
        } 
        if (value < currentNode.value) {
          if (value < currentNode.left) {
            traverseForContains(value, currentNode.left);
          }
        }
      } 
    };
    traverseForContains(value, this);
    return isPresent;
  },




  depthFirstLog: function(callBack) {
    
  //input = start @ root node
  //output = array containing all values in the BST
    //create an output array
      //populate it with each traversed and callbacked value
       //after full traversal, return array
    var traverseForDepthFirstLog = function (currentNode) {
      callBack(currentNode.value);
      if (currentNode.left) {
        traverseForDepthFirstLog(currentNode.left);
      }
      if (currentNode.right) {
        traverseForDepthFirstLog(currentNode.right);
      }

    };
    traverseForDepthFirstLog(this);
  }
};


BSTNode = function(value) {
//this = Object.create(BinarySearchTree.prototype)

  this.value = value;
  this.left = null;
  this.right = null;

//return this
};

//var binarySearchTree = BinarySearchTree( _____)

/*
 * Complexity: What is the time complexity of the above functions?
insert:
contains:
depthFirstLog:
 */
