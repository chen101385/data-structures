

// Instantiate a new graph
var Graph = function() {

//this = Object.create(Graph.prototype)
//add node container array
//add edges array
//return this
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
//add a node within node container object
  //check whether a node already exists;
  if (!this.contains(node)) {


    this.nodes.push(node);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
//check node container object for the node (v)
  //indexOf (if not present = -1)
  if (this.nodes.indexOf(node) === -1) {
    return false;
  } 
  return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
//check whether node exists in collection
  //if exists, remove it
  if (this.contains(node)) {
    for (var i = 0; i < this.nodes.length; i++) {
      //if (condition)
        //if (ab) - remove ab
        //if (ba) - remove ba 
      if (this.hasEdge(node, this.nodes[i])) {
        //checker for which one
        if (this.edges.indexOf(JSON.stringify(node).concat(JSON.stringify(this.nodes[i]))) !== -1) {
          this.edges.splice(this.edges.indexOf(JSON.stringify(node).concat(JSON.stringify(this.nodes[i]))), 1);
        } else {
          this.edges.splice(this.edges.indexOf(JSON.stringify(this.nodes[i]).concat(JSON.stringify(node))), 1);
        }
        //this.edges.splice(this.edges.indexOf(JSON.stringify(node).concat(JSON.stringify(this.nodes[i]))), 1);
      }
      //if (this.hasEdge(this.nodes[i], node)) {
        //this.edges.splice(this.edges.indexOf(JSON.stringify(this.nodes[i]).concat(JSON.stringify(node))), 1);
      //}
    }
    this.nodes.splice(this.nodes.indexOf(node), 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
//convert inputs (fromNode, toNode) to an edge (i.e. AB)
  //check if contains fromNode & toNode
    //if exists, stringify & concatenate
//check whether the edge (i.e. AB) is in the array;
  //check reverse (AB,BA) for completeness
  if (this.contains(fromNode) && this.contains(toNode)) {
    var edge1 = JSON.stringify(fromNode).concat(JSON.stringify(toNode));
    var edge2 = JSON.stringify(toNode).concat(JSON.stringify(fromNode));
    if (this.edges.indexOf(edge1) === -1 && this.edges.indexOf(edge2) === -1) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
//check whether edge exists (hasEdge)
  //if not, then add edge by concatenating fromNode & toNode
  if (!this.hasEdge(fromNode, toNode)) {
    this.edges.push(JSON.stringify(fromNode).concat(JSON.stringify(toNode)));
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//check for edge, (hasEdge(fromNode,toNode)); returns boolean;
  //if present, traverse for both directions (i.e. AB & BA) and remove any/all.
  if (this.hasEdge(fromNode, toNode)) {
    this.edges.splice(this.edges.indexOf(JSON.stringify(fromNode).concat(JSON.stringify(toNode))), 1);
  }
};

//Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
//run forEach on the node array with the callback function passed in
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


