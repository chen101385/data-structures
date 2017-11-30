var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var howBig = 0;
  // Implement the methods below
  
  
  someInstance.push = function(value) {
    //count bigger
    //assign count as a key for value in storage
    howBig++;
    storage[howBig] = value;
  };

  someInstance.pop = function() {
    //check for 0 length, can't pop empty stack
    //create a pointer toward current last stack item
    // remove last stack item by setting value to undefined
    // lower count
    //return pointer
    if (storage[howBig]) {
      var temp = storage[howBig];
      storage[howBig] = undefined;
      howBig--;
      return temp;
    } 
  };

  someInstance.size = function() {
    //return count
    return howBig;
  };

  return someInstance;
  //return instance of stack constructor function
};
