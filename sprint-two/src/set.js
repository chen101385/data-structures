var Set = function() {
  //creating a new object via prototypal instantiation 
    //storage container
      //first try array
    //return the set
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};
//the prototype stores the methods for each set
  //Object.create establishes the prototype 

setPrototype.add = function(item) {
//input would be a value (string)
//output would be adding the value (string) to the storage container
  //each value is unique
  if (!this.contains(item)) {
    this._storage.push(item);
  }
  
};

setPrototype.contains = function(item) {
//input would be a value (string)
//output would be a boolean
  //T/F depending on whether container has value
  if (this._storage.indexOf(item) !== -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
//input would be a value (string)
//output would be the removal of the value from storage
  //check whether present in set 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
