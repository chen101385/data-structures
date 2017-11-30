var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  //create a counter for how big the stack is
  someInstance.howBig = 0;

  return someInstance;
  //return instance of stack constructor function
};



//create a methods object for all instances of stack
var stackMethods = {
  push: function(value) {
    //count bigger
    //assign count as a key for value in storage
    this.howBig++;
    this.storage[this.howBig] = value;
  },
  pop: function() {
    //check for 0 length, can't pop empty stack
    //create a pointer toward current last stack item
    // remove last stack item by setting value to undefined
    // lower count
    //return pointer
    if (this.storage[this.howBig]) {
      var temp = this.storage[this.howBig];
      this.storage[this.howBig] = undefined;
      this.howBig--;
      return temp;
    } 
  },
  size: function() {
    //return count
    return this.howBig;
  }
};




