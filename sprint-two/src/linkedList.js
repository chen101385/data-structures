var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check if current is tail and if exists
      
    //then find tail if needed
    //create node
        //set value to new node value
    //set current tail pointer to new node
    //set list tail to new node

  };

  list.removeHead = function() {
    //check if current head exists
    //if so
        //set value to null
        //set list head to next node
        //set current node next to null. Necessary?
    //otherwise, nothing
    
  };

  list.contains = function(target) {
    
    //traverse linked list
      //create var current
      //check each currentnode value === target
        //if so, return true
        //if not, move current to current next
      //if none, return false

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
