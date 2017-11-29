var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  stackInstance = {};
  storage = {}; //stackInstance.?
  stackSize = 0; //stackInstance.?
  _.extend(this, stackMethods);
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

