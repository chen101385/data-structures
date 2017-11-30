var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //unseen 'this = Object.create(Stack.prototype)'
  // Use an object with numeric keys to store values
  this.storage = {};

  // Implement the methods below
  //three variables;
    //quantity measures the number of items in the queue
    //counter measures the key (#) of the last item in the queue
    //firstItemKey is the key (#) of the current first item in the queue
  this.quantity = 0;
  this.counter = 0;
  this.firstItemKey = 0;
};

//add all methods to queue prototype object to be accessible to all instances
Queue.prototype.enqueue = function(value) {
  //add a value to the end of the queue
  //counter increments because the item we add to the end of the queue has a key of +1 from previous last item;
  //quantity increments because we increase the number of items by 1
  //if queue is empty, for the first instant/call, we increase the firstItemKey by 1, since the first item's key will be 1;
  this.counter++;
  this.quantity++;
  this.storage[this.counter] = value;
  if (this.firstItemKey === 0) {
    this.firstItemKey++;
  }
};

Queue.prototype.dequeue = function() {
  //take the first item off the beginning of the queue.
  // then length --
  //if quantity is greater than 0 (not empty queue),
    //we store the item in the first position into a temp variable (to be later returned)
    //we set the value of the first item currently in the queue to undefined in order to remove it
    //we increase the firstItemKey by 1 because the new first item will have a key of +1 from removed item
    //we reduce the quantity by 1, since we removed an item
    //we return temp in order to mirror the .pop method of stack 
  if (this.quantity > 0) {
    var temp = this.storage[this.firstItemKey];
    this.storage[this.firstItemKey] = undefined;
    this.firstItemKey++;
    this.quantity--;
    return temp;
  }
};

Queue.prototype.size = function() {
  //return the length of the queue
  return this.quantity; 
};



