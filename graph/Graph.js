class Graph {
  constructor(isDirected = false) {
    this.vertices = [];
    this.adjacencyList = {};
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight = 1) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].push({ vertex: vertex2, weight });

    if (!this.isDirected) {
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }
  }


  getVertices() {
    return this.vertices;
  }

  getEdges(vertex) {
    return this.adjacencyList[vertex];
  }

  print() {
    let result = '';
    for (let vertex of this.vertices) {
      result += `${vertex} -> `;
      for (let edge of this.adjacencyList[vertex]) {
        result += `${edge.vertex}(${edge.weight}) `;
      }
      result += '\n';
    }
    console.log(result);
  }
}

module.exports = Graph;