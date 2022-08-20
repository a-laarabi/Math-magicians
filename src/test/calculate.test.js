import calculate from '../logic/calculate';

describe('test the calculate file', () => {
  const obj = { total: null, next: null, operation: null };

  it('it will return null object if it is AC', () => {
    const result = calculate(obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
