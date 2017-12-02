

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
  //no bucket yet
  var boolean = false;

  if (!this._storage[index]) {
    this._storage[index] = [[k, v]];
  }  

  //if bucket & 1+ tuple that collide
  if (this._storage[index].length) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        boolean = true;
      }
    }
  }
  //if empty bucket or no overlap
  if (!this._storage[index].length || !boolean) {
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//taking in a key (k)
  //go to the index assigned to key in hash function
  //return the tuple @ index
//ADD TEST check whether index occupied
  if (this._storage[index]) {
    if (this._storage[index].length) {
      for (var i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === k) {
          return this._storage[index][i][1];
        }
      }
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//taking in a key (k)
  //going to index assigned to key in hash function
  //if first tuple's value = key, remove tuple
    //if first tuple's value doe not equal key, then search remaining tuples;
  if (this._storage[index].length) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].splice(this._storage[index].indexOf(this._storage[index][i]), 1);
//I suspect that bucket [steven, tyler], instead of [[steven, tyler]]
//if bucket is nested, [index][i]
  //if bucket has 1 value [index]
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: constant
retrieve: constant
remove: constant

 */


