var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.howBig = 0;
  // Implement the methods below

  extend(someInstance, stackMethods);
 

  return someInstance;
  //return instance of stack constructor function
};


var extend = function(obj1, obj2) {
//copy all properties from obj2 (source AKA stackMethods) to obj1 (destination AKA instance)
//use a for-in loop on obj2 
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

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

// var stackMethods = {

//   push = function(value){// push function, use this
//     this.stackSize++;
//     this.storage[this.stackSize] = value;

//   }
//   //pop = function(){//pop function, use this

//   }
//   size = function(){//size function, use this
//     return this.stackSize;

//   }
// };

