const BST = require('../tree/BST');

describe('BST (Binary Search Tree) Tests', () => {
  let bst;

  beforeEach(() => {
    bst = new BST();
  });

  test('should insert values', () => {
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);
    expect(bst.root.value).toBe(50);
    expect(bst.root.left.value).toBe(30);
    expect(bst.root.right.value).toBe(70);
  });

  test('should search for values', () => {
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);
    expect(bst.search(30)).toBe(true);
    expect(bst.search(100)).toBe(false);
  });

  test('should perform in-order traversal', () => {
    [50, 30, 70, 20, 40, 60, 80].forEach(val => bst.insert(val));
    expect(bst.inOrder()).toEqual([20, 30, 40, 50, 60, 70, 80]);
  });

  test('should perform pre-order traversal', () => {
    [50, 30, 70, 20, 40].forEach(val => bst.insert(val));
    expect(bst.preOrder()).toEqual([50, 30, 20, 40, 70]);
  });

  test('should perform post-order traversal', () => {
    [50, 30, 70, 20, 40].forEach(val => bst.insert(val));
    expect(bst.postOrder()).toEqual([20, 40, 30, 70, 50]);
  });

  test('should not insert duplicate values', () => {
    bst.insert(50);
    const result = bst.insert(50);
    expect(result).toBeUndefined();
  });

  test('should remove values', () => {
    [50, 30, 70, 20, 40, 60, 80].forEach(val => bst.insert(val));
    bst.remove(30);
    expect(bst.search(30)).toBe(false);
    expect(bst.inOrder()).toEqual([20, 40, 50, 60, 70, 80]);
  });

  test('should handle empty tree', () => {
    expect(bst.search(10)).toBe(false);
    expect(bst.inOrder()).toEqual([]);
  });
});
