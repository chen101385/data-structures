

// Instantiate a new graph
var Graph = function() {

//this = Object.create(Graph.prototype)
//add node container array
//add edges array

//return this
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
//add a node within node container object
  //check whether a node already exists;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
//check node container object for the node (v)
  //indexOf (if not present = -1)
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
//check whether node exists in collection
  //if exists, remove it
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
//convert inputs (fromNode, toNode) to an edge (i.e. AB)
//check whether the edge (i.e. AB) is in the array;
  //check reverse (AB,BA) for completeness
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
//check whether edge exists (hasEdge)
  //if not, then add edge by concatenating fromNode & toNode
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//check for edge, (hasEdge(fromNode,toNode)); returns boolean;
  //if present, traverse for both directions (i.e. AB & BA) and remove any/all.
};

//Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
//run forEach on the node array with the callback function passed in
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


