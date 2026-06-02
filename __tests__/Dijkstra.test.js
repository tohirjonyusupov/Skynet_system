const Graph = require('../graph/Graph');
const Dijkstra = require('../graph/Dijkstra');

describe('Dijkstra Algorithm Tests', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    ['A', 'B', 'C', 'D', 'E'].forEach(v => graph.addVertex(v));
    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'C', 1);
    graph.addEdge('B', 'D', 5);
    graph.addEdge('C', 'D', 8);
    graph.addEdge('C', 'E', 10);
    graph.addEdge('D', 'E', 2);
  });

  test('should find shortest distances from start vertex', () => {
    const { distances } = Dijkstra.dijkstraAlgorithm(graph, 'A');
    expect(distances['A']).toBe(0);
    expect(distances['C']).toBe(2);
    expect(distances['B']).toBe(3);
  });

  test('should reconstruct path', () => {
    const { distances, previous } = Dijkstra.dijkstraAlgorithm(graph, 'A');
    const path = Dijkstra.getPath(previous, 'A', 'D');
    expect(path).toContain('A');
    expect(path).toContain('D');
  });

  test('should handle unreachable vertices', () => {
    const graphDisconnected = new Graph();
    graphDisconnected.addVertex('A');
    graphDisconnected.addVertex('B');
    graphDisconnected.addVertex('C');
    graphDisconnected.addEdge('A', 'B', 1);
    const { distances } = Dijkstra.dijkstraAlgorithm(graphDisconnected, 'A');
    expect(distances['C']).toBe(Infinity);
  });

  test('should return empty path for unreachable destination', () => {
    const graphDisconnected = new Graph();
    graphDisconnected.addVertex('A');
    graphDisconnected.addVertex('B');
    const { previous } = Dijkstra.dijkstraAlgorithm(graphDisconnected, 'A');
    const path = Dijkstra.getPath(previous, 'A', 'B');
    expect(path).toEqual([]);
  });
});
