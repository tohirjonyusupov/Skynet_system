class Dijkstra {
  static dijkstraAlgorithm(graph, startVertex) {
    const distances = {};
    const visited = {};
    const previous = {};

    for (let vertex of graph.getVertices()) {
      distances[vertex] = vertex === startVertex ? 0 : Infinity;
      previous[vertex] = null;
    }

    for (let i = 0; i < graph.getVertices().length; i++) {
      let minDistance = Infinity;
      let minVertex = null;

      for (let vertex of graph.getVertices()) {
        if (!visited[vertex] && distances[vertex] < minDistance) {
          minDistance = distances[vertex];
          minVertex = vertex;
        }
      }

      if (minVertex === null) break;
      visited[minVertex] = true;

      for (let edge of graph.getEdges(minVertex)) {
        let neighbor = edge.vertex;
        let distance = edge.weight;

        if (!visited[neighbor]) {
          let newDistance = distances[minVertex] + distance;
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            previous[neighbor] = minVertex;
          }
        }
      }
    }

    return { distances, previous };
  }

  static getPath(previous, startVertex, endVertex) {
    let path = [];
    let current = endVertex;

    while (current !== null) {
      path.unshift(current);
      current = previous[current];
    }

    return path[0] === startVertex ? path : [];
  }
}

module.exports = Dijkstra;
