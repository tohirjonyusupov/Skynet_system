const Queue = require('../queue/Queue');

describe('Queue Tests', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should enqueue elements', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.items).toEqual([10, 20]);
  });

  test('should dequeue elements (FIFO)', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
  });

  test('should return undefined when dequeuing from empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  test('should get front element without removing', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.front()).toBe(10);
    expect(queue.size()).toBe(2);
  });

  test('should check if empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
  });

  test('should return size', () => {
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  test('should clear queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});
