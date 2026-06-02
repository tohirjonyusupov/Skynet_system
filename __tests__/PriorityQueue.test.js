const PriorityQueue = require('../queue/PriorityQueue');

describe('Priority Queue Tests', () => {
  let pq;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  test('should enqueue elements with priority', () => {
    pq.enqueue('High', 1);
    pq.enqueue('Low', 3);
    expect(pq.items[0].element).toBe('High');
  });

  test('should maintain priority order', () => {
    pq.enqueue('A', 3);
    pq.enqueue('B', 1);
    pq.enqueue('C', 2);
    expect(pq.items[0].element).toBe('B');
    expect(pq.items[1].element).toBe('C');
    expect(pq.items[2].element).toBe('A');
  });

  test('should dequeue highest priority first', () => {
    pq.enqueue('A', 3);
    pq.enqueue('B', 1);
    pq.enqueue('C', 2);
    expect(pq.dequeue().element).toBe('B');
  });

  test('should check if empty', () => {
    expect(pq.isEmpty()).toBe(true);
    pq.enqueue('Test', 1);
    expect(pq.isEmpty()).toBe(false);
  });

  test('should return size', () => {
    expect(pq.size()).toBe(0);
    pq.enqueue('A', 1);
    pq.enqueue('B', 2);
    expect(pq.size()).toBe(2);
  });
});
