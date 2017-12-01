var Tree = function(value) {
  //begin with a empty object
  var newTree = {};
  //create a property in the object to store the value
  newTree.value = value;

  //create a children property
    //for first call, set to null
  newTree.children = [];  // fix me
  
  extend(newTree, treeMethods);
  //returns object
  return newTree;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

//object to store methods for Tree
var treeMethods = {};

treeMethods.addChild = function(value) {
//create a new node;
//add node to children data structure of new child's parent node (current node);
  //adding node to children array of new child's parent node
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
//search for target value
  //create a function with recursive properties
    //initially invoked with root (store of current node)
    //checks if value = target
      //if true, immediately true;
      //else, check if any children
        //if so, then for in loop of recursive call through current node's children
  //if no more children of any branch, (at bottom of tree) then false
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      } else {
        this.children[i].contains(target);
      }
    }
  }
  return false;
};
  

//contains(root)

/*
 * Complexity: What is the time complexity of the above functions?
 */
