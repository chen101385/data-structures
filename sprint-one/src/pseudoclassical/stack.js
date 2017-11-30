var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //unseen 'this = Object.create(Stack.prototype)'
  // Use an object with numeric keys to store values
  this.storage = {};
  //create a variable for how big the stack is
  this.howBig = 0;
};

//add all methods to stack prototype object to be accessible to all instances
Stack.prototype.push = function(value) {
  //count bigger
  //assign count as a key for value in storage
  this.howBig++;
  this.storage[this.howBig] = value;
};

Stack.prototype.pop = function() {
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
};

Stack.prototype.size = function() {
  //return count
  return this.howBig;
};

