const Kruskal = require('../graph/Kruskal');

describe('Kruskal Algorithm Tests', () => {
  let edges;

  beforeEach(() => {
    edges = [
      { u: 0, v: 1, weight: 4 },
      { u: 0, v: 2, weight: 2 },
      { u: 1, v: 2, weight: 1 },
      { u: 1, v: 3, weight: 5 },
      { u: 2, v: 3, weight: 8 },
      { u: 2, v: 4, weight: 10 },
      { u: 3, v: 4, weight: 2 }
    ];
  });

  test('should find minimum spanning tree', () => {
    const { mst, totalWeight } = Kruskal.kruskalMST(5, edges);
    expect(mst.length).toBe(4);
    expect(totalWeight).toBe(10);
  });

  test('should sort edges by weight', () => {
    const { mst } = Kruskal.kruskalMST(5, edges);
    expect(mst[0].weight).toBe(1);
    expect(mst[1].weight).toBe(2);
  });

  test('should not create cycles', () => {
    const { mst } = Kruskal.kruskalMST(5, edges);
    const n = 5;
    expect(mst.length).toBe(n - 1);
  });

  test('should handle empty edges', () => {
    const { mst, totalWeight } = Kruskal.kruskalMST(3, []);
    expect(mst).toEqual([]);
    expect(totalWeight).toBe(0);
  });

  test('should connect all vertices', () => {
    const { mst } = Kruskal.kruskalMST(5, edges);
    const vertices = new Set();
    mst.forEach(edge => {
      vertices.add(edge.u);
      vertices.add(edge.v);
    });
    expect(vertices.size).toBe(5);
  });
});
