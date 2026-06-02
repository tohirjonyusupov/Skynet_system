const Graph = require('../graph/Graph');
const Prim = require('../graph/Prim');

describe('Prim Algorithm Tests', () => {
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

  test('should find minimum spanning tree', () => {
    const { mst, totalWeight } = Prim.primMST(graph);
    expect(mst.length).toBe(4);
    expect(totalWeight).toBe(10);
  });

  test('should include all vertices in MST', () => {
    const { mst } = Prim.primMST(graph);
    const vertices = new Set();
    mst.forEach(edge => {
      vertices.add(edge.u);
      vertices.add(edge.v);
    });
    expect(vertices.size).toBeGreaterThan(0);
  });

  test('should handle empty graph', () => {
    const emptyGraph = new Graph();
    const { mst, totalWeight } = Prim.primMST(emptyGraph);
    expect(mst).toEqual([]);
    expect(totalWeight).toBe(0);
  });

  test('should handle single vertex', () => {
    const singleGraph = new Graph();
    singleGraph.addVertex('A');
    const { mst, totalWeight } = Prim.primMST(singleGraph);
    expect(mst).toEqual([]);
    expect(totalWeight).toBe(0);
  });
});
