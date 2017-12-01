

var HashTable = function() {
//limit preset @ 8 for storage array
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//taking in a key (k) and a value (v)
  //already have index;
  //at index of storage array, assign 'tuple' to index of storage array 
    //for assigned tuple, index 0 is key; index 1 is value;
  this._storage[index] = [k, v];
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//taking in a key (k)
  //go to the index assigned to key in hash function
  //return the tuple @ index
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//taking in a key (k)
  //going to index assigned to key in hash function
  //if first tuple's value = key, remove tuple
    //if first tuple's value doe not equal key, then search remaining tuples;
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: constant
retrieve: constant
remove: constant

 */


