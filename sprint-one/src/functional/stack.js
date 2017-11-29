var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.howBig = 0;
  // Implement the methods below
  
  someInstance.push = function(value) {
    storage.howBig++;
    storage[storage.howBig] = value;
  };

  someInstance.pop = function() {
    if (storage[storage.howBig]) {
      var temp = storage[storage.howBig];
      storage[storage.howBig] = undefined;
      storage.howBig--;
      return temp;
    } 
  };

  someInstance.size = function() {
    return storage.howBig;
  };

  return someInstance;
};
