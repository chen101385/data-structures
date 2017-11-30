var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check if current is tail and if exists
      //if tail doesn't exist, then head & tail are equal to new node;
    //then find tail if needed
    //create node
      //set value to new node value
      //set current/previous tail's pointer to new node
      //set list tail to new node
    if (list.tail) {
      
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    
    } else {
      list.head = Node(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function() {
    //check if current head exists
    //if so
        //set current head's value to null
          //effect of removing node from list
        //set list head to next node
          //next node is pointed to in current node
        //set current node next to null. Necessary?
    //otherwise, nothing
    if (list.head) {
      var currentHead = list.head.value;
      list.head.value = undefined;
      list.head = list.head.next;
      return currentHead;
    }
      
  };

  list.contains = function(target) {
    //traverse linked list
      //if no head (empty), return false;
      //create var current
      //check each currentnode value === target
        //if so, return true
        //if not, move current to current next
        //if none, return false
    var boolean = false;
    if (!list.head) {
      return boolean; 
    }

    var searchNodes = function(node) {
      var currentNode = node;
      if (currentNode.value === target) {
        boolean = true;
      } else {
        if (currentNode.next) {
          searchNodes(currentNode.next);
        }
      }
    };
    
    searchNodes(list.head);
    return boolean;
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
