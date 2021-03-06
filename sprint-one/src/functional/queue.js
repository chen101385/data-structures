var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //three variables;
    //quantity measures the number of items in the queue
    //counter measures the key (#) of the last item in the queue
    //firstItemKey is the key (#) of the current first item in the queue
  var quantity = 0;
  var counter = 0;
  var firstItemKey = 0;

  someInstance.enqueue = function(value) {
    //add a value to the end of the queue
    //counter increments because the item we add to the end of the queue has a key of +1 from previous last item;
    //quantity increments because we increase the number of items by 1
    //if queue is empty, for the first instant/call, we increase the firstItemKey by 1, since the first item's key will be 1;
    counter++;
    quantity++;
    storage[counter] = value;
    if (firstItemKey === 0) {
      firstItemKey++;
    }
  };

  someInstance.dequeue = function() {
    //take the first item off the beginning of the queue.
    // then length --
    //if quantity is greater than 0 (not empty queue),
      //we store the item in the first position into a temp variable (to be later returned)
      //we set the value of the first item currently in the queue to undefined in order to remove it
      //we increase the firstItemKey by 1 because the new first item will have a key of +1 from removed item
      //we reduce the quantity by 1, since we removed an item
      //we return temp in order to mirror the .pop method of stack 
    if (quantity > 0) {
      var temp = storage[firstItemKey];
      storage[firstItemKey] = undefined;
      firstItemKey++;
      quantity--;
      return temp;
    }
    // How do we get off the first item. We created a new firstitemindex variable 
    //also think about what to do if storage is less than 0;
  };

  someInstance.size = function() {
    //return the length of the queue
    return quantity; //does it have to return though?
  };

  return someInstance;
};
