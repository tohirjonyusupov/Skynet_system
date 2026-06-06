class Prim {
  static primMST(graph) {
    const vertices = graph.getVertices();
    if (vertices.length === 0) return { mst: [], totalWeight: 0 };

    const inMST = {};
    const key = {};
    const parent = {};
    const mst = [];
    let totalWeight = 0;

    for (let vertex of vertices) {
      key[vertex] = Infinity;
      parent[vertex] = null;
      inMST[vertex] = false;
    }

    key[vertices[0]] = 0;

    for (let i = 0; i < vertices.length - 1; i++) {
      let minKey = Infinity;
      let minVertex = null;

      for (let vertex of vertices) {
        if (!inMST[vertex] && key[vertex] < minKey) {
          minKey = key[vertex];
          minVertex = vertex;
        }
      }

      if (minVertex === null) break;
      inMST[minVertex] = true;

      for (let edge of graph.getEdges(minVertex)) {
        let neighbor = edge.vertex;
        let weight = edge.weight;

        if (!inMST[neighbor] && weight < key[neighbor]) {
          key[neighbor] = weight;
          parent[neighbor] = minVertex;
        }
      }
    }

    for (let vertex of vertices) {
      if (parent[vertex] !== null) {
        mst.push({ u: parent[vertex], v: vertex, weight: key[vertex] });
        totalWeight += key[vertex];
      }
    }

    return { mst, totalWeight };
  }
}

module.exports = Prim;
