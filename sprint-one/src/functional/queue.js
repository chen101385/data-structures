var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //we are going to need some way to store length
  storage.size = 0;
  storage.counter = 0;
  storage.firstItemIndex = 0;
  someInstance.enqueue = function(value) {
    //add a value to the end of the queue
    //then length++
    storage.counter++;
    storage.size++;
    storage[storage.counter] = value;
    if (storage.firstItemIndex === 0) {
      storage.firstItemIndex++;
    }
  };

  someInstance.dequeue = function() {
    //take the first item off the beginning of the queue.
    // then length --
    if (storage.size > 0) {
      var temp = storage[storage.firstItemIndex];
      storage[storage.firstItemIndex] = undefined;
      storage.firstItemIndex++;
      storage.size--;
      return temp;
    }
    // How do we get off the first item. We created a new firstitemindex variable 
    //also think about what to do if storage is less than 0;
  };

  someInstance.size = function() {
    //return the length of the queue
    return storage.size; //does it have to return though?
  };

  return someInstance;
};
