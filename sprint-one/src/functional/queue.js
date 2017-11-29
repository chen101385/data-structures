var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //we are going to need some way to store length
  storage.size = 0;
  someInstance.enqueue = function(value) {
    //add a value to the end of the queue
    //then length++
    storage.size++;
    storage[storage.size] = value;
  };

  someInstance.dequeue = function() {
    //take the first item off the beginning of the queue.
    // then length --
    storage.size--;
  };

  someInstance.size = function() {
    //return the length of the queue
    return storage.size;
  };

  return someInstance;
};
