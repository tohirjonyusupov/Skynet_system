const Graph = require('../graph/Graph');

describe('Graph Tests', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('should add vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.vertices).toContain('A');
    expect(graph.vertices).toContain('B');
  });

  test('should not add duplicate vertices', () => {
    graph.addVertex('A');
    graph.addVertex('A');
    expect(graph.vertices.length).toBe(1);
  });

  test('should add edges', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.adjacencyList['A']).toBeDefined();
    expect(graph.adjacencyList['A'][0].vertex).toBe('B');
    expect(graph.adjacencyList['A'][0].weight).toBe(5);
  });

  test('should add edges in both directions for undirected graph', () => {
    graph.addEdge('A', 'B', 3);
    expect(graph.adjacencyList['A'][0].vertex).toBe('B');
    expect(graph.adjacencyList['B'][0].vertex).toBe('A');
  });

  test('should get vertices', () => {
    graph.addVertex('X');
    graph.addVertex('Y');
    graph.addVertex('Z');
    expect(graph.getVertices().length).toBe(3);
  });

  test('should get edges', () => {
    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'C', 4);
    const edges = graph.getEdges('A');
    expect(edges.length).toBe(2);
  });

  test('should handle directed graph', () => {
    const directedGraph = new Graph(true);
    directedGraph.addEdge('A', 'B', 5);
    expect(directedGraph.adjacencyList['A'][0].vertex).toBe('B');
    expect(directedGraph.adjacencyList['B']).toEqual([]);
  });
});
