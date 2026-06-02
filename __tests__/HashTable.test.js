const HashTable = require('../hashing/HashTable');

describe('Hash Table Tests', () => {
  let ht;

  beforeEach(() => {
    ht = new HashTable();
  });

  test('should set and get values', () => {
    ht.set('ism', 'Shoxruz');
    expect(ht.get('ism')).toBe('Shoxruz');
  });

  test('should update existing values', () => {
    ht.set('yosh', 25);
    ht.set('yosh', 26);
    expect(ht.get('yosh')).toBe(26);
  });

  test('should return undefined for non-existent keys', () => {
    expect(ht.get('notexist')).toBeUndefined();
  });

  test('should return all keys', () => {
    ht.set('a', 1);
    ht.set('b', 2);
    ht.set('c', 3);
    const keys = ht.keys();
    expect(keys.length).toBe(3);
    expect(keys).toContain('a');
    expect(keys).toContain('b');
    expect(keys).toContain('c');
  });

  test('should return all values', () => {
    ht.set('x', 10);
    ht.set('y', 20);
    ht.set('z', 30);
    const values = ht.values();
    expect(values.length).toBe(3);
    expect(values).toContain(10);
    expect(values).toContain(20);
    expect(values).toContain(30);
  });

  test('should remove key-value pairs', () => {
    ht.set('key', 'value');
    expect(ht.remove('key')).toBe(true);
    expect(ht.get('key')).toBeUndefined();
  });

  test('should return false when removing non-existent key', () => {
    expect(ht.remove('notexist')).toBe(false);
  });

  test('should handle hash collisions', () => {
    ht.set('ab', 1);
    ht.set('ba', 2);
    expect(ht.get('ab')).toBe(1);
    expect(ht.get('ba')).toBe(2);
  });
});
