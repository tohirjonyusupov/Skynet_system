const Stack = require('../stack/Stack');

describe('Stack Tests', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should push elements', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.items).toEqual([10, 20]);
  });

  test('should pop elements (LIFO)', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
  });

  test('should return undefined when popping from empty stack', () => {
    expect(stack.pop()).toBeUndefined();
  });

  test('should peek without removing', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);
  });

  test('should check if empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('should return size', () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
  });

  test('should clear stack', () => {
    stack.push(10);
    stack.push(20);
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
